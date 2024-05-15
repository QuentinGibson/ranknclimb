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
        className="modal m-0 flex h-screen max-h-full w-screen max-w-full items-center justify-center bg-zinc-900/60"
        onClose={onDismiss}
      >
        <div className="relative w-4/5 rounded-lg bg-[#0d0c11] px-7 py-3 text-white">
          <div className="absolute right-0 top-3">
            <button onClick={onDismiss} className="close-button">
              <LuX className="size-6 text-white" />
            </button>
          </div>
          {children}
        </div>
      </dialog>
    </div>,
    document.getElementById("modal-root")!,
  );
}
