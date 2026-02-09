import { USER_HEADER_ITEMS } from "@/app/constants/layout.constants";

export default function UserHeader() {
  return (
    <div className="bg-orange-300">
      <header className="w-[80%] mx-auto grid grid-cols-[1fr_6fr_2fr_1fr] gap-2 items-center">
        <div>Logo here</div>
        <div className="flex justify-center gap-4">
          {USER_HEADER_ITEMS.map((item) => {
            return (
              <div key={item.path} className="p-2 hover:bg-orange-500">
                {item.title}
              </div>
            );
          })}
        </div>
        <div>icon here</div>
        <div>avatar here</div>
      </header>
    </div>
  );
}
