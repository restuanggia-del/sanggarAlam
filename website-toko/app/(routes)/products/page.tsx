// app/(routes)/products/page.tsx
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import ScrollReveal from "@/components/scroll-reveal";
import ProductsClient from "./products-client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 0;

const ProductsPage = async () => {
  const products = await getProducts({});

  return (
    <Container>
      <ScrollReveal>
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-x-2 rounded-full border bg-green-100 px-4 py-2 text-sm text-neutral-600 hover:bg-green-200 hover:text-black transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Link>
          </div>

          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-medium mb-3">
              Katalog Kami
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Semua Produk
            </h1>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Temukan semua koleksi produk dan jasa terbaik dari Sanggar Alam.
            </p>
          </div>

          <ProductsClient products={products} />
        </div>
      </ScrollReveal>
    </Container>
  );
};

export default ProductsPage;
