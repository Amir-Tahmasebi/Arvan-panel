import { RegisterPayloadType } from "@/types"


export type FormProps = {
    onSubmit: (data: RegisterPayloadType) => void
    loading?:boolean
} 