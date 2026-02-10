"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/app/components/forms/FormField";
import Input from "@/app/components/forms/Input";
import CancelButton from "@/app/components/forms/buttons/CancelButton";
import SubmitButton from "@/app/components/forms/buttons/SubmitButton";
import AuthRedirect from "../components/AuthRedirect";
import { useRouter } from "next/navigation";
import { navigateBack, navigatePush } from "@/app/utils/navigation";
import { AUTH_ROUTES } from "@/app/constants/route.constants";

const schema = z
  .object({
    phone: z.string().regex(/^0\d{9}$/, "Số điện thoại không hợp lệ"),
    name: z
      .string()
      .min(1, "Vui lòng nhập họ và tên")
      .min(2, "Họ và tên có ít nhất 2 ký tự")
      .max(80, "Họ và tên không vượt quá 80 ký tự"),
    birthday: z
      .string()
      .min(1, "Vui lòng nhập sinh nhật")
      .transform((value) => new Date(value))
      .refine((date) => !isNaN(date.getTime()), {
        message: "Ngày sinh không hợp lệ",
      })
      .refine((date) => date <= new Date(), {
        message: "Ngày sinh không được trong tương lai",
      }),
    password: z
      .string()
      .min(1, "Vui lòng nhập mật khẩu")
      .min(8, "Mật khẩu có ít nhất 8 ký tự")
      .max(20, "Mật khẩu không vượt quá 20 ký tự"),
    confirmedPassword: z
      .string()
      .min(1, "Vui lòng xác nhận mật khẩu")
      .min(8, "Mật khẩu xác nhận có ít nhất 8 ký tự")
      .max(20, "Mật khẩu xác nhận không vượt quá 20 ký tự"),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    path: ["confirmedPassword"],
    message: "Mật khẩu không khớp",
  });

type RegisterFormInput = z.input<typeof schema>;

type RegisterFormOutput = z.output<typeof schema>;

function handleRegisterFormSubmit(data: RegisterFormOutput) {
  console.log(data);
}

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput, any, RegisterFormOutput>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      className="grid grid-cols-2 gap-4"
      onSubmit={handleSubmit(handleRegisterFormSubmit)}
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
        targetId="name"
        labelTitle="Họ và tên"
        errorMessage={errors.name?.message}
      >
        <Input
          id="name"
          type="text"
          {...register("name")}
          placeholder="Nhập họ và tên"
        />
      </FormField>
      <FormField
        targetId="birthday"
        labelTitle="Sinh nhật"
        errorMessage={errors.birthday?.message}
      >
        <Input
          id="birthday"
          type="date"
          {...register("birthday")}
          placeholder="Nhập sinh nhật"
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
      <FormField
        targetId="confirmedPassword"
        labelTitle="Xác nhận mật khẩu"
        errorMessage={errors.confirmedPassword?.message}
      >
        <Input
          id="confirmedPassword"
          type="password"
          {...register("confirmedPassword")}
          placeholder="Nhập lại mật khẩu"
        />
      </FormField>
      <div className="col-span-2">
        <AuthRedirect
          message="Đã có tài khoản?"
          linkText="Đăng nhập tại đây"
          onClickFunction={() => navigatePush(router, AUTH_ROUTES.LOGIN)}
        />
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <CancelButton
          buttonLabel="Quay lại"
          onClickFunction={() => navigateBack(router)}
        />
        <SubmitButton buttonLabel="Đăng ký" isDisabled={false} />
      </div>
    </form>
  );
}
