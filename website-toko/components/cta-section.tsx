import Link from "next/link";
import { MessageCircleIcon, PhoneCall, Scroll } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import ScrollReveal from "./scroll-reveal";

const CtaSection: React.FC = () => {
  const waLink = createWhatsAppLink({
    product: "Konsultasi Proyek",
    category: "Umum",
  });

  return (
    <ScrollReveal>
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-700 to-green-900 px-8 py-16 text-center">
          {/* decorative circles */}
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -right-8 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white/5" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-white text-sm">
              <PhoneCall className="w-4 h-4" />
              Konsultasi Gratis
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Punya Proyek Taman? <br />
              Ceritakan Kepada Kami!
            </h2>

            <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto">
              Tim kami siap membantu mewujudkan taman impian Anda — dari desain
              kolam, relief dinding, hingga patung taman custom. Konsultasi
              gratis, tanpa biaya apapun.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-full bg-white text-green-700 px-7 py-3 text-sm font-semibold hover:bg-green-50 transition shadow-lg"
              >
                <MessageCircleIcon size={18} />
                Konsultasi via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export { CtaSection };
