
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


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
import ShopList from "./page/ShopList/ShopList";
import Collection from "./page/Collection/Collection";
import ContentCollection from "./page/Collection/ContentCollection";
import CollectionDetail from "./page/Collection/CollectionDetail";
import ScrollToTop from "./components/ScrollToTop";
import News from "./page/News/News.jsx";
import NewsDetail from "./page/News/NewsDetail";
import AboutUs from "./page/AboutUs/AboutUs";
import Contact from "./page/Contact/Contact";
import ShowRoom from './page/ShowRoom/ShowRoom';
import NotFound from "./page/NotFound/NotFound";
import ComingSoon from "./page/ComingSoon/ComingSoon";
import NewsletterPopup from "./components/NewsletterPopup";
import LoginDrawer from "./components/LoginDrawer";
import FAQ from "./page/FAQ/FAQ";
import Terms from "./page/Terms/Terms";
import ProductDetail from "./page/ProductDetail/ProductDetail";




const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();
  const hideFooter = ["/notfound", "/comingsoon"].includes(pathname);
  const showNewsletter = pathname === "/";

  return (
    <>
      <Navbar />
      <LoginDrawer />
      {children}
      {!hideFooter && <DealerSection />}
      {!hideFooter && <Footer />}
      {!hideFooter && <Footerlate />}
      {showNewsletter && <NewsletterPopup />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper>
        <Routes>
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
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
};

export default App;
