import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `VideoShowcase`.
 */
export type VideoShowcaseProps =
  SliceComponentProps<Content.VideoShowcaseSlice>;

/**
 * Component for "VideoShowcase" Slices.
 */
const VideoShowcase = ({ slice }: VideoShowcaseProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for video_showcase (variation: {slice.variation})
      Slices
    </section>
  );
};

export default VideoShowcase;
