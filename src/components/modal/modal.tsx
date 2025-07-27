"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Props } from "./";

export default function Modal({ isOpen, onClose, children }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000052]">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative z-10 bg-white  rounded-md  w-full max-w-[456px] overflow-hidden">
        {children}
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
}
