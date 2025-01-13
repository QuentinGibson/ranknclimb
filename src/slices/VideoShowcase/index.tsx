import Bounded from "@/app/components/Bounded";
import YoutubeLazyLoad from "@/app/components/YoutubeLazyLoad";
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
const VideoShowcase = async ({
  slice,
}: VideoShowcaseProps): Promise<JSX.Element> => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full text-red-500">
        <YoutubeLazyLoad slice={slice} />
      </div>
    </Bounded>
  );
};

export default VideoShowcase;
