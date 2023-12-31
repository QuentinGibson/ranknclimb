import Image from 'next/image';
import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/outline';

export default function SignInForm() {
  return (
    <section className="inline-flex flex-col items-center justify-center gap-7 md:h-96 md:w-96">
      <h1 className="text-5xl font-semibold leading-10 text-zinc-900 md:w-72">
        Sign in
      </h1>
      <div className="flex flex-col items-start justify-start gap-8">
        <div className="flex h-24 flex-col items-start justify-start gap-5 self-stretch">
          <h2 className="self-stretch  text-sm font-semibold leading-normal text-zinc-900">
            Sign in with Open accounts
          </h2>
          <div className="inline-flex items-center justify-center gap-2">
            <button className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-zinc-100 bg-neutral-50 px-5 py-3">
              <Image
                alt="Google G"
                src="/Google_G_Logo.svg"
                width={24}
                height={24}
              />
              <span className="text-base font-bold leading-normal text-zinc-900">
                Google
              </span>
            </button>
            <button className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-zinc-100 bg-neutral-50 px-5 py-3">
              <Image
                src="/Apple_Logo.svg"
                alt="Apple Logo"
                width={24}
                height={24}
              />
              <div className="text-base font-bold leading-normal text-zinc-900">
                Apple ID
              </div>
            </button>
          </div>
        </div>
        <div className="relative h-0.5 rounded-sm bg-zinc-100 md:w-72" />
        <div className="flex flex-col items-start justify-start gap-5 self-stretch">
          <span className="self-stretch  text-xs font-semibold leading-none text-zinc-900">
            Or continue with email address
          </span>
          <form
            className="flex w-full flex-col items-center justify-center gap-4"
            action=""
          >
            <label className="leadnig-10 flex w-full flex-col gap-1 text-sm font-semibold">
              Email: <br />
              <div className="inline-flex w-full items-center justify-start gap-2.5 self-stretch rounded-xl border-zinc-200 bg-zinc-100 p-3">
                <EnvelopeIcon width={24} height={24} />
                <input
                  type="text"
                  placeholder="Enter email here"
                  className="border-0 bg-zinc-100"
                />
              </div>
            </label>
            <label className="leadnig-10 flex w-full flex-col gap-1 text-sm font-semibold">
              Password: <br />
              <div className="inline-flex w-full items-center justify-start gap-2.5 self-stretch rounded-xl border-zinc-200 bg-zinc-100 p-3">
                <LockClosedIcon width={24} height={24} />
                <input
                  type="text"
                  placeholder="Enter password here"
                  className="border-0 bg-zinc-100"
                />
              </div>
            </label>
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-500 px-5 py-3 text-white"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <p className="self-stretch text-sm font-semibold leading-normal text-zinc-400">
        This site is protected by reCAPTCHA and the Google Privacy Policy.
      </p>
      <div>
        <span className="text-sm font-semibold leading-normal text-gray-500">
          Don’t have an account?{' '}
        </span>
        <Link
          href="/signup"
          className="text-sm font-semibold leading-normal text-zinc-900"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
}
