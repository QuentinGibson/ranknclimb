import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("champion", params.uid, {
      fetchLinks: ["abilities.name", "abilities.image"],
    })
    .catch(() => notFound());

  return (
    <>
      <div className="relative">
        <div className="relative h-[700px]">
          <PrismicNextImage
            fill
            field={page.data.splashart}
            className="object-cover object-top"
          />
        </div>
        <Bounded className="">
          <div className="-mt-96 flex h-80 w-full opacity-70">
            <div className="bg-gradient-to-t from-[#0F1C23] to-[#000000]">
              <h1>{page.data.name}</h1>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <h2>Abillities</h2>
            <div className="flex gap-4">
              <ul>
                {page.data.abilities.map((ability, index) => {
                  console.log(ability);
                  return <li key={index}></li>;
                })}
              </ul>
            </div>
          </div>
        </Bounded>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("champion", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("champion");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
