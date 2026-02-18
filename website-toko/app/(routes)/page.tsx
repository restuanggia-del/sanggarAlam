import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import getCategories from "@/actions/get-categories";
import Banner from "@/components/banner";
import Container from "@/components/ui/container";
import SearchSection from "@/app/(routes)/search-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { CategorySection } from "@/components/category-section";
import { CtaSection } from "@/components/cta-section";

export const revalidate = 0;

const HomePage = async () => {
  const [
    products,
    banner,
    categories,
    bannerDinding,
    bannerKolam,
    bannerPatung,
  ] = await Promise.all([
    getProducts({ isFeatured: true }),
    getBanner("a987f234-2a6b-4049-8533-6f69a1ae58ec"),
    getCategories(),
    getBanner("9c7bc68d-fc88-4d21-842e-c447c2f7c615"),
    getBanner("a987f234-2a6b-4049-8533-6f69a1ae58ec"),
    getBanner("02897965-8ad5-4ecc-bc47-236b3c64e1d7"),
  ]);

  const categoryImages: Record<string, string> = {
    Dinding: bannerDinding?.imageUrl || "",
    Kolam: bannerKolam?.imageUrl || "",
    Patung: bannerPatung?.imageUrl || "",
  };

  return (
    <Container>
      <div className="pb-10">
        {banner?.imageUrl && <Banner data={banner} />}

        <SearchSection products={products} />

        <CategorySection
          categories={categories}
          categoryImages={categoryImages}
        />

        <WhyChooseUs />

        <CtaSection />
      </div>
    </Container>
  );
};

export default HomePage;
