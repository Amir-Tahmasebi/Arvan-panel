import { ImageProps } from "next/image";

export interface Props extends ImageProps {
  lazy?: boolean;
}
