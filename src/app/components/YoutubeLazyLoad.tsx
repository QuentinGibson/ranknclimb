"use client";
import { useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

export default function YoutubeLazyLoad({
  slice,
}: {
  slice: Content.VideoShowcaseSlice;
}) {
  const { youtubeid, title, thumbnailoverride } = slice.primary;
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      {showVideo ? (
        <iframe
          width={560}
          height={315}
          src={`https://www.youtube-nocookie.com/embed/${youtubeid}?&autoplay=1`}
          // Keep for older browsers that still support the `frameBorder` attribute
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title || "Youtube video"}
          className="aspect-[16/9] h-full w-full border-none p-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setShowVideo(true)}
          className="group relative aspect-[16/9] w-full"
          aria-label={`Play video ${title}`}
        >
          <PrismicNextImage
            field={
              thumbnailoverride ||
              `https://img.youtube.com/vi/${youtubeid}/maxresdefault.jpg`
            }
            alt=""
            className="h-full w-full object-cover"
            fill
            loading="lazy"
          />
          <div className="relative grid place-items-center text-xl text-white opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
              className="h-2/5 w-1/2 transform transition group-hover:scale-105"
            >
              <path
                fill="currentColor"
                d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"
              />
            </svg>
          </div>
        </button>
      )}
    </>
  );
}
