import clsx from "clsx";
import { Props } from "./";

const inputFieldError = ({ children, className }: Props) => {
  return (
    <p className={clsx("text-xs text-error-fg1-default font-semibold", className)}>
      {children}
    </p>
  );
};

export default inputFieldError;
