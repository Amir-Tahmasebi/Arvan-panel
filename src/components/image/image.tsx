import Image from "next/image";
import React from "react";

// types
import type { Props } from "./";

const CustomImage: React.FC<Props> = ({
  lazy = true,
  alt,
  placeholder,
  blurDataURL,
  ...props
}) => {
  return (
    <Image
      {...props}
      alt={alt}
      loading={lazy ? "lazy" : "eager"}
      placeholder={placeholder || "blur"}
      blurDataURL={blurDataURL}
    />
  );
};

export default CustomImage;
