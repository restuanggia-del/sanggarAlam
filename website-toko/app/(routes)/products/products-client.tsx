// app/(routes)/products/products-client.tsx
"use client";

import { useState } from "react";
import { Product } from "@/types";
import ProductList from "@/components/product-list";
import SearchBar from "@/components/search-bar";

interface Props {
  products: Product[];
}

const ProductsClient: React.FC<Props> = ({ products }) => {
  const [query, setQuery] = useState("");

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-8">
      <SearchBar onSearch={setQuery} />
      <ProductList title="Semua Produk" items={filtered} />
    </div>
  );
};

export default ProductsClient;
