'use client';

import Link from 'next/link';
import SigninForm from './signinForm';
import { inter } from '../fonts';
import React from 'react';
import SocialButton from '../SocialButton';
import {
  authenticateWithDiscord,
  authtenticateWithTwitch,
  authenticateWithGoogle,
} from '@/app/lib/actions';

export default function SignInPage() {
  return (
    <section
      className={`inline-flex flex-col justify-center gap-7 md:w-96 ${inter.className}`}
    >
      <h1 className="text-5xl font-semibold leading-10">Sign in</h1>
      <div className="flex flex-col items-start justify-start gap-8">
        <div className="flex flex-col items-start justify-start gap-5 self-stretch">
          <h2 className="self-stretch text-sm font-semibold leading-normal">
            Sign in with Open accounts
          </h2>
          <div className="grid grid-cols-2 items-center justify-center gap-2">
            <SocialButton
              callback={authenticateWithGoogle}
              altText="Googe G"
              image="/Google_G_Logo.svg"
              brand="Google"
            />
            <SocialButton
              callback={authenticateWithDiscord}
              altText="Discord Logo"
              image="/discord-mark-blue.svg"
              brand="Discord"
            />
            <SocialButton
              callback={authtenticateWithTwitch}
              altText="Twitch Logo"
              image="/TwitchGlitchPurple.svg"
              brand="Twitch"
            />
          </div>
        </div>
        <div className="relative h-0.5 w-full rounded-sm bg-base-200" />
        <div className="flex flex-col items-start justify-start gap-5 self-stretch">
          <span className="self-stretch text-sm font-semibold leading-none">
            Or continue with email address
          </span>
          <SigninForm />
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
          href="/api/auth/signup"
          className="link-hover link text-sm font-semibold leading-normal text-primary"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
}
