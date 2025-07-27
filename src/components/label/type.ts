import { ComponentProps, ReactNode } from "react";

export type Props = {
    children: ReactNode
} & ComponentProps<'label'>