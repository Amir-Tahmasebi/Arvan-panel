"use client";

import { useState } from "react";
import clsx from "clsx";
import { Props } from "./";
import Label from "../label";

const Checkbox = ({ label, defaultChecked, onChange }: Props) => {
  const [checked, setChecked] = useState(defaultChecked);

  const toggleChecked = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <div
      onClick={toggleChecked}
      className="flex items-center cursor-pointer select-none font-sans"
    >
      <div
        className={clsx(
          "w-4 h-4 rounded flex items-center justify-center transition-colors duration-200",
          {
            "bg-primary-bg2-default border-none": checked,
            "bg-transparent border-2 border-neutral-st1-default": !checked,
          }
        )}
      >
        {checked && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        )}
      </div>
      <Label className="ml-1">{label}</Label>
    </div>
  );
};

export default Checkbox;
