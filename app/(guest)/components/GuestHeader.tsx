import Header from "@/app/components/Header";
import { GUEST_HEADER_ITEMS } from "@/app/constants/layout.constants";

export default function GuestHeader() {
  return (
    <Header headerItems={GUEST_HEADER_ITEMS}>
      <div>Login, Logout Button here</div>
    </Header>
  );
}
