"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib";
import { RegisterPayloadType } from "@/types";
import { APP_ROUTES } from "@/config";

export const useSignUp = () => {
    const { push } = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: RegisterPayloadType) => {
        try {
            setLoading(true);
            const response = await registerUser(data);
            if (response.success) {
                push(APP_ROUTES.AUTH.SIGN_IN);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return { onSubmit, loading };
};
