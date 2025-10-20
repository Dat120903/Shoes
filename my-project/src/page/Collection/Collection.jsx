import React from "react";
import ContentCollection from "./ContentCollection";
// ...ProductGrid, Pagination

export default function Collection() {
  return (
    <main className="pt-[100px]"> {/* để navbar fixed 100px không che */}
      <ContentCollection/>
    </main>
  );
}