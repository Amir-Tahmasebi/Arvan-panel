"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components";
import { APP_ROUTES, ButtonSize, ButtonVariant } from "@/config";
import { CookieService } from "@/services";
import { useUserStore } from "@/store";

const Header = () => {
  const { push } = useRouter();
  const { user } = useUserStore();

  const [cachedUsername, setCachedUsername] = useState("");

  const username = user?.username || cachedUsername;

  const handleLogout = () => {
    CookieService.remove(process.env.NEXT_PUBLIC_TOKEN_KEY as string);
    push(APP_ROUTES.AUTH.SIGN_IN);
  };

  useEffect(() => {
    const payload = localStorage.getItem("username");
    if (!payload) return;
    setCachedUsername(payload);
  }, []);

  return (
    <header className="w-full h-16 bg-white border-b border-neutral-st3-default py-3 px-6 flex justify-between items-center">
      <div className="flex gap-x-0.5">
        <span className="font-normal text-sm text-neutral-fg1-default">
          Welcome
        </span>
        <span className="font-semibold text-sm text-neutral-fg1-default">
          {username}
        </span>
      </div>
      <Button
        className="max-w-[189px]"
        variant={ButtonVariant.secondary}
        size={ButtonSize.md}
      >
        Arvancloud Challenge
      </Button>
      <Button
        className="max-w-[82px]"
        variant={ButtonVariant["secondary-outline"]}
        onClick={handleLogout}
      >
        Log out
      </Button>
    </header>
  );
};

export default Header;
