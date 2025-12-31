import db from "@/lib/db";
import { BannerForm } from "./components/banner-form";

const BannerPage = async (props: {
  params: Promise<{ storeId: string; bannerId: string }>;
}) => {

  const { storeId, bannerId } = await props.params;

  const banner = await db.banner.findFirst({
    where: {
      id: bannerId,
      storeId: storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BannerForm initialData={banner} />
      </div>
    </div>
  );
};

export default BannerPage;
