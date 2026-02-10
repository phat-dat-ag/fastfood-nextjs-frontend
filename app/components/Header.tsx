"use client";

import { navigatePush } from "@/app/utils/navigation";
import { useRouter } from "next/navigation";
import { HeaderItemType } from "../types/layout.types";

interface HeaderProps {
  headerItems: Array<HeaderItemType>;
  children: React.ReactNode;
}

export default function Header({ headerItems, children }: HeaderProps) {
  const router = useRouter();

  return (
    <div className="bg-orange-300">
      <header className="w-[80%] mx-auto grid grid-cols-[1fr_6fr_3fr] gap-2 items-center">
        <div>Logo here</div>
        <div className="flex justify-center gap-4">
          {headerItems.map((item) => {
            return (
              <div
                key={item.path}
                className="p-2 hover:bg-orange-500"
                onClick={() => navigatePush(router, item.path)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div>{children}</div>
      </header>
    </div>
  );
}
