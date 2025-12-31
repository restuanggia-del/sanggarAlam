import db from "@/lib/db";
import { CategoryForm } from "./components/category-form";

const CategoryPage = async (props: {
  params: Promise<{ storeId: string; categoryId: string }>;
}) => {
  const { storeId, categoryId } = await props.params;

  // ambil data category berdasarkan storeId & categoryId
  const category = await db.category.findFirst({
    where: {
      id: categoryId,
      storeId: storeId,
    },
  });

  // ambil semua banner milik store ini
  const banners = await db.banner.findMany({
    where: {
      storeId: storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* jika CategoryForm ingin menerima banners juga, tinggal kirim props */}
        <CategoryForm initialData={category} banners={banners} />
      </div>
    </div>
  );
};

export default CategoryPage;
