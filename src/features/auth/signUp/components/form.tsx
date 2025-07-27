import { useForm } from "react-hook-form";

import { Button, Input, InputFieldError, Label } from "@/components";
import { RegisterPayloadType } from "@/types";
import { FormProps } from "./";

const Form = ({ onSubmit, loading }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayloadType>();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 flex flex-col gap-y-3 pb-3"
    >
      <div>
        <Label htmlFor="email">Username</Label>
        <Input
          id="username"
          type="text"
          placeholder="sample text"
          className="mt-2"
          inputError={Boolean(errors.username)}
          {...register("username", {
            required: "Required field",
          })}
        />
        {errors.username && (
          <InputFieldError className="mt-2">
            {errors.username.message}
          </InputFieldError>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="sample text"
          className="mt-2"
          inputError={Boolean(errors.email)}
          {...register("email", {
            required: "Required field",
          })}
        />
        {errors.email && (
          <InputFieldError className="mt-2">
            {errors.email.message}
          </InputFieldError>
        )}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="sample text"
          className="mt-2"
          inputError={Boolean(errors.password)}
          {...register("password", { required: "Required field" })}
        />
        {errors.password && (
          <InputFieldError className="mt-2">
            {errors.password.message}
          </InputFieldError>
        )}
      </div>
      <Button type="submit" className="max-w-[432px] mt-3" disabled={loading}>
        Sign up
      </Button>
    </form>
  );
};

export default Form;
