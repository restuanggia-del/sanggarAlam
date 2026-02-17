"use client";

import { Product } from "@/types";
import Image from "next/image";
import { Expand } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="group cursor-pointer rounded-2xl border bg-white p-3 transition hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={data?.images?.[0]?.url}
          alt={data.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition">
          <div className="rounded-full bg-white p-3">
            <Expand className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <p className="font-semibold text-lg line-clamp-1">{data.name}</p>
        <p className="text-sm text-neutral-500">{data.category?.name}</p>
      </div>

      <div className="mt-3">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
