"use client";

import { useState } from "react";
import { Product } from "@/types";
import ProductList from "@/components/product-list";
import SearchBar from "@/components/search-bar";
import ScrollReveal from "@/components/scroll-reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  products: Product[];
}

const SearchSection: React.FC<Props> = ({ products }) => {
  const [query, setQuery] = useState("");

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  const displayed = filtered.slice(0, 4);
  const hasMore = filtered.length > 4;

  return (
    <ScrollReveal>
      <div className="space-y-12">
        <SearchBar onSearch={setQuery} />

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-medium mb-3">
              Pilihan Terbaik
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Produk Unggulan
            </h2>
          </div>

          <ProductList title="Produk Unggulan" items={displayed} />

          {hasMore && (
            <div className="flex justify-end mt-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-x-2 rounded-full border border-green-600 text-green-600 px-5 py-2 text-sm font-medium hover:bg-green-600 hover:text-white transition"
              >
                Lihat Selengkapnya
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default SearchSection;
