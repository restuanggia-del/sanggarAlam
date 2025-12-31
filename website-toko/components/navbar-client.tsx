"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { PhoneCall, BadgeCheck } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface NavbarClientProps {
  categories: Category[];
}

const NavbarClient: React.FC<NavbarClientProps> = ({ categories }) => {
  const pathname = usePathname();

  // 🔥 WhatsApp auto-consultation link (bot-like)
  const waLink = createWhatsAppLink({});

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* BRAND */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-neutral-900">
              Sanggar Alam
            </span>
            <span className="text-xs text-neutral-500">
              Spesialis Relief, Kolam & Patung Taman
            </span>
          </Link>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-x-6">
            {categories.map((category) => {
              const href = `/category/${category.id}`;
              const active = pathname === href;

              return (
                <Link
                  key={category.id}
                  href={href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active ? "text-black" : "text-neutral-500 hover:text-black"
                  )}
                >
                  {category.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-x-4">
            {/* TRUST */}
            <div className="hidden lg:flex items-center gap-x-1 text-xs text-neutral-600">
              <BadgeCheck className="h-4 w-4 text-green-600" />
              <span>10+ Tahun Pengalaman</span>
            </div>

            {/* CTA WHATSAPP */}
            <Link
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
            >
              <PhoneCall className="h-4 w-4" />
              Konsultasi
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarClient;
