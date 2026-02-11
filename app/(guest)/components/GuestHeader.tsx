"use client";

import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import SecondaryButton from "@/app/components/buttons/SecondaryButton";
import Header from "@/app/components/Header";
import { GUEST_HEADER_ITEMS } from "@/app/constants/layout.constants";
import { AUTH_ROUTES } from "@/app/constants/route.constants";
import { navigatePush } from "@/app/utils/navigation";
import { useRouter } from "next/navigation";

export default function GuestHeader() {
  const router = useRouter();

  return (
    <Header headerItems={GUEST_HEADER_ITEMS}>
      <div className="flex justify-end gap-4">
        <SecondaryButton
          buttonLabel="Đăng ký"
          onClickFunction={() => navigatePush(router, AUTH_ROUTES.REGISTER)}
        />
        <PrimaryButton
          buttonLabel="Đăng nhập"
          onClickFunction={() => navigatePush(router, AUTH_ROUTES.LOGIN)}
        />
      </div>
    </Header>
  );
}
