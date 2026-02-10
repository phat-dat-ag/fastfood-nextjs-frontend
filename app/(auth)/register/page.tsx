import FormShell from "@/app/components/forms/FormShell";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <FormShell formTitle="Đăng ký tài khoản" size="lg">
      <RegisterForm />
    </FormShell>
  );
}
