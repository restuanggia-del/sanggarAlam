"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types";
import Currency from "./ui/currency";
import { Button } from "./ui/button";
import { MessageCircleIcon } from "lucide-react";
import Link from "next/link";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const [productUrl, setProductUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setProductUrl(`${window.location.origin}/products/${data.id}`);
    }
  }, [data.id]);

  // 🔥 WhatsApp consultation link (auto message)
  const waLink = createWhatsAppLink({
    product: data.name,
    category: data.category?.name,
    url: productUrl,
  });

  return (
    <div>
      {/* nama produk */}
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      {/* harga */}
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>

      <hr className="my-4" />

      {/* cta */}
      <div className="mt-10 flex items-center gap-x-3">
        <Link href={waLink} target="_blank" rel="noopener noreferrer">
          <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-x-2">
            Konsultasi via WhatsApp
            <MessageCircleIcon size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
