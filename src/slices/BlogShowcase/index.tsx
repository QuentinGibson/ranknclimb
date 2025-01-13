import Bounded from "@/app/components/Bounded";
import RecentBlogs from "@/app/components/RecentBlogs";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogShowcase`.
 */
export type BlogShowcaseProps = SliceComponentProps<Content.BlogShowcaseSlice>;

/**
 * Component for "BlogShowcase" Slices.
 */
const BlogShowcase = ({ slice }: BlogShowcaseProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-sm font-semibold text-[#f43838] md:text-base">
            <PrismicText field={slice.primary.title} />
          </h3>
          <h2 className="text-4xl font-bold">
            <PrismicText field={slice.primary.subtitle} />
          </h2>
        </div>
        <RecentBlogs />
      </div>
    </Bounded>
  );
};

export default BlogShowcase;
