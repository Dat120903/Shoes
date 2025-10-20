// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Mỗi khi đổi route → cuộn ngay lập tức lên đầu trang (không animation)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
