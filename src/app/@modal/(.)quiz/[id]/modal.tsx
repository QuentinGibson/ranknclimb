"use client";

import React from "react";
import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { LuX } from "react-icons/lu";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop ">
      <dialog
        ref={dialogRef}
        className="modal m-0 h-screen max-h-full w-screen max-w-full bg-zinc-900/60"
        onClose={onDismiss}
      >
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="relative z-10 h-4/5 min-h-96 w-4/5  rounded-lg bg-[#0d0c11] px-2 text-white">
            <div className="absolute right-10 top-5 w-fit">
              <button onClick={onDismiss} className="close-button absolute">
                <LuX className="size-6 text-white" />
              </button>
            </div>
            {children}
          </div>
        </div>
        <div
          className="absolute left-0 top-0 h-screen w-screen "
          onClick={onDismiss}
        ></div>
      </dialog>
    </div>,
    document.getElementById("modal-root")!,
  );
}
