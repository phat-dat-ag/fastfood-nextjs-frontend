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
    <div className="p-2 bg-gradient-to-r from-orange-500 via-red-400 to-orange-600 shadow-lg shadow-orange-300/40">
      <header className="w-[80%] mx-auto grid grid-cols-[1fr_6fr_3fr] gap-2 items-center">
        <div>
          <img
            src="/images/Aurelion_Shop_Logo.png"
            alt="Logo"
            className="w-12 h-12 object-contain rounded-full ring-2 ring-white/60 shadow-md hover:shadow-lg hover:ring-white transition-all duration-500"
          />
        </div>
        <div className="flex justify-center gap-10 font-semibold">
          {headerItems.map((item) => {
            return (
              <div
                key={item.path}
                className="cursor-pointer px-2 py-1.5 rounded-lg text-white/90 hover:text-white hover:bg-white/20"
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
