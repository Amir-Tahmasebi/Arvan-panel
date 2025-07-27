import clsx from "clsx";

import { Props } from "./";

const Input = ({ className, inputError, ...props }: Props) => {
  const borderColor = inputError
    ? "border-error-fg1-default"
    : "border-neutral-st2-default";

  return (
    <input
      className={clsx(
        "w-full h-10 rounded-md border px-2 text-sm font-normal text-neutral-fg1-hover",
        "placeholder:font-normal placeholder:text-sm placeholder:text-neutral-st2-default",
        "focus:outline-none",
        borderColor,
        className
      )}
      {...props}
    />
  );
};

export default Input;
