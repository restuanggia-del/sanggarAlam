import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

interface CategorySectionProps {
  categories: Category[];
  categoryImages?: Record<string, string>;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  categories,
  categoryImages,
}) => {
  if (!categories || categories.length === 0) return null;

  return (
    <ScrollReveal>
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-medium mb-3">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Jelajahi Kategori
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Temukan jasa terbaik kami sesuai kebutuhan taman dan hunian Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const imageUrl =
              categoryImages?.[category.name] || category.banner?.imageUrl;

            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 block"
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <p className="text-white/70 text-xs mb-1">Kategori</p>
                    <h3 className="text-white font-bold text-xl leading-tight">
                      {category.name}
                    </h3>
                  </div>
                  <div className="rounded-full bg-white/20 backdrop-blur-sm p-2 group-hover:bg-white/40 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
};

export { CategorySection };
