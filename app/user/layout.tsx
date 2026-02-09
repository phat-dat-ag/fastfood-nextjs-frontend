import UserFooter from "./components/UserFooter";
import UserHeader from "./components/UserHeader";

export default function UserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <UserHeader />
      <main className="w-[80%] mx-auto">{children}</main>
      <UserFooter />
    </div>
  );
}
