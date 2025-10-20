import React from "react";
import mapImg from "../../assets/imgM.png"; // ảnh bản đồ full ngang

const Contact = () => {
  return (
    <section className="w-full mt-[100px]">
        <div className="w-full text-center py-10">
  <h1
    className="font-[700] text-[28px] sm:text-[32px] lg:text-[35px] uppercase tracking-[0%] leading-[100%]"
    style={{ lineHeight: "100%" }}  
  >
    Liên hệ
  </h1>
</div>
      {/* --- Ảnh bản đồ --- */}
      <div className="relative w-full overflow-hidden">
        <img
          src={mapImg}
          alt="Evashoes map"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* --- Phần nội dung chính --- */}
      <div className="max-w-[1410px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20">
        {/* --- 2 cột: Tên công ty & thông tin --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 sm:gap-8 gap-10 mb-16 md:items-start">
          {/* Bên trái: Tên công ty */}
          <div className="md:pl-[270px] text-center md:text-left flex items-start justify-center md:justify-start">
            <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold leading-[32px]">
              Công ty Cổ phần <br /> Thời trang Evashoes
            </h2>
          </div>

          {/* Bên phải: Thông tin chi tiết */}
          <div className="text-[15px] leading-[28px] text-[#222] space-y-2 sm:space-y-3 text-center md:text-left">
            <h1 className="text-[28px] sm:text-[34px] font-bold uppercase mb-2 md:hidden">
              Liên hệ
            </h1>
            <p>
              <span className="font-medium">Trụ sở chính:</span> Tầng 1, Số 26
              Nguyễn Phong Sắc, P. Dịch Vọng, Q. Cầu Giấy, Tp. Hà Nội
            </p>
            <p>
              <span className="font-medium">Điện thoại:</span> (024) 3793 2702
            </p>
            <p>
              <span className="font-medium">Hotline:</span> 1900 565 683
            </p>
            <p>
              <span className="font-medium">Email:</span> info@evashoes.com.vn
            </p>
            <p>
              <span className="font-medium">MST:</span> 0109912851
            </p>
          </div>
        </div>

        {/* --- Form liên hệ --- */}
        <div className="max-w-[800px] mx-auto w-full mt-10">
          <h3 className="text-[24px] font-semibold mb-5 uppercase text-left">
            Liên hệ với chúng tôi
          </h3>

          <form className="space-y-5">
            {/* Họ và tên */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black transition"
              />
            </div>

            {/* Số điện thoại & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại"
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Địa chỉ Email
                </label>
                <input
                  type="email"
                  placeholder="Nhập địa chỉ email"
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black transition"
                />
              </div>
            </div>

            {/* Nội dung */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Nội dung liên hệ hoặc cần tư vấn
              </label>
              <textarea
                rows="5"
                placeholder="Nhập nội dung..."
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none resize-none focus:border-black transition"
              ></textarea>
            </div>

            {/* Nút gửi */}
            <div className="text-left">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 uppercase text-[14px] font-medium hover:bg-gray-800 transition-all duration-200"
              >
                Gửi thông tin
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
