import Footer from "../components/Footer";
import GuestHeader from "./components/GuestHeader";

export default function UserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <GuestHeader />
      <main className="w-[80%] mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
