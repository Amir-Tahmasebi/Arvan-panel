import { useForm } from "react-hook-form";
import { AddArticlePayload } from "@/types";
import { addNewArticle } from "@/lib";
import { ToastService } from "@/services";

export const useNewArticleForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddArticlePayload>();

  const onSubmit = async (data: AddArticlePayload) => {
    try {
      const response = await addNewArticle(data);
      if (response.success) {
        ToastService.success("Well done! Article created successfuly");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { register, handleSubmit, errors, onSubmit };
};
