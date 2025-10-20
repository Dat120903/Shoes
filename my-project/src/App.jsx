import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component layout
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Paner from "./components/Paner";
import TrendProduct from "./components/TrendProduct";
import DealWeeks from "./components/DealWeeks";
import Banner from "./components/Banner";
import Limited from "./components/Limited";
import Instagram from "./components/Instagram";
import ServiceSection from "./components/ServiceSection";
import DealerSection from "./components/DealerSection";
import Footer from "./components/Footer";
import Footerlate from "./components/Footerlate";

// Pages
import ShopList from "./page/ShopList/ShopList";
import Collection from "./page/Collection/Collection";
import ContentCollection from "./page/Collection/ContentCollection";
import CollectionDetail from "./page/Collection/CollectionDetail";

// ScrollToTop Component
import ScrollToTop from "./components/ScrollToTop";
import News from "./page/News/News.jsx";
import NewsDetail from "./page/News/NewsDetail";
import AboutUs from "./page/AboutUs/AboutUs";
import Contact from "./page/Contact/Contact";
import ShowRoom from './page/ShowRoom/ShowRoom'
import NotFound from "./page/NotFound/NotFound"
import ComingSoon from "./page/ComingSoon/ComingSoon"
import NewsletterPopup from "./components/NewsletterPopup";

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* Trang chủ */}
        <Route
          path="/"
          element={
            <main className="pt-[100px]">
              <Slider />
              <Paner />
              <TrendProduct />
              <DealWeeks />
              <Banner />
              <Limited />
              <Instagram />
              <ServiceSection />
            </main>
          }
        />

        {/* Các trang phụ */}
        <Route path="/shoplist" element={<ShopList />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contentcollection" element={<ContentCollection />} />
        <Route path="/collectiondetail" element={<CollectionDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/showroom" element={<ShowRoom />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/comingsoon" element={<ComingSoon />} />

      </Routes>

      {/* Footer luôn hiển thị */}
      <DealerSection />
      <Footer />
      <Footerlate />

      <NewsletterPopup /> 
    </Router>
  );
};

export default App;
