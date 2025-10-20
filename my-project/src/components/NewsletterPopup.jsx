import React, { useState, useEffect } from "react";
import imgPoPup from "../assets/imgpopup.png";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[99999] isolate">
      {/* Popup chính */}
      <div className="relative flex flex-col md:flex-row bg-white rounded-md overflow-hidden shadow-xl w-[880px] h-[480px] max-w-[95vw] mt-[100px] md:mt-[80px]">
        {/* Nút đóng */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-[22px] text-gray-700 hover:text-black z-[50]"
        >
          ✕
        </button>

        {/* Ảnh bên trái */}
        <div className="w-full md:w-1/2 h-[260px] md:h-full overflow-hidden">
          <img
            src={imgPoPup}
            alt="Newsletter"
            className="w-full h-full object-cover md:object-center object-[center_30%] block"
          />
        </div>

        {/* Nội dung bên phải */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-10 lg:px-12 bg-white">
          <h2 className="text-[24px] font-semibold mb-4 leading-snug text-[#111]">
            Sign Up to Our Newsletter
          </h2>

          <p className="text-gray-600 mb-8 text-[15px] leading-relaxed">
            Be the first to get the latest news about trends, promotions, and much more!
          </p>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border border-[#e5e5e5] w-[50%] min-w-[220px]"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 text-[14px] outline-none placeholder:text-gray-400"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 text-[14px] font-semibold bg-black text-white hover:bg-gray-900 transition-colors"
            >
              JOIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
