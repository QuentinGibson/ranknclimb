import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import Navigation from "@/app/components/Navigation";

export default async function NavigationBar() {
  const client = createClient();
  const settings = (await client.getAllByType("settings"))[0];
  const { data } = settings;

  return (
    <header className="bg-[#0D0C11] px-4 py-3 md:px-6">
      <div className="flex w-full items-center justify-between gap-8 lg:gap-16">
        <div className="relative h-[90px] w-[100px]">
          {isFilled.image(data.logo) ? (
            <PrismicNextImage field={data.logo} fill sizes="100px" />
          ) : (
            <Image
              src="/images/logo.svg"
              fill
              alt="The offical RankNClimb Logo!"
              sizes="100px"
            />
          )}
        </div>
        <Navigation data={data} />
      </div>
    </header>
  );
}
