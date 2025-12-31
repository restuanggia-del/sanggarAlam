import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import Container from "@/components/ui/container";
import SearchSection from "@/app/(routes)/search-section";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const banner = await getBanner("a987f234-2a6b-4049-8533-6f69a1ae58ec");

  return (
    <Container>
      <div className="space-y-16 pb-10">
        {banner?.imageUrl && <Banner data={banner} />}
        <SearchSection products={products} />
      </div>
    </Container>
  );
};

export default HomePage;
