import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/app/components/Bounded";
import { Content, isFilled } from "@prismicio/client";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("champion", params.uid, {
      fetchLinks: ["abilities.name", "abilities.image", "abilities.questions"],
    })
    .catch(() => notFound());
  const totalQuestions = page.data.abilities.reduce(
    (count, ability) =>
      isFilled.contentRelationship(ability.spell)
        ? count +
          (ability.spell.data as Content.AbilitiesDocumentData).questions.length
        : count,
    0,
  );
  let userTotalCompleted = 0;

  return (
    <>
      <div className="relative">
        <div className="relative h-[700px]">
          <PrismicNextImage
            fill
            field={page.data.splashart}
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        <Bounded>
          <div className="z-10 -mt-[700px] mb-48 flex w-full sm:-mt-72 sm:mb-24">
            <div className="flex min-h-fit w-[500px] flex-col gap-8 rounded-3xl bg-gradient-to-t from-[#0F1C23]/20 to-[#000000] px-8 py-16">
              <h1 className="bg-gradient-to-b from-[#fe6565] to-[#c10000] bg-clip-text py-4 text-7xl font-bold text-transparent">
                {page.data.name}
              </h1>
              <h2 className="text-slate-200">
                <PrismicText field={page.data.description}></PrismicText>
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-col gap-16">
            <div className="flex items-center gap-8">
              <h2 className="bg-gradient-to-b from-[#fe6565] to-[#c10000] bg-clip-text text-6xl font-bold text-transparent">
                Skills
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex font-semibold">
                  <span>
                    {userTotalCompleted} / {totalQuestions}
                  </span>
                </div>
                <div
                  id="progress-bar"
                  className="h-3 w-[120px] overflow-hidden rounded-lg bg-[#1A1D26]"
                >
                  <div
                    className="z-10 h-full bg-gradient-to-l from-[#fe6565] to-[#c10000]"
                    style={{
                      width: `${(userTotalCompleted / totalQuestions) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="">
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.data.abilities.map((ability, index) => {
                  if (isFilled.contentRelationship(ability.spell) === false) {
                    throw new Error("Ability is missing spell relationship");
                  }
                  const { name, image, questions } = ability.spell
                    .data as Content.AbilitiesDocumentData;
                  let userCompleted = 0;
                  return (
                    <li key={index}>
                      <div className="rounded-3xl border-2 border-[#eb5757] bg-gradient-to-t from-[#601212]/70 from-10% to-[#360a0a] px-3 py-6">
                        <div className="flex flex-col items-center gap-2 md:items-baseline">
                          <h1 className="text-lg font-bold md:text-2xl">
                            {name}
                          </h1>
                          <div className="relative size-[80px] overflow-hidden rounded-3xl">
                            <PrismicNextImage
                              fill
                              field={image}
                              sizes="100px"
                            />
                          </div>
                          <div className="mt-4 flex w-full flex-col items-center justify-between gap-4 md:flex-row">
                            <div className="flex flex-col items-center justify-center sm:order-2">
                              <span className="font-semibold">
                                {userCompleted} / {questions.length}
                              </span>
                              <div
                                id="progress-bar"
                                className="h-3 w-[70px] overflow-hidden rounded-lg bg-[#1A1D26]"
                              >
                                <div
                                  className="z-10 h-full bg-gradient-to-l from-[#fe6565] to-[#c10000]"
                                  style={{
                                    width: `${(userCompleted / questions.length) * 100}%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                            <Link
                              href={`/quiz/${ability.spell.id}`}
                              passHref
                              className="rounded-lg bg-[#eb5757] px-6 py-1 font-semibold text-black sm:order-1"
                              scroll={false}
                            >
                              Take Mastery
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
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
