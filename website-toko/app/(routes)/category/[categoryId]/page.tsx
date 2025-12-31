import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getBanner from "@/actions/get-banner";
import Banner from "@/components/banner";
import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/product-card";
import { Banner as BannerType } from "@/types";

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}

const DEFAULT_BANNER_ID = "ca791b2e-7906-4ac6-ae37-f83f9063cce1";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params;

  const [productsResult, category] = await Promise.all([
    getProducts({ categoryId }),
    getCategory(categoryId),
  ]);

  const products = Array.isArray(productsResult) ? productsResult : [];

  const safeGetBanner = async (id: string) => {
    try {
      return await getBanner(id);
    } catch (err) {
      console.error("getBanner failed for id", id, err);
      return null;
    }
  };

  let bannerData: BannerType | null = null;
  const rawBanner: any = category?.banner;

  if (rawBanner) {
    if (typeof rawBanner === "string") {
      bannerData = await safeGetBanner(rawBanner);
    } else if (rawBanner?.imageUrl) {
      bannerData = rawBanner;
    } else if (rawBanner?.id) {
      bannerData = await safeGetBanner(rawBanner.id);
    }
  }

  if (!bannerData && products.length > 0) {
    const firstImg = products[0]?.images?.[0]?.url;
    if (firstImg) {
      bannerData = {
        id: `product-banner-${products[0].id}`,
        label:
          products[0]?.category?.name ??
          category?.name ??
          products[0]?.name ??
          "Category",
        imageUrl: firstImg,
      };
    }
  }

  if (!bannerData) {
    bannerData = await safeGetBanner(DEFAULT_BANNER_ID);
  }

  return (
    <div>
      <Container>
        {bannerData?.imageUrl ? (
          <Banner data={bannerData} />
        ) : (
          <div className="py-8">
            <h1 className="text-3xl font-bold mb-6">
              {category?.name ?? "Category"}
            </h1>
          </div>
        )}

        <div className="mt-6">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">No products found.</div>
          )}
        </div>
      </Container>
    </div>
  );
}
