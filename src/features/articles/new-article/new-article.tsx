"use client";
import clsx from "clsx";

import {
  Button,
  ContentHeaderPanel,
  Input,
  InputFieldError,
  Label,
} from "@/components";
import { Tags } from "../components";
import { useNewArticleForm } from "./hooks";

const NewArticle = () => {
  const { register, handleSubmit, errors, onSubmit } = useNewArticleForm();

  const renderForm = (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 flex flex-col gap-y-3 pb-3"
    >
      <div>
        <Label htmlFor="email">Title</Label>
        <Input
          id="title"
          placeholder="Title"
          className="mt-2"
          inputError={Boolean(errors.title)}
          {...register("title", {
            required: "Required field",
          })}
        />
        {errors.title && (
          <InputFieldError className="mt-2">
            {errors.title.message}
          </InputFieldError>
        )}
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          placeholder="Description"
          className="mt-2"
          inputError={Boolean(errors.description)}
          {...register("description", { required: "Required field" })}
        />
        {errors.description && (
          <InputFieldError className="mt-2">
            {errors.description.message}
          </InputFieldError>
        )}
      </div>
      <div>
        <Label htmlFor="password">body</Label>
        <textarea
          id="body"
          className={clsx(
            "mt-2 w-full rounded-md border p-2 text-sm font-normal text-neutral-fg1-hover h-40",
            "placeholder:font-normal placeholder:text-sm placeholder:text-neutral-st2-default",
            "focus:outline-none",
            Boolean(errors.body)
              ? "border-error-fg1-default"
              : "border-neutral-st2-default"
          )}
          {...register("body", { required: "Required field" })}
        ></textarea>
        {errors.body && (
          <InputFieldError className="mt-2">
            {errors.body.message}
          </InputFieldError>
        )}
      </div>
      <Button type="submit" className="max-w-20 mt-3">
        Submit
      </Button>
    </form>
  );

  return (
    <main className="flex justify-center gap-x-6">
      <div className="bg-white rounded-md overflow-hidden basis-2/3 min-w-[752px]">
        <ContentHeaderPanel title="All Posts" />
        <div className="p-6">{renderForm}</div>
      </div>
      <div className="bg-white rounded-md overflow-hidden basis-1/3 min-w-[376px] p-6">
        <Tags />
      </div>
    </main>
  );
};

export default NewArticle;
