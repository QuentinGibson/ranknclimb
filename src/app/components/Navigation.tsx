"use client";
import { Content, isFilled } from "@prismicio/client";
import { Menu, X } from "lucide-react";
import { Fragment, useState, MouseEvent } from "react";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import {
  SignInButton,
  SignUp,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Navigation({
  data,
}: {
  data: Content.SettingsDocumentData;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen(event: MouseEvent<HTMLButtonElement>) {
    setMenuOpen(true);
  }

  function handleMenuClose(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setMenuOpen(false);
  }

  return (
    <Fragment>
      {/* Mobile Navigation */}
      {isFilled.group(data.navitems) && (
        <div className={clsx("flex items-center gap-4 md:hidden")}>
          <button onClick={handleMenuOpen}>
            <Menu size={48} color="white" />
          </button>
          <SignedIn>
            <ul className="flex items-center gap-4">
              <li>
                <UserButton />
              </li>
            </ul>
          </SignedIn>
        </div>
      )}
      {menuOpen && (
        <div
          className={clsx(
            "absolute left-0 top-0 z-10 h-screen w-screen bg-[#0D0C11] md:hidden",
          )}
        >
          <div className="fixed z-20 px-4 py-4">
            <button onClick={handleMenuClose}>
              <X size={48} color="white" />
            </button>
          </div>
          <div className="px-6 pt-28">
            <ul className="flex flex-col items-center gap-4">
              {isFilled.group(data.navitems) &&
                data.navitems.map((navitem, index) => (
                  <li
                    key={index}
                    className="text-lg font-bold text-white hover:text-[#f43838]"
                  >
                    <PrismicNextLink field={navitem.link}>
                      {navitem.label}
                    </PrismicNextLink>
                  </li>
                ))}
            </ul>
            <SignedOut>
              <ul className="flex flex-col items-center justify-center gap-4 pt-14">
                <li>
                  <SignInButton>
                    <button className="text-lg font-bold text-white hover:text-[#f43838]">
                      Sign In
                    </button>
                  </SignInButton>
                </li>
                <li>
                  <SignUpButton>
                    <button className="text-lg font-bold text-white hover:text-[#f43838]">
                      Sign Up
                    </button>
                  </SignUpButton>
                </li>
              </ul>
            </SignedOut>
          </div>
        </div>
      )}
      {/* Desktop Navigation */}
      <div className="hidden w-full grow justify-between md:flex">
        {isFilled.group(data.navitems) && (
          <ul className={clsx("items-center gap-4 md:flex")}>
            {data.navitems.map((navitem, index) => (
              <li key={index}>
                <PrismicNextLink
                  field={navitem.link}
                  className="text-lg font-bold text-white hover:text-[#f43838]"
                >
                  {navitem.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        )}
        <SignedOut>
          {isFilled.group(data.navigation_signed_out_actions) && (
            <ul className="flex items-center gap-4">
              <li>
                <SignInButton>
                  <button className="font-bold text-white hover:text-[#f43838]">
                    Sign In
                  </button>
                </SignInButton>
              </li>
              <li>
                <SignUpButton>
                  <button className="font-bold text-white hover:text-[#f43838]">
                    Sign Up
                  </button>
                </SignUpButton>
              </li>
            </ul>
          )}
        </SignedOut>
        <SignedIn>
          <ul className="flex items-center gap-4">
            {data.navigation_signed_in_actions.map((action_item, index) => (
              <li key={index}>
                {action_item.cta ? (
                  <PrismicNextLink
                    field={action_item.link}
                    className="focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-full border border-gray-100/20 bg-gray-200/10 px-4 py-2 text-lg font-bold text-gray-200 outline-none ring-red-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-red-800 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-[#f43838]/40 hover:text-[#f43838] after:hover:bg-opacity-15 focus:ring-2"
                  >
                    {action_item.label}
                  </PrismicNextLink>
                ) : (
                  <PrismicNextLink
                    field={action_item.link}
                    className="text-lg font-bold text-white hover:text-[#f43838]"
                  >
                    {action_item.label}
                  </PrismicNextLink>
                )}
              </li>
            ))}
            <li>
              <UserButton />
            </li>
          </ul>
        </SignedIn>
      </div>
    </Fragment>
  );
}
