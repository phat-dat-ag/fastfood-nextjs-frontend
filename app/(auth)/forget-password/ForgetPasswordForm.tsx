"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/app/components/forms/FormField";
import Input from "@/app/components/forms/Input";
import CancelButton from "@/app/components/forms/buttons/CancelButton";
import SubmitButton from "@/app/components/forms/buttons/SubmitButton";
import { navigateBack } from "@/app/utils/navigation";
import { useRouter } from "next/navigation";
import { ForgetPasswordType } from "@/app/types/auth.types";

const schema = z
  .object({
    phone: z.string().regex(/^0\d{9}$/, "Số điện thoại không hợp lệ"),
    newPassword: z
      .string()
      .min(1, "Vui lòng nhập mật khẩu mới")
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .max(20, "Mật khẩu tối đa 20 ký tự"),
    confirmedPassword: z
      .string()
      .min(1, "Vui lòng nhập lại mật khẩu mới")
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .max(20, "Mật khẩu tối đa 20 ký tự"),
  })
  .refine((data) => data.newPassword === data.confirmedPassword, {
    path: ["confirmedPassword"],
    message: "Mật khẩu không khớp",
  });

type FormData = z.infer<typeof schema>;

function handleForgetPasswordFormSubmit(data: FormData) {
  const forgetPasswordRequest: ForgetPasswordType = {
    phone: data.phone,
    password: data.newPassword,
  };
  console.log(forgetPasswordRequest);
}

export default function ForgetPasswordForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleForgetPasswordFormSubmit)}
    >
      <FormField
        targetId="phone"
        labelTitle="Số điện thoại"
        errorMessage={errors.phone?.message}
      >
        <Input
          id="phone"
          type="text"
          {...register("phone")}
          placeholder="Nhập số điện thoại"
        />
      </FormField>
      <FormField
        targetId="newPassword"
        labelTitle="Mật khẩu mới"
        errorMessage={errors.newPassword?.message}
      >
        <Input
          id="newPassword"
          type="password"
          {...register("newPassword")}
          placeholder="Nhập mật khẩu mới"
        />
      </FormField>
      <FormField
        targetId="confirmedPassword"
        labelTitle="Xác nhận mật khẩu mới"
        errorMessage={errors.confirmedPassword?.message}
      >
        <Input
          id="confirmedPassword"
          type="password"
          {...register("confirmedPassword")}
          placeholder="Nhập lại mật khẩu mới"
        />
      </FormField>
      <div className="grid grid-cols-2 gap-4">
        <CancelButton
          buttonLabel="Quay lại"
          onClickFunction={() => navigateBack(router)}
        />
        <SubmitButton buttonLabel="Lấy lại mật khẩu" isDisabled={false} />
      </div>
    </form>
  );
}
