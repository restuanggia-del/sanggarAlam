"use client";

import { Shield, Clock, Star, Hammer, Phone, Award } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const reasons = [
  {
    icon: Award,
    title: "10+ Tahun Pengalaman",
    description:
      "Kami telah menyelesaikan ratusan proyek kolam, relief dinding, dan patung taman di seluruh Tulang Bawang.",
  },
  {
    icon: Hammer,
    title: "Pengerjaan Profesional",
    description:
      "Tim ahli berpengalaman menggunakan material berkualitas tinggi untuk hasil yang kuat dan tahan lama.",
  },
  {
    icon: Star,
    title: "Hasil Memuaskan",
    description:
      "Kepuasan pelanggan adalah prioritas kami. Setiap proyek dikerjakan dengan detail dan penuh dedikasi.",
  },
  {
    icon: Shield,
    title: "Bergaransi",
    description:
      "Setiap pekerjaan kami bergaransi. Jika ada kerusakan, kami siap perbaiki tanpa biaya tambahan.",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description:
      "Kami menghargai waktu Anda. Setiap proyek diselesaikan sesuai jadwal yang telah disepakati.",
  },
  {
    icon: Phone,
    title: "Konsultasi Gratis",
    description:
      "Konsultasikan kebutuhan proyek Anda secara gratis. Kami siap memberikan estimasi biaya dan waktu.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <ScrollReveal>
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-6">
          <span className="inline-block rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-medium mb-3">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Kenapa Pilih <span className="text-green-600">Sanggar Alam?</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Kami hadir dengan komitmen kualitas dan pelayanan terbaik untuk
            setiap proyek taman impian Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 group-hover:bg-green-100 transition-colors">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
};

export { WhyChooseUs };
