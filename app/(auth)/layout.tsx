import GuestHeader from "../(guest)/components/GuestHeader";
import Footer from "../components/Footer";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <GuestHeader />
      <div className="w-[60%] mx-auto mt-8">{children}</div>
      <Footer />
    </div>
  );
}
