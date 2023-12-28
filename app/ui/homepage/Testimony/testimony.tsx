import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface TestimonyProps {
  messages: string[];
}

//TODO: Style this component much better
//TODO: Look for inspiration on how to style this component
export default function Testimony({ messages }: TestimonyProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const message = messages[currentMessage];

  return (
    <div className="relative flex w-[1000px] flex-col">
      <div className="flex flex-col items-center">
        <div className="rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <div>{message}</div>
      </div>
      <div className="flex justify-around">
        <button
          onClick={() =>
            setCurrentMessage((prev) => {
              if (prev - 1 < 0) {
                return messages.length - 1;
              }
              return prev - 1;
            })
          }
        >
          <ChevronLeftIcon width={80} />
        </button>
        <button
          onClick={() =>
            setCurrentMessage((prev) => {
              if (prev + 1 > messages.length - 1) {
                return 0;
              }
              return prev + 1;
            })
          }
        >
          <ChevronRightIcon width={80} />
        </button>
      </div>
    </div>
  );
}
