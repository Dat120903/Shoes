import React, { useState } from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img1.png";

const products = [
  { id: 1, image: img1, category: "Dresses", name: "Cropped Faux Leather Jacket", price: "$29" },
  { id: 2, image: img1, category: "Dresses", name: "Calvin Shorts", price: "$62", discount: "-67%" },
  { id: 3, image: img1, category: "Sandal", name: "Cableknit Shawl", price: "$99", oldPrice: "$129", tag: "NEW" },
  { id: 4, image: img1, category: "Dresses", name: "Colorful Jacket", price: "$29" },
  { id: 5, image: img1, category: "Dresses", name: "Shirt in Botanical Cheetah Print", price: "$62" },
  { id: 6, image: img1, category: "Dresses", name: "Cotton Jersey T-Shirt", price: "$17" },
  { id: 7, image: img1, category: "Dresses", name: "Zeasi Dresses", price: "$99", oldPrice: "$139" },
  { id: 8, image: img1, category: "Dresses", name: "Colorful Jacket", price: "$29" },
  { id: 9, image: img1, category: "Dresses", name: "Shirt in Botanical Cheetah Print", price: "$62" },
  { id: 10, image: img1, category: "Dresses", name: "Cotton Jersey T-Shirt", price: "$17" },
  { id: 11, image: img1, category: "Dresses", name: "Colorful Jacket", price: "$29" },
  { id: 12, image: img1, category: "Dresses", name: "Zeasi Dresses", price: "$99", oldPrice: "$139" },
];

export default function Content() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  const toggleWishlist = (id, e) => {
    e.stopPropagation(); // Ngăn click trái tim chuyển trang
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="max-w-[1410px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => handleProductClick(item.id)}
          >
            {/* Ảnh sản phẩm */}
            <div className="relative w-full aspect-[330/400] overflow-hidden rounded-sm bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Tag SALE / NEW */}
              {item.discount && (
                <span className="absolute top-3 right-3 bg-red-600 text-white text-[12px] font-semibold px-2 py-[2px] rounded">
                  {item.discount}
                </span>
              )}
              {item.tag && (
                <span className="absolute top-3 left-3 bg-white text-black text-[12px] font-semibold px-2 py-[2px] rounded shadow">
                  {item.tag}
                </span>
              )}
            </div>

            {/* Dòng category + trái tim ngang hàng */}
            <div className="flex items-center justify-between mt-3">
              <p className="text-[13px] text-gray-500">{item.category}</p>
              <button
                aria-label="Thêm vào yêu thích"
                onClick={(e) => toggleWishlist(item.id, e)}
              >
                <Heart
                  className={`w-5 h-5 transition-colors duration-300 ${
                    wishlist.includes(item.id)
                      ? "text-[#D6001C] fill-[#D6001C]"
                      : "text-gray-600 hover:text-[#D6001C]"
                  }`}
                />
              </button>
            </div>

            {/* Tên sản phẩm */}
            <p className="text-[15px] font-semibold text-black mt-1 leading-tight">
              {item.name}
            </p>

            {/* Giá */}
            <div className="flex items-center gap-2 mt-1">
              {item.oldPrice && (
                <span className="text-gray-400 line-through text-[14px]">
                  {item.oldPrice}
                </span>
              )}
              <span
                className={`text-[15px] font-semibold ${
                  item.oldPrice ? "text-red-600" : "text-black"
                }`}
              >
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
