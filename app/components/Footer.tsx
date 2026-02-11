import { FOOTER_SECTIONS } from "../constants/layout.constants";
import { STORE_LOCATION } from "../constants/location-store.constant";

export default function Footer() {
  return (
    <footer className="mt-12 bg-gradient-to-r from-orange-500 via-red-400 to-orange-600 text-white">
      <div className="w-[85%] mx-auto py-12 grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-2 flex flex-col items-center md:items-start gap-4 transition-transform duration-500 hover:scale-[1.02]">
          <div className="flex items-center gap-4">
            <img
              src="/images/Aurelion_Shop_Logo.png"
              alt="Logo"
              className="w-20 h-20 object-contain rounded-full ring-2 ring-white/60 shadow-md hover:shadow-lg hover:ring-white transition-all duration-500"
            />
            <p className="text-lg font-bold text-white/90 leading-relaxed text-center md:text-left hover:text-white transition-colors duration-300">
              Aurelion Shop – hương vị tuyệt hảo
            </p>
          </div>

          <div className="text-sm text-white/90 mt-2 text-center md:text-left space-y-1 leading-relaxed">
            <p>{STORE_LOCATION.detail}</p>
            <p>
              {STORE_LOCATION.street}, {STORE_LOCATION.ward},
              {STORE_LOCATION.district}, {STORE_LOCATION.province}
            </p>
          </div>
        </div>

        {FOOTER_SECTIONS.map((section) => {
          return (
            <div
              key={section.title}
              className="space-y-3 text-center md:text-left transform transition-all duration-500 hover:-translate-y-1"
            >
              <h2 className="text-lg font-bold uppercase tracking-wide border-b border-white/30 pb-1 inline-block hover:text-yellow-200 transition-colors duration-300">
                {section.title}
              </h2>
              <ul className="space-y-1 text-sm text-white/90">
                {section.items.map((item) => {
                  return (
                    <li
                      key={item.title}
                      className="cursor-default hover:text-yellow-100 hover:translate-x-1 transition-all duration-300"
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="border-t border-white/30"></div>

      <div className="text-center text-sm py-4 bg-orange-700/20 backdrop-blur-sm hover:bg-orange-700/30 transition-colors duration-500">
        © 2025 <span className="font-semibold">Aurelion Shop</span>. All Rights
        Reserved.
        <span className="text-white/80"> Site by Nguyen Phat Dat</span>
      </div>
    </footer>
  );
}
