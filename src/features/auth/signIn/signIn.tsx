"use client";
import Link from "next/link";

import { APP_ROUTES } from "@/config";
import { Form } from "./components";
import { useSignIn } from "./";

const SignIn = () => {
  const { onSubmit, loading } = useSignIn();

  const renderHeader = (
    <div className="py-[38px] px-6 border-b border-neutral-st3-default">
      <h2 className="font-semibold text-lg text-neutral-fg1-default">
        Sign in
      </h2>
    </div>
  );

  const renderFooter = (
    <div className="flex justify-center items-start gap-x-2">
      <span className="text-neutral-fg1-default font-normal text-sm">
        Don’t have an account?
      </span>
      <Link
        href={APP_ROUTES.AUTH.SIGN_UP}
        className="text-primary-bg2-default font-semibold text-sm"
      >
        Sign up now
      </Link>
    </div>
  );
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <main className="w-full max-w-[480px] min-h-[418px] bg-white rounded-md">
        <>{renderHeader}</>
        <>
          <Form onSubmit={onSubmit} loading={loading} />
        </>
        <>{renderFooter}</>
      </main>
    </div>
  );
};

export default SignIn;
