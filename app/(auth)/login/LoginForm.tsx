"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginRequestType } from "@/app/types/auth.types";
import FormField from "@/app/components/forms/FormField";
import Input from "@/app/components/forms/Input";
import CancelButton from "@/app/components/forms/buttons/CancelButton";
import SubmitButton from "@/app/components/forms/buttons/SubmitButton";

const schema = z.object({
  username: z
    .string()
    .min(1, "Vui lòng nhập tên đăng nhập")
    .min(8, "Tên đăng nhập có ít nhất 8 ký tự")
    .max(20, "Tên đăng nhập tối đa 20 ký tự"),
  password: z
    .string()
    .min(1, "Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .max(20, "mật khẩu tối đa 20 ký tự"),
});

type FormData = z.infer<typeof schema>;

function handleLoginFormSubmit(formData: FormData) {
  const loginRequest: LoginRequestType = {
    username: formData.username,
    password: formData.password,
  };
  console.log("Submit login form", loginRequest);
}

function handleCancelLogin() {
  console.log("Go back");
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      className="w-[40%] flex flex-col gap-4"
      onSubmit={handleSubmit(handleLoginFormSubmit)}
    >
      <FormField
        targetId="username"
        labelTitle="Tên đăng nhập"
        errorMessage={errors.username?.message}
      >
        <Input
          id="username"
          type="text"
          {...register("username")}
          placeholder="Nhập tên đăng nhập"
        />
      </FormField>
      <FormField
        targetId="password"
        labelTitle="Mật khẩu"
        errorMessage={errors.password?.message}
      >
        <Input
          id="password"
          type="password"
          {...register("password")}
          placeholder="Nhập mật khẩu"
        />
      </FormField>
      <div className="grid grid-cols-2 gap-4">
        <CancelButton
          buttonLabel="Quay lại"
          onClickFunction={handleCancelLogin}
        />
        <SubmitButton buttonLabel="Đăng nhập" isDisabled={false} />
      </div>
    </form>
  );
}
