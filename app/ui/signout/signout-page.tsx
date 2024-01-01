//TODO: Fix tablet view
//TODO: Finish registration path by adding regristion steps
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  EnvelopeIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { inter } from '../fonts';
import React from 'react';
import SocialButton from '../SocialButton';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface FormInputProps {
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  name: string;
  email?: boolean;
}

function FormInput({
  label,
  icon,
  placeholder,
  name,
  email = false,
}: FormInputProps) {
  return (
    <label className="w-full form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <div className="inline-flex w-full items-center justify-start gap-2.5 self-stretch rounded-xl bg-base-200 p-3">
        {icon}
        {email ? (
          <input
            type="email"
            placeholder={placeholder}
            className="w-full max-w-xs input bg-base-200"
            name={name}
          />
        ) : (
          <input
            type="password"
            placeholder={placeholder}
            className="w-full max-w-xs input bg-base-200"
            name={name}
          />
        )}
      </div>
    </label>
  );
}

interface SignUpPageProps {
  dispatch: (payload: FormData) => void;
  errorMessage?: string | undefined;
}

export default function SignUpPage({
  dispatch,
  errorMessage,
}: SignUpPageProps) {
  return (
    <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-8">
      <div className="hidden p-10 bg-base-300 md:block">
        <div className="flex flex-col items-center justify-center h-screen gap-8">
          <div className="avatar">
            <div className="relative w-48 mask mask-hexagon-2">
              <Image
                unoptimized={true}
                src="/league-of-legends-wallpaper.jpg"
                alt={'League of Legends champions posing'}
                width={1920}
                height={1080}
              />
            </div>
          </div>
          <h3 className="text-4xl font-semibold">Join Now</h3>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="w-6 h-6 text-success" />
              <p className="text-sm font-semibold ">Free Forever</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="w-6 h-6 text-success" />
              <p className="text-sm font-semibold ">Master the Game</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="w-6 h-6 text-success" />
              <p className="text-sm font-semibold ">New Updates</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="w-6 h-6 text-success" />
              <p className="text-sm font-semibold ">Show off Your Progress</p>
            </div>
          </div>
        </div>
      </div>
      <section
        className={`inline-flex flex-col justify-center gap-7 ${inter.className}`}
      >
        <div className="flex justify-between">
          <Image
            unoptimized={true}
            src="/placeholder-logo.png"
            width={50}
            height={100}
            alt={'RankNClimb Logo'}
          />
          <p>
            Already a member?{' '}
            <Link className="font-bold link-hover link" href={'/signin'}>
              Sign In
            </Link>
          </p>
        </div>
        <h1 className="text-5xl font-semibold leading-10">Sign Up</h1>
        <div className="flex flex-col items-start justify-start gap-8">
          <div className="flex flex-col items-start self-stretch justify-start gap-5">
            <h2 className="self-stretch text-sm font-semibold leading-normal">
              Sign in with Open accounts
            </h2>
            <div className="grid items-center justify-center grid-cols-2 gap-2">
              <SocialButton
                altText="Googe G"
                image="/Google_G_Logo.svg"
                brand="Google"
              />
              <SocialButton
                altText="Facebook Logo"
                image="/facebook-logo.svg"
                brand="Facebook"
              />
              <SocialButton
                altText="Discord Logo"
                image="/discord-mark-blue.svg"
                brand="Discord"
              />
              <SocialButton
                altText="Twitch Logo"
                image="/TwitchGlitchPurple.svg"
                brand="Twitch"
              />
            </div>
          </div>
          <div className="relative h-0.5 w-full rounded-sm bg-base-200" />
          <div className="flex flex-col items-start self-stretch justify-start gap-5">
            <span className="self-stretch text-sm font-semibold leading-none">
              Or continue with email address
            </span>
            <form
              className="flex flex-col items-center justify-center w-full gap-4"
              action={dispatch}
            >
              <FormInput
                label="Email:"
                icon={<EnvelopeIcon width={24} height={24} />}
                placeholder="Enter email here"
                name="email"
                email={true}
              />

              <button
                type="submit"
                className="w-full font-bold btn btn-primary"
              >
                Continue
              </button>
            </form>
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="w-5 h-5 text-error" />
                <p className="text-sm text-error">{errorMessage}</p>
              </>
            )}
          </div>
        </div>
        <p className="self-stretch text-sm font-semibold leading-normal ">
          This site is protected by reCAPTCHA and the Google Privacy Policy.
        </p>
      </section>
    </div>
  );
}
