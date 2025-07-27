import clsx from "clsx";

import { Props } from "./";

const Label = ({ children, className, ...props }: Props) => {
  return (
    <label className={clsx(["text-neutral-fg1-default text-sm font-normal", className])} {...props}>
      {children}
    </label>
  );
};

export default Label;
