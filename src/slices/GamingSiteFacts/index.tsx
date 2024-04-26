import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { Swords, Gamepad2, Rss, Headset } from "lucide-react";

/**
 * Props for `GamingSiteFacts`.
 */
export type GamingSiteFactsProps =
  SliceComponentProps<Content.GamingSiteFactsSlice>;

/**
 * Component for "GamingSiteFacts" Slices.
 */
const GamingSiteFacts = ({ slice }: GamingSiteFactsProps): JSX.Element => {
  const icons = {
    Game: <Gamepad2 size={96} />,
    Wings: <Rss size={96} />,
    Headphones: <Headset size={96} />,
  };
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid items-center gap-16 md:grid-cols-2 md:flex-row">
        <div className="relative h-full min-h-96 w-full">
          <PrismicNextImage
            field={slice.primary.jumbotron}
            className="object-cover"
            sizes="100vw"
            fill
          />
        </div>
        <div className="grid grid-cols-[100px_1fr] items-center gap-x-4 gap-y-4">
          <h3 className="col-start-2 text-lg font-semibold text-[#f43838]">
            <PrismicText field={slice.primary.subtitle} />
          </h3>
          <Swords className="col-start-1" color="#f43838" size={96} />
          <div>
            <h2 className="text-2xl font-bold text-white md:text-4xl">
              <PrismicText field={slice.primary.title} />
            </h2>
          </div>
          {slice.items.map((item, index) => (
            <>
              <div className="col-start-1">{icons[item.icon || "Game"]}</div>
              <div className="col-start-2 flex flex-col gap-1" key={index}>
                <h3 className="text-xl font-semibold text-white md:text-2xl">
                  <PrismicText field={item.fact} />
                </h3>
                <p className="text-sm text-slate-300 md:text-base">
                  <PrismicText field={item.description} />
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default GamingSiteFacts;
