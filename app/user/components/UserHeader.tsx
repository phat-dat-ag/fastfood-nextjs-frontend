"use client";

import {
  USER_HEADER_ITEMS,
  USSER_HEADER_ACTIONS,
} from "@/app/constants/layout.constants";
import { navigatePush } from "@/app/utils/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

function goToUserPage(router: AppRouterInstance, path: string) {
  navigatePush(router, path);
}

export default function UserHeader() {
  const router = useRouter();

  return (
    <div className="bg-orange-300">
      <header className="w-[80%] mx-auto grid grid-cols-[1fr_6fr_2fr_1fr] gap-2 items-center">
        <div>Logo here</div>
        <div className="flex justify-center gap-4">
          {USER_HEADER_ITEMS.map((item) => {
            return (
              <div
                key={item.path}
                className="p-2 hover:bg-orange-500"
                onClick={() => goToUserPage(router, item.path)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="flex gap-4">
          {USSER_HEADER_ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.path}
                onClick={() => goToUserPage(router, action.path)}
              >
                <Icon />
              </div>
            );
          })}
        </div>
        <div>avatar here</div>
      </header>
    </div>
  );
}
