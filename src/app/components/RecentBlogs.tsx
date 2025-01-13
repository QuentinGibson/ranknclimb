import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { Calendar } from "lucide-react";

export default async function RecentBlogs() {
  const client = createClient({});
  const recentPosts = await client.getAllByType("blogpost", { limit: 3 });
  return (
    <div className="grid gap-4 md:grid-cols-3 md:gap-8">
      {recentPosts.map((post, index) => {
        return (
          isFilled.richText(post.data.title) &&
          isFilled.image(post.data.image) &&
          isFilled.date(post.data.date) && (
            <PrismicNextLink document={post} className="">
              <div className="group rounded-3xl bg-black px-6 py-10">
                <div
                  key={index}
                  className="grid grid-rows-[1fr_auto_120px_auto] gap-2"
                >
                  <div className="relative h-52 w-full">
                    <PrismicNextImage
                      field={post.data.image}
                      className="h-full w-full object-fill"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 text-[#f43838]" />
                    <span className="text-slate-400">
                      {new Date(post.data.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="">
                    <h4 className="h-full max-w-prose overflow-hidden text-ellipsis text-2xl font-semibold group-hover:underline">
                      <PrismicText field={post.data.title} />
                    </h4>
                  </div>
                  <span className="text-red-500 group-hover:underline">
                    Read more
                  </span>
                </div>
              </div>
            </PrismicNextLink>
          )
        );
      })}
    </div>
  );
}
