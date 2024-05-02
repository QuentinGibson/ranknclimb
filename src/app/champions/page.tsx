import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "../components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("champions");
  const champions = await client.getAllByType("champion", {
    orderings: "my.champion.name",
  });

  return (
    <>
      <section>
        <div className="flex items-center justify-center bg-neutral-950 py-28">
          <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl">
            Champions
          </h1>
        </div>
      </section>
      <Bounded>
        <ul className="grid grid-cols-2 gap-16 sm:grid-cols-3 lg:grid-cols-5">
          {champions.map((champion, index) => (
            <li
              className="flex flex-col items-center justify-center gap-4"
              key={index}
            >
              <PrismicNextLink document={champion}>
                <div className="relative aspect-[77/140] h-56 sm:h-72 lg:h-96">
                  <PrismicNextImage
                    fill
                    field={champion.data.image}
                    className="h-full w-full"
                  />
                </div>
                <h2 className="text-lg font-bold">{champion.data.name}</h2>
              </PrismicNextLink>
            </li>
          ))}
        </ul>
        <SliceZone slices={page.data.slices} components={components} />
      </Bounded>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("champions");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
