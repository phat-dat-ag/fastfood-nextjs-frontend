import FormTitle from "@/app/components/forms/FormTitle";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <FormTitle formTitle="Đăng nhập tài khoản" />
      <LoginForm />
    </div>
  );
}
