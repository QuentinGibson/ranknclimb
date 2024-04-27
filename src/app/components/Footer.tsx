import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { Facebook, Instagram, Send, Twitter, Youtube } from "lucide-react";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const {
    logo,
    copyright,
    footer_letter,
    footeritems,
    newsletter,
    social_media,
    footer_background,
  } = settings.data;
  const socialMediaIcon = {
    Facebook: <Facebook />,
    Instagram: <Instagram />,
    Twitter: <Twitter />,
    Youtube: <Youtube />,
  };
  return (
    <footer
      className="bg-black py-28"
      style={{
        backgroundImage: `url(${footer_background.url || ""})`,
        backgroundSize: "cover",
      }}
    >
      {/* Background Image container */}
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-20">
        <div className="flex flex-col gap-16 md:flex-row">
          <div className="flex flex-col gap-4">
            <PrismicNextImage field={logo} className="size-20" />
            <p className="max-w-xs text-slate-400">
              <PrismicText field={footer_letter} />
            </p>
            <span className="text-2xl font-semibold">Follow Us:</span>
            <div className="flex gap-2">
              {social_media.map((item, index) => {
                if (isFilled.select(item.icon)) {
                  return (
                    <PrismicNextLink field={item.link} key={index} aria-label={`Our offical ${item.icon} page`}>
                      <div className="rounded-full bg-slate-800 p-2">
                        {socialMediaIcon[item.icon]}
                      </div>
                    </PrismicNextLink>
                  );
                }
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-bold">Useful Links</p>
            <div className="h-1 w-[140px] bg-gradient-to-r from-[#f43838] to-[#c27373]" />
            <ul className="flex flex-col gap-2">
              {footeritems.map((item, index) => {
                return (
                  <li key={index}>
                    <PrismicNextLink
                      field={item.link}
                      className="font-semibold hover:text-[#f43838]"
                    >
                      {item.label}
                    </PrismicNextLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-bold">Newletter</p>
            <div className="h-1 w-[140px] bg-gradient-to-r from-[#f43838] to-[#c27373]" />
            <span className="max-w-xs text-slate-400">
              <PrismicText field={newsletter} />
            </span>
            <form action="">
              <div className="flex h-11 w-fit items-center gap-2 rounded-xl bg-slate-800 py-2 pl-6 pr-2">
                <input
                  type="email"
                  className="w-64 bg-transparent"
                  id="emailField"
                  placeholder="Enter your email"
                  aria-placeholder="Enter your email"
                  aria-label="Email"
                />
                <div className="h-full w-[0.5px] bg-black" />
                <button
                  type="submit"
                  className="flex w-10 justify-center"
                  aria-label="submit"
                >
                  <Send className="size-6 text-[#f43838]" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <span>
            <PrismicText field={copyright} />
          </span>
        </div>
      </div>
    </footer>
  );
}
