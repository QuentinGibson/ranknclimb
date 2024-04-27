import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogShowcase`.
 */
export type BlogShowcaseProps = SliceComponentProps<Content.BlogShowcaseSlice>;

/**
 * Component for "BlogShowcase" Slices.
 */
const BlogShowcase = ({ slice }: BlogShowcaseProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_showcase (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BlogShowcase;
