import { useState } from "react";
import { X } from "lucide-react";

export default function LoginDrawer({ isOpen, onClose }) {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-[10000]"
        />
      )}

      {/* Panel chính */}
      <div
        className={`fixed top-0 right-0 h-full w-[420px] max-w-full bg-white shadow-lg z-[10001] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6">
          <h2 className="text-[17px] font-semibold uppercase ml-3">
            {isRegister ? "Tạo tài khoản" : "Đăng nhập"}
          </h2>
          <button
            onClick={() => {
                setIsRegister(false); 
                onClose();            
            }}
            className="text-gray-500 hover:text-black"
            >
            <X size={20} />
            </button>
        </div>

        <div className="flex justify-center">
          <div className="w-[80%] max-w-[360px] mt-10">
            {!isRegister ? (
              /* ---------------- FORM ĐĂNG NHẬP ---------------- */
              <>
                <form className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Tên đăng nhập, số điện thoại hoặc Email *"
                      className="w-full border border-gray-300 px-3 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Mật khẩu *"
                      className="w-full border border-gray-900 px-3 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-gray-600">
                      <input type="checkbox" className="accent-black" />
                      Ghi nhớ
                    </label>
                    <a href="#" className="underline hover:text-black">
                      Quên mật khẩu?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-5 font-semibold uppercase text-sm hover:bg-gray-800 transition"
                  >
                    Đăng nhập
                  </button>
                </form>

                <p className="text-center text-sm mt-6 text-gray-700">
                  Bạn chưa có tài khoản?{" "}
                  <button
                    onClick={() => setIsRegister(true)}
                    className="underline text-gray-950 hover:text-black"
                  >
                    Tạo tài khoản ngay
                  </button>
                </p>
              </>
            ) : (
              /* ---------------- FORM ĐĂNG KÝ ---------------- */
              <>
                <form className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Tên đăng nhập"
                      className="w-full border border-gray-300 px-3 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Địa chỉ Email *"
                      className="w-full border border-gray-300 px-3 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Mật khẩu *"
                      className="w-full border border-gray-900 px-3 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>

                  <p className="text-[14px] text-gray-600 leading-relaxed mt-2">
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our privacy policy.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 font-semibold uppercase text-sm hover:bg-gray-800 transition"
                  >
                    Đăng ký
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
