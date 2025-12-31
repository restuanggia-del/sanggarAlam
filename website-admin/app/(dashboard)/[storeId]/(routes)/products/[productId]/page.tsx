import db from "@/lib/db";
import { ProductForm } from "./components/product-form";

const ProductPage = async (props: {
  params: Promise<{ storeId: string; productId: string }>;
}) => {
  const { storeId, productId } = await props.params;

  const product = await db.product.findFirst({
    where: {
      id: productId,
      storeId: storeId,
    },
    include: {
      images: true,
    },
  });

  const categories = await db.category.findMany({
    where: {
      storeId: storeId,
    },
  });

  const formattedProduct = product
    ? {
        ...product,
        price: product.price.toString(),
      }
    : null;

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm initialData={formattedProduct} categories={categories} />
      </div>
    </div>
  );
};

export default ProductPage;
