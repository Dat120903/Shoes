import React from "react";
import { X } from "lucide-react";

const SearchOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Đóng */}
        <div className="flex justify-end">
          <button onClick={onClose}>
            <X size={28} className="text-gray-600 hover:text-black" />
          </button>
        </div>

        {/* Nội dung */}
        <div className="mt-4">
          <p className="text-[13px] uppercase text-gray-500 mb-2">
            Bạn đang quan tâm tới sản phẩm hay dịch vụ của EVASHOES?
          </p>
          <div className="flex items-center border-b border-gray-400 pb-2">
            <input
              type="text"
              placeholder="TÌM KIẾM NGAY"
              className="w-full outline-none text-[16px] uppercase placeholder-gray-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </div>

          <div className="mt-6">
            <p className="uppercase text-[13px] text-gray-500 mb-3">Gợi ý nhanh</p>
            <ul className="space-y-2 text-[15px]">
              <li>Bộ sưu tập mới</li>
              <li>Hàng mới về</li>
              <li>Sản phẩm đang sale</li>
              <li>Sự kiện sắp diễn ra</li>
              <li>Chương trình tích điểm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
