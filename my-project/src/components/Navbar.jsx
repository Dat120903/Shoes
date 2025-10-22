import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/LoGo.png";
import { Search, User, Heart, ShoppingBag, Menu, X, ArrowLeft } from "lucide-react";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTiktokFill,
  RiYoutubeFill,
} from "react-icons/ri";
import LoginDrawer from "./LoginDrawer";

const navLinks = [
  { label: "HÀNG MỚI", href: "/comingsoon" },
  { label: "SẢN PHẨM", href: "/shoplist" },
  { label: "COLLECTION", href: "/collection" },
  { label: "SALE", href: "/comingsoon", red: true },
  { label: "HỆ THỐNG SHOWROOM", href: "/showroom" },
];

const mobileMenuLinks = [
  { label: "SẢN PHẨM", href: "/shoplist" },
  { label: "COLLECTION", href: "/collection" },
  { label: "SALE", href: "/comingsoon", red: true },
  { label: "GIỚI THIỆU", href: "/about" },
  { label: "HỆ THỐNG ĐẠI LÝ", href: "/showroom" },
  { label: "HỖ TRỢ", href: "/comingsoon" },
  { label: "TIN TỨC", href: "/news" },
  { label: "LIÊN HỆ", href: "/contact" },
  { label: "#EVASHOES", href: "/comingsoon" },
];

const submenuData = {
  "SẢN PHẨM": {
    sections: [
      { title: "DÒNG SẢN PHẨM", items: ["Giày cao gót", "Giày thể thao", "Giày búp bê", "Sandal", "Dép"] },
      { title: "BỘ SƯU TẬP", items: ["Xuân Hè", "Thu Đông", "Limited Edition"] },
    ],
  },
  COLLECTION: {
    sections: [
      { title: "BST NỔI BẬT", items: ["New Season", "Pastel Palette", "Evashoes Signature"] },
    ],
  },
  SALE: {
    sections: [
      { title: "KHUYẾN MÃI HOT", items: ["Giảm 50%", "Mua 1 tặng 1", "Flash Sale cuối tuần"] },
      { title: "ƯU ĐÃI KHÁC", items: ["Voucher sinh nhật", "Thành viên VIP", "Tặng quà đặc biệt"] },
    ],
  },
  "GIỚI THIỆU": {
    sections: [
      { title: "TỔNG QUAN", items: ["Giới thiệu chung", "Lịch sử hình thành", "Tầm nhìn - Sứ mệnh"] },
      { title: "VĂN HÓA DOANH NGHIỆP", items: ["Giá trị cốt lõi", "Danh hiệu & Giải thưởng"] },
    ],
  },
  "HỆ THỐNG ĐẠI LÝ": {
    sections: [
      { title: "SHOWROOM", items: ["Hà Nội", "TP.HCM", "Đà Nẵng", "Cần Thơ"] },
      { title: "ĐẠI LÝ", items: ["Miền Bắc", "Miền Trung", "Miền Nam"] },
    ],
  },
  "HỖ TRỢ": {
    sections: [
      { title: "DỊCH VỤ KHÁCH HÀNG", items: ["Chính sách đổi trả", "Bảo hành sản phẩm", "Hướng dẫn mua hàng"] },
      { title: "CHÍNH SÁCH KHÁC", items: ["Bảo mật thông tin", "Chính sách khách hàng thân thiết"] },
    ],
  },
  "TIN TỨC": {
    sections: [
      { title: "BẢN TIN MỚI", items: ["Xu hướng thời trang", "Sự kiện Evashoes", "Bí quyết chăm sóc giày"] },
    ],
  },
  "LIÊN HỆ": {
    sections: [
      {
        title: "THÔNG TIN LIÊN HỆ",
        items: ["Hotline: 1900 636 025", "Email: cskh@evashoes.vn", "Fanpage: Evashoes Official"],
      },
    ],
  },
  "#EVASHOES": {
    sections: [{ title: "CỘNG ĐỒNG EVASHOES", items: ["Lookbook", "Mix & Match", "Feedback khách hàng"] }],
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
  }, [menuOpen, searchOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-[9999] bg-white border-b border-gray-200 shadow-sm h-[100px] flex items-center">
        <div className="max-w-[1410px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
      
          <Link to="/" className="shrink-0">
            <img src={LogoImage} alt="EVASHOES" className="w-[150px] sm:w-[180px] h-auto object-contain" />
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative group py-2 font-semibold ${
                  link.red ? "text-red-600" : "text-black hover:text-[#206973]"
                }`}
              >
                {link.label}
                <span className="pointer-events-none absolute left-0 -bottom-3 h-[6px] rounded-sm bg-[#f4c400] w-0 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* ICONS */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false); }}>
              {searchOpen ? <X className="w-5 h-5 text-[#D6001C]" /> : <Search className="w-5 h-5 hover:text-[#D6001C]" />}
            </button>
           <button
              onClick={() => {
                setLoginOpen(true);     
                setSearchOpen(false);   
              }}
            >
              <User className="w-5 h-5 hover:text-[#D6001C]" />
            </button>

            <Heart className="w-5 h-5 hover:text-[#D6001C]" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5 hover:text-[#D6001C]" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] rounded-full px-1">3</span>
            </div>
            <button onClick={() => { setMenuOpen(true); setSearchOpen(false); }}>
              <Menu className="w-6 h-6 hover:text-[#D6001C]" />
            </button>
          </div>
        </div>
      </header>

      {/* SEARCH OVERLAY */}
      {searchOpen && (
        <div className="fixed top-[100px] left-0 right-0 z-[9998] bg-white border-b border-gray-300 transition-all duration-300 h-auto max-h-[461px] overflow-hidden">
          <div className="max-w-[1410px] mx-auto px-6 py-10">
            <p className="uppercase text-[13px] text-gray-500 mb-4">
              Bạn đang quan tâm tới sản phẩm hay dịch vụ của Evashoes?
            </p>
            <div className="flex items-center border-b border-gray-300 pb-2">
              <input type="text" placeholder="Tìm kiếm ngay" className="flex-1 text-[15px] outline-none" />
              <Search className="w-5 h-5 text-gray-500" />
            </div>

            <div className="mt-6">
              <p className="uppercase text-[13px] text-gray-500 mb-2">Gợi ý nhanh</p>
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
      )}

      {/* MENU OVERLAY */}
      {menuOpen && (
  <div
    className="fixed inset-0 z-[10000] bg-black/40 flex justify-end"
    onClick={() => setMenuOpen(false)} 
  >
    <aside
      className={`absolute right-0 top-0 bg-white shadow-xl h-screen transition-transform duration-300 ${
        isDesktop ? "w-[585px]" : "w-full"
      }`}
      onClick={(e) => e.stopPropagation()} 
    >
      {/* Nút đóng */}
      <button
        aria-label="Đóng"
        onClick={() => { setMenuOpen(false); setActiveMenu(null); }}
        className="absolute top-4 right-5 z-[10002] hover:opacity-80"
      >
        <X className="w-6 h-6" />
      </button>

            {/* Desktop: 2 panel */}
            {isDesktop ? (
              <div className="flex h-full" onMouseLeave={() => setActiveMenu(null)}>
               
                <div className="w-[276px] bg-white h-full px-8 pt-14 pb-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    {mobileMenuLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setMenuOpen(false)}
                        onMouseEnter={() => setActiveMenu(link.label)}
                        className={`block font-semibold text-[16px] ${
                          link.red ? "text-red-600" : "text-black hover:text-[#206973]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="flex gap-6 text-xl text-gray-700 mt-10">
                    <RiFacebookFill />
                    <RiInstagramLine />
                    <RiTiktokFill />
                    <RiYoutubeFill />
                  </div>
                </div>
          
                <div
                  className={`flex-1 bg-[#f4c400] text-black transition-all duration-300 ${
                    activeMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
                  }`}
                >
                  <div className="h-full overflow-y-auto px-8 pt-14 pb-10">
                    {activeMenu && submenuData[activeMenu] ? (
                      submenuData[activeMenu].sections.map((section, i) => (
                        <div key={i} className="mb-8">
                          <h3 className="text-[12px] uppercase text-[#5a4600] mb-2 font-medium">
                            {section.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.items.map((item, idx) => (
                              <li key={idx} className="font-semibold text-[15px] hover:underline cursor-pointer">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-[#5a4600]">Di chuột vào mục bên trái để xem chi tiết…</div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              // Mobile menu
              <div className="h-full bg-white">
                {activeMenu && submenuData[activeMenu] ? (
                  <div className="h-full bg-[#f4c400] text-black overflow-y-auto px-6 pt-14 pb-10">
                    <button
                      onClick={() => setActiveMenu(null)}
                      className="flex items-center gap-2 mb-6 text-sm uppercase text-[#5a4600]"
                    >
                      <ArrowLeft className="w-4 h-4" /> Quay lại
                    </button>
                    {submenuData[activeMenu].sections.map((section, i) => (
                      <div key={i} className="mb-8">
                        <h3 className="text-[12px] uppercase text-[#5a4600] mb-2 font-medium">
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="font-semibold text-[15px] hover:underline cursor-pointer">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full px-8 pt-14 pb-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      {mobileMenuLinks.map((link) => (
                        <Link
                          key={link.label}
                          to={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={`block font-semibold text-[16px] ${
                            link.red ? "text-red-600" : "text-black hover:text-[#206973]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <div className="flex gap-6 text-xl text-gray-700 mt-10">
                      <RiFacebookFill />
                      <RiInstagramLine />
                      <RiTiktokFill />
                      <RiYoutubeFill />
                    </div>
                  </div>
                )}
              </div>
            )}
          </aside>
        </div>
      )}
      <LoginDrawer
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onCloseSearch={() => setSearchOpen(false)} 
      />
    </>
  );
}

