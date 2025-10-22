import React, { useState } from "react";

// === ẢNH GALLERY 8 TẤM ===
import Img1 from "../../assets/imga1.png";
import Img2 from "../../assets/imga2.png";
import Img3 from "../../assets/imga3.png";
import Img4 from "../../assets/imga4.png";
import Img5 from "../../assets/imga5.png";
import Img6 from "../../assets/imga6.png";
import Img7 from "../../assets/imga7.png";
import Img8 from "../../assets/imga8.png";

// === ẢNH GỢI Ý 4 TẤM ===
import Rec1 from "../../assets/img1.png";
import Rec2 from "../../assets/img1.png";
import Rec3 from "../../assets/img1.png";
import Rec4 from "../../assets/img1.png";

export default function ProductDetail() {
  const [color, setColor] = useState("pink");
  const [size, setSize] = useState("36");
  const sizes = ["35", "36", "37", "38", "39"];


  const [wishlist, setWishlist] = useState(new Set());
  const toggleHeart = (id) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const recs = [
    { id: 1, img: Rec1, name: "Cropped Faux Leather Jacket", price: "$29" },
    { id: 2, img: Rec2, name: "Calvin Shorts", price: "$62" },
    { id: 3, img: Rec3, name: "Kirby T-Shirt", price: "$17" },
    { id: 4, img: Rec4, name: "Cableknit Shawl", price: "$99" },
  ];

  return (
    <section className="max-w-[1410px] mx-auto px-4 sm:px-6 lg:px-8 mt-[200px] mb-[80px]">
      {/* ====== KHỐI CHÍNH: TRÁI GALLERY – PHẢI THÔNG TIN ====== */}
      <div className="grid grid-cols-1 lg:grid-cols-[62%_38%] gap-6 lg:gap-8">
        {/* ===== GALLERY 8 ẢNH ===== */}
        <div className="grid grid-cols-2 gap-4">
          {/* 4 ảnh lớn trên (2×2) */}
          <img src={Img1} alt="" className="w-full h-full object-cover" />
          <img src={Img2} alt="" className="w-full h-full object-cover" />
          <img src={Img3} alt="" className="w-full h-full object-cover" />
          <img src={Img4} alt="" className="w-full h-full object-cover" />
          {/* 4 ảnh nhỏ dưới (1×4) */}
          <div className="col-span-2 grid grid-cols-4 gap-4">
            <img src={Img5} alt="" className="w-full h-full object-cover" />
            <img src={Img6} alt="" className="w-full h-full object-cover" />
            <img src={Img7} alt="" className="w-full h-full object-cover" />
            <img src={Img8} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* ===== CỘT PHẢI: THÔNG TIN ===== */}
        <div className="pt-1">
          {/* breadcrumb căn phải như hình */}
          <p className="text-[13px] text-[#000] font-bold uppercase mb-3 text-left">
            HOME / SẢN PHẨM / GIÀY DÉP
          </p>

          {/* tiêu đề + giá */}
          <h1 className="text-[24px] sm:text-[28px] leading-[1.25] text-[#111] mt-[45px]">
            Dép cao gót quai kim tuyến sang trọng
          </h1>
          <div className="flex items-center gap-4 mt-2 mb-4">
            <span className="text-[22px] sm:text-[24px] text-[#bdbdbd] line-through">
              750.000đ
            </span>
            <span className="text-[24px] sm:text-[26px] text-[#D6001C] font-semibold">
              650.000đ
            </span>
          </div>

          {/* mô tả ngắn */}
          <p className="text-[15px] leading-[1.8] text-[#000] mb-6">
            Phasellus sed volutpat orci. Fusce eget lorem mauris vehicula elementum gravida nec dui.
            Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra
            nunc, ut aliquet magna posuere eget.
          </p>

          {/* COLOR */}
          <div className="mb-4">
            <div className="uppercase text-[14px] font-semibold tracking-wide mb-2">COLOR</div>
            <div className="flex items-center gap-4">
              {[
                { id: "black", bg: "bg-black" },
                { id: "pink", bg: "bg-[#e25a5d]" },
                { id: "gray", bg: "bg-[#ececec]" },
                { id: "pattern", bg: "bg-[radial-gradient(circle,#000_15%,transparent_16%)] bg-[length:8px_8px] bg-white" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  className={`w-[22px] h-[22px] rounded-full border border-[#111] flex items-center justify-center`}
                  aria-label={c.id}
                >
                  <span
                    className={`block w-[14px] h-[14px] rounded-full ${c.bg}`}
                    style={{
                      boxShadow: color === c.id ? "0 0 0 3px #fff, 0 0 0 4px #111" : "none",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* SIZES + link hướng dẫn ở bên phải có gạch dưới */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div className="uppercase text-[14px] font-semibold tracking-wide">SIZES</div>
              <a
                href="#"
                className="text-[13px] font-medium text-[#111] relative after:content-[''] after:block after:h-[2px] after:w-[120px] after:bg-[#111] after:mt-[6px]"
              >
                HƯỚNG DẪN CHỌN SIZE
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-2"> 
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-[40px] min-w-[46px] px-3 border ${
                    size === s
                      ? "bg-[#111] text-white"
                      : "bg-transparent text-[#111] border-[#d9d9d9] hover:bg-[#f5f5f5]"
                  } text-[14px] font-medium`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* 2 NÚT */}
          <div className="flex flex-col gap-3 mb-8">
            <button className="h-[44px] bg-[#1f1f1f] text-white uppercase text-[14px] font-semibold hover:bg-[#101010] transition-colors">
              MUA NGAY
            </button>
            <button className="h-[44px] border border-[#111] text-[#111] bg-white uppercase text-[14px] font-semibold hover:bg-[#f7f7f7] transition-colors mt-6">
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>

          {/* FAVORITE + SHARE (gạch dưới ngắn như ảnh) */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-[14px] font-medium uppercase text-[#111] relative after:content-[''] after:block after:h-[3px] after:w-[180px] after:bg-[#111] after:mt-[8px]">
              {/* icon tim outline đơn giản */}
              <span className="inline-block align-middle mr-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8">
                  <path d="M20.8 4.6a5.3 5.3 0 0 0-7.5 0L12 5.9l-1.3-1.3a5.3 5.3 0 0 0-7.5 7.5l8.8 8.8 8.8-8.8a5.3 5.3 0 0 0 0-7.5z" />
                </svg>
              </span>
              THÊM VÀO MỤC YÊU THÍCH
            </div>

            <div className="text-[14px] font-medium uppercase text-[#111] flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <path d="M8.6 10.9l6.8-3.8M8.6 13.1l6.8 3.8" />
              </svg>
              SHARE
            </div>
          </div>

          {/* SKU / CATEGORIES / TAGS */}
          <div className="text-[14px] text-[#222] space-y-[6px] mb-8">
            <p><span className="font-semibold">SKU:</span> N/A</p>
            <p>
              <span className="font-semibold">CATEGORIES:</span> Casual & Urban Wear, Jackets, Men
            </p>
            <p><span className="font-semibold">TAGS:</span> biker, black, bomber, leather</p>
          </div>

          {/* TAB MÔ TẢ – gạch đậm dưới “MÔ TẢ SẢN PHẨM” */}
          <div className="mb-6">
            <div className="flex items-center gap-10 text-[16px] font-semibold mb-10">
              <span className="text-[#111] relative after:content-[''] after:block after:h-[4px] after:w-[150px] after:bg-[#111] after:mt-[6px]">
                MÔ TẢ SẢN PHẨM
              </span>
              <span className="text-[#8b8b8b]">THÔNG TIN CHI TIẾT</span>
            </div>
            <p className="text-[15px] leading-[1.8] text-[#000]">
              Take your look to new heights with this irresistible pair of wedges. Made in sleek
              black that slots in easily with any wardrobe, these sandals also feature an adjustable
              ankle strap that ensures a comfortable fit. Worthy of mention is the 7.5cm platform
              elevation that will instantly add style and stature the second you slip into them. We
              suggest pairing them with a chiffon blouse and a pleated floral skirt for a sweet
              weekend look. Complete your ensemble with a rattan tote bag.
            </p>
          </div>

          {/* ĐƯỜNG KẺ NHẸ */}
          <div className="h-[2px] bg-[#e6e6e6] my-13" />

          {/* CHÍNH SÁCH – SVG giống phong cách ảnh */}
          <div className="space-y-6">
            {/* Giao hàng */}
            <div className="flex items-start gap-4">
              {/* xe kéo tay */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8">
                <path d="M3 5h2l2 12h11" />
                <circle cx="9" cy="19" r="1.8" />
                <circle cx="18" cy="19" r="1.8" />
                <rect x="7" y="7" width="13" height="7" rx="1" />
              </svg>
              <div>
                <p className="uppercase font-semibold text-[#111]">
                  MIỄN PHÍ GIAO HÀNG TOÀN QUỐC
                </p>
                <p className="text-[14px] text-[#6b6b6b]">
                  Miễn phí giao nhận với đơn hàng từ 300.000 VND
                </p>
              </div>
            </div>

            {/* Hỗ trợ 24/7 */}
            <div className="flex items-start gap-4">
              {/* tai nghe */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8">
                <path d="M4 13v3a3 3 0 0 0 3 3h1v-6H7a3 3 0 0 0-3 3zM20 13v3a3 3 0 0 1-3 3h-1v-6h1a3 3 0 0 1 3 3z" />
                <path d="M6 13V9a6 6 0 0 1 12 0v4" />
              </svg>
              <div>
                <p className="uppercase font-semibold text-[#111]">HỖ TRỢ VÀ TƯ VẤN 24/7</p>
                <p className="text-[14px] text-[#6b6b6b]">
                  Đội ngũ tư vấn viên thân thiện sẵn sàng tư vấn và giúp đỡ khách hàng 24/7
                </p>
              </div>
            </div>

            {/* Cam kết chất lượng */}
            <div className="flex items-start gap-4">
              {/* khiên tick */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8">
                <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <div>
                <p className="uppercase font-semibold text-[#111]">
                  CAM KẾT VỀ CHẤT LƯỢNG SẢN PHẨM
                </p>
                <p className="text-[14px] text-[#6b6b6b]">
                  Luôn cam kết về chất lượng sản phẩm thời hạn bảo hành lên đến 12 tháng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== GỢI Ý BÊN DƯỚI ===== */}
     <div className="mt-30">
        <h2 className="text-[22px] sm:text-[24px] font-semibold mb-12">
          CÓ THỂ <span className="font-extrabold">NÀNG SẼ THÍCH</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {recs.map((item) => (
            <div key={item.id}>
              <div className="bg-[#f3f3f3] aspect-[4/5] overflow-hidden">
                <img src={item.img} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Dresses + trái tim cùng hàng */}
              <div className="flex items-center justify-between mt-3">
                <p className="text-[#8d8d8d] text-[13px]">Dresses</p>
                <button
                  onClick={() => toggleHeart(item.id)}
                  className="p-1 -mr-1 group"
                  aria-label="Add to wishlist"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    className={`transition-colors ${
                      wishlist.has(item.id)
                        ? "fill-[#D6001C] stroke-[#D6001C]"
                        : "fill-none stroke-[#6b6b6b] group-hover:stroke-[#D6001C]"
                    }`}
                  >
                    <path d="M20.8 4.6a5.3 5.3 0 0 0-7.5 0L12 5.9l-1.3-1.3a5.3 5.3 0 0 0-7.5 7.5l8.8 8.8 8.8-8.8a5.3 5.3 0 0 0 0-7.5z" />
                  </svg>
                </button>
              </div>

              <p className="text-[15px] font-medium text-[#111] leading-tight">
                {item.name}
              </p>
              <p className="text-[15px] font-semibold text-[#111] mb-22">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
