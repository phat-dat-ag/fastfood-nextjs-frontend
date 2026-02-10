"use client";

import Header from "@/app/components/Header";
import {
  USER_HEADER_ITEMS,
  USSER_HEADER_ACTIONS,
} from "@/app/constants/layout.constants";
import { navigatePush } from "@/app/utils/navigation";
import { useRouter } from "next/navigation";

export default function UserHeader() {
  const router = useRouter();

  return (
    <Header headerItems={USER_HEADER_ITEMS}>
      <div className="grid grid-cols-[2fr_1fr]">
        <div className="flex gap-4">
          {USSER_HEADER_ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.path}
                onClick={() => navigatePush(router, action.path)}
              >
                <Icon />
              </div>
            );
          })}
        </div>
        <div>avatar here</div>
      </div>
    </Header>
  );
}
