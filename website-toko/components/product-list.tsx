import { Product } from "@/types";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-3xl">{title}</h3>
      </div>

      {items.length === 0 && <NoResults />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
