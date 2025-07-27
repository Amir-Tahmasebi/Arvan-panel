"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib";
import { CookieService } from "@/services";
import { useUserStore } from "@/store";
import { LoginPayloadType } from "@/types";
import { APP_ROUTES } from "@/config";

export const useSignIn = () => {
    const { push } = useRouter();
    const { setUser } = useUserStore();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: LoginPayloadType) => {
        try {
            setLoading(true);
            const response = await login(data);
            if (response.success) {
                setUser(response.data.user);
                CookieService.set("token", response.data.token);
                localStorage.setItem("username", response.data.user.username);
                push(APP_ROUTES.ADMIN.ARTICLES.INDEX);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return { onSubmit, loading };
};
