"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types";
import Currency from "./ui/currency";
import { Button } from "./ui/button";
import { MessageCircleIcon, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { useRouter } from "next/navigation";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const [productUrl, setProductUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setProductUrl(`${window.location.origin}/product/${data.id}`);
    }
  }, [data.id]);

  const waLink = createWhatsAppLink({
    product: data.name,
    category: data.category?.name,
    url: productUrl,
  });

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="inline-flex items-center mb-6 gap-x-2 rounded-full border border-green-600 text-green-600 px-5 py-2 text-sm font-medium hover:bg-green-600 hover:text-white transition cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali
      </button>

      {data.category?.name && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-x-1 rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-medium">
            <Tag className="w-3 h-3" />
            {data.category.name}
          </span>
        </div>
      )}

      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>

      <hr className="my-4" />

      <div className="mt-10 flex items-center gap-x-3">
        <Link href={waLink} target="_blank" rel="noopener noreferrer">
          <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-x-2 cursor-pointer">
            Pesan via WhatsApp
            <MessageCircleIcon size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
