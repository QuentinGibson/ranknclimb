'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  EnvelopeIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { inter } from '../fonts';
import React from 'react';
import SocialButton from '../SocialButton';

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

interface SignInFormProps {
  dispatch: (payload: FormData) => void;
  errorMessage?: string | undefined;
}

export default function SignInPage({
  dispatch,
  errorMessage,
}: SignInFormProps) {
  return (
    <section
      className={`inline-flex flex-col justify-center gap-7 md:w-96 ${inter.className}`}
    >
      <h1 className="text-5xl font-semibold leading-10">Sign in</h1>
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

            <FormInput
              label="Password:"
              icon={<LockClosedIcon width={24} height={24} />}
              placeholder="Enter password here"
              name="password"
            />
            <button type="submit" className="w-full font-bold btn btn-primary">
              Sign In
            </button>
          </form>
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
      <p className="self-stretch text-sm font-semibold leading-normal ">
        This site is protected by reCAPTCHA and the Google Privacy Policy.
      </p>
      <div>
        <span className="text-sm font-semibold leading-normal ">
          Don’t have an account?{' '}
        </span>
        <Link
          href="/signup"
          className="text-sm font-semibold leading-normal link-hover link text-primary"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
}
