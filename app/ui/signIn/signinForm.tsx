'use client';
import Image from 'next/image';
import {
  EnvelopeIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

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
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <div className="inline-flex w-full items-center justify-start gap-2.5 self-stretch rounded-xl bg-base-200 p-3">
        {icon}
        {email ? (
          <input
            type="email"
            placeholder={placeholder}
            className="input w-full max-w-xs bg-base-200"
            name={name}
          />
        ) : (
          <input
            type="password"
            placeholder={placeholder}
            className="input w-full max-w-xs bg-base-200"
            name={name}
          />
        )}
      </div>
    </label>
  );
}
export default function SigninForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const status = useFormStatus();
  return (
    <>
      <form
        className="flex w-full flex-col items-center justify-center gap-4"
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
        <button
          disabled={status.pending}
          type="submit"
          className="btn btn-primary w-full font-bold"
        >
          Sign In
        </button>
      </form>
      {errorMessage && (
        <>
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-500">{errorMessage}</p>
        </>
      )}
    </>
  );
}
