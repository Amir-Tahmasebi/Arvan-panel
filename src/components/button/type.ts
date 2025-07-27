import { ComponentProps } from "react";

import { ButtonVariant, ButtonSize } from "@/config";



export type Props = {
    variant?: ButtonVariant
    size?: ButtonSize
} & ComponentProps<'button'>