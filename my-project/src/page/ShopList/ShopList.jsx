import React from "react";
import PageCover from "./PageCover";
import ShopFilter from "./ShopFilter";
import Content from "./Content";
// ...ProductGrid, Pagination

export default function ShopList() {
  return (
    <main className="pt-[100px]"> 
      <PageCover />
      <ShopFilter />
      <div className="mb-[120px] sm:mb-[180px] lg:mb-[270px]">
        <Content />
      </div>
      {/* ProductGrid, Pagination... */}
    </main>
  );
}
