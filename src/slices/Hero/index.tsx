import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { ArrowRight } from "lucide-react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-balance text-center text-5xl font-bold text-[#f43838] sm:text-7xl lg:text-8xl">
          <PrismicText field={slice.primary.title}></PrismicText>
        </h1>
        <p className="text-balance text-center text-base text-slate-300 md:text-2xl">
          <PrismicText field={slice.primary.description} />
        </p>
        <PrismicNextLink
          field={slice.primary.cta_link}
          className="clip-mask relative flex items-center gap-2 bg-[#f43838] px-8 py-5 font-bold text-black "
        >
          {slice.primary.cta_label}
          <ArrowRight />
        </PrismicNextLink>
      </div>
    </Bounded>
  );
};

export default Hero;
