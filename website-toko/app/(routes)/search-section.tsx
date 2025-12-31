"use client";

import { useState } from "react";
import { Product } from "@/types";
import ProductList from "@/components/product-list";
import SearchBar from "@/components/search-bar";

interface Props {
  products: Product[];
}

const SearchSection: React.FC<Props> = ({ products }) => {
  const [query, setQuery] = useState("");

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <SearchBar onSearch={setQuery} />

      <div className="px-4 sm:px-6 lg:px-8">
        <ProductList title="Produk Unggulan" items={filtered} />
      </div>
    </div>
  );
};

export default SearchSection;
