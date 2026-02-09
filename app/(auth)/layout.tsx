export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="w-[60%] mx-auto mt-8">{children}</div>;
}
