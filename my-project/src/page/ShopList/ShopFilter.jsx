import React from "react";
import { ChevronDown } from "lucide-react";

const FILTERS = [
  "THỨ TỰ MẶC ĐỊNH",
  "DANH MỤC",
  "KÍCH THƯỚC",
  "MÀU SẮC",
  "CHẤT LIỆU",
  "GIÁ",
];

const UnderlineBtn = ({ children }) => (
  <button className="relative group whitespace-nowrap font-semibold">
    <span>{children}</span>
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-200 group-hover:w-full" />
  </button>
);

export default function ShopFilter() {
  return (
    <section className="w-full bg-white border-b border-gray-200 mt-6">
      <div className="max-w-[1410px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between h-[48px]">
          {/* Các bộ lọc bên trái */}
          <div className="flex items-center gap-10 lg:gap-16 xl:gap-13 text-[14px] text-black">
            {FILTERS.map((label, i) => (
              <div key={label} className="flex items-center gap-5">
                <UnderlineBtn>
                  <span className="mr-1">{label}</span>
                  <ChevronDown size={14} className="inline-block" />
                </UnderlineBtn>
                {i < FILTERS.length - 1 && (
                  <span className="w-px h-4 bg-gray-300" />
                )}
              </div>
            ))}
          </div>

          {/* VIEW bên phải */}
          <div className="flex items-center gap-4 text-[14px] font-semibold">
            <span>VIEW</span>
            {[2, 3, 4].map((n) => (
              <UnderlineBtn key={n}>{n}</UnderlineBtn>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden py-2">
          <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center gap-6 pr-4 text-[13px]">
              {FILTERS.map((label) => (
                <UnderlineBtn key={label}>
                  <span className="mr-1">{label}</span>
                  <ChevronDown size={14} className="inline-block" />
                </UnderlineBtn>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-2 text-[13px] font-semibold">
            <span>VIEW</span>
            {[2, 3, 4].map((n) => (
              <UnderlineBtn key={n}>{n}</UnderlineBtn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
