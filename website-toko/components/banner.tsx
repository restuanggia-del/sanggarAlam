"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Banner as BannerType } from "@/types";
import ScrollReveal from "./scroll-reveal";

interface BannerProps {
  data: BannerType;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isCategory = pathname.startsWith("/category");

  let title = "Jasa Pembuatan Kolam, Relief & Patung Taman.";
  let description =
    "Melayani desain & pengerjaan kolam minimalis, relief dinding, dan patung taman dengan hasil rapi, kuat, dan tahan lama.";

  if (isCategory) {
    if (data.label?.toLowerCase().includes("kolam")) {
      title = "Kolam";
      description = "Pembuatan kolam taman & kolam minimalis berkualitas.";
    } else if (data.label?.toLowerCase().includes("patung")) {
      title = "Patung";
      description = "Patung taman artistik, custom desain sesuai permintaan.";
    } else if (data.label?.toLowerCase().includes("dinding")) {
      title = "Relief Dinding";
      description = "Relief dinding estetis untuk rumah & taman.";
    } else {
      title = data.label || "Produk Kami";
      description = "";
    }
  }

  return (
    <ScrollReveal>
      <div className="p-4 sm:p-6 lg:p-8">
        <div
          className="relative rounded-2xl overflow-hidden h-[320px] sm:h-[380px] lg:h-[440px] bg-cover bg-center"
          style={{ backgroundImage: `url(${data?.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
            <div className="max-w-2xl text-white space-y-4">
              <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs sm:text-sm">
                {data.label || "Jasa Profesional"}
              </span>
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight drop-shadow-lg">
                {title}
              </h1>
              {description && (
                <p className="text-sm sm:text-base text-white/90">
                  {description}
                </p>
              )}
              {isHome && (
                <div className="flex justify-center pt-3">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-x-2 rounded-full border border-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
                  >
                    Lihat Produk
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Banner;
