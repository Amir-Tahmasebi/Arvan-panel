import { LoginPayloadType } from "@/types"

export type FormProps = {
    onSubmit: (data: LoginPayloadType) => void
    loading?:boolean
} 