import FormShell from "@/app/components/forms/FormShell";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <FormShell formTitle="Đăng nhập tài khoản" size="md">
      <LoginForm />
    </FormShell>
  );
}
