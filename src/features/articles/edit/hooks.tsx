"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { AddArticlePayload } from "@/types";
import { updatedArticleById } from "@/lib";
import { ToastService } from "@/services";
import { APP_ROUTES } from "@/config";
import { Props } from ".";

export const useEditArticle = (article: Props["article"]) => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddArticlePayload>({
    defaultValues: {
      title: article.title,
      description: article.content,
      body: article.content,
    },
  });

  const onSubmit = async (data: AddArticlePayload) => {
    try {
      const response = await updatedArticleById({ ...data, id: article.id });
      if (response.success) {
        ToastService.success("Well done! Article updated successfully");
        push(APP_ROUTES.ADMIN.ARTICLES.INDEX);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
