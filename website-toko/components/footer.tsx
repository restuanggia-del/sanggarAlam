import Link from "next/link";
import { PhoneCall, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const telp = process.env.NEXT_PUBLIC_TELP ?? "";
  const WA_LINK = telp
    ? `https://wa.me/${telp}?text=${encodeURIComponent(
        "Halo Sanggar Alam 👋, saya ingin konsultasi.",
      )}`
    : "#";

  const MAPS_LINK = "https://maps.app.goo.gl/XCdLBpoftzrvgTj99";
  const EMAIL = "ssanggaralam@gmail.com";
  const KOLAM_CATEGORY_ID = "7b494b4a-7f6f-4c53-82cf-ac78e965a566";

  return (
    <footer className="bg-neutral-50 border-t mt-16">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-neutral-900">Sanggar Alam</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Spesialis pembuatan relief, kolam hias, dan patung taman dengan
              pengalaman lebih dari 10 tahun.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-3">
              Layanan
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>Relief Tebing</li>
              <li>Kolam Hias</li>
              <li>Patung Taman</li>
              <li>Custom Proyek</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-3">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-black">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href={`/category/${KOLAM_CATEGORY_ID}`}
                  className="text-neutral-600 hover:text-black"
                >
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/#kontak"
                  className="text-neutral-600 hover:text-black"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-3">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>
                <Link
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-x-3 hover:text-green-600 transition"
                >
                  <PhoneCall className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>{telp || "Hubungi via WhatsApp"}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-x-3 hover:text-black transition"
                >
                  <MapPin className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed break-words">
                    Gedung Asri, Kec. Penawar Aji, Kab. Tulang Bawang, Lampung
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-x-3 hover:text-blue-600 transition"
                >
                  <Mail className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{EMAIL}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} Sanggar Alam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
