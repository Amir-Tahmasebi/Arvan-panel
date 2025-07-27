import clsx from "clsx";
import React from "react";

import { ButtonSize, ButtonVariant } from "@/config";
import { Props } from "./";

const Button = ({ variant, size, className, children, ...props }: Props) => {
  const buttonVariantClass: Record<ButtonVariant, string> = {
    primary: "bg-primary-bg2-default px-4 rounded-lg font-semibold text-white",
    secondary:
      "bg-neutral-bg2-default text-neutral-fg1-default font-semibold rounded",
    "secondary-outline":
      "bg-white border border-neutral-st2-default text-neutral-fg1-default rounded-lg font-semibold ",
    error: "bg-error-fg1-default text-white rounded-lg",
    text: "bg-white text-neutral-fg1-default font-semibold py-1.5 rounded-md px-2 hover:bg-neutral-bg2-default",
  };

  const buttonSizeClass: Record<ButtonSize, string> = {
    lg: "",
    md: "h-10 w-full text-base",
    sm: "h-10 w-full text-sm",
    xs: "h-8 w-full text-sm",
  };

  const currentVariantClass =
    buttonVariantClass[(variant as ButtonVariant) || ButtonVariant.primary];
  const currentSizeClass =
    buttonSizeClass[(size as ButtonSize) || ButtonSize.sm];

  return (
    <button
      className={clsx(
        "disabled:bg-neutral-fg1-disable disabled:text-neutral-fg1-default",
        currentVariantClass,
        currentSizeClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
