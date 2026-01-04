import db from "@/lib/db";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DashboardPageProps {
  params: Promise<{ storeId: string }>;
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const { storeId } = await params;

  let storeWithCounts = null;
  try {
    storeWithCounts = await db.store.findUnique({
      where: { id: storeId },
      include: {
        _count: {
          select: { product: true, categories: true, banners: true },
        },
      },
    });
  } catch (error) {
    console.error("DB error in DashboardPage:", error);
    return (
      <div className="p-6 rounded border bg-red-50 text-red-700">
        Terjadi masalah koneksi ke database. Silakan coba lagi nanti.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-card/60 p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-md bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white font-bold text-xl">
              {storeWithCounts?.name
                ? storeWithCounts.name.charAt(0).toUpperCase()
                : "S"}
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                {storeWithCounts?.name ?? "Untitled Store"}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Active Store</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="uppercase">{storeWithCounts?.id}</Badge>
            <Link href={`/${storeId}/settings`}>
              <Button className="cursor-pointer" variant="outline" size="sm">
                Settings
              </Button>
            </Link>
            <Button asChild variant="outline" size="sm">
              <a
                href={`${
                  process.env.NEXT_PUBLIC_STORE_URL ?? "http://localhost:3001"
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Store
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="rounded-md bg-muted p-4 text-center">
            <div className="text-sm text-muted-foreground">Products</div>
            <div className="text-xl font-bold">
              {storeWithCounts?._count.product ?? 0}
            </div>
          </div>
          <div className="rounded-md bg-muted p-4 text-center">
            <div className="text-sm text-muted-foreground">Categories</div>
            <div className="text-xl font-bold">
              {storeWithCounts?._count.categories ?? 0}
            </div>
          </div>
          <div className="rounded-md bg-muted p-4 text-center">
            <div className="text-sm text-muted-foreground">Banners</div>
            <div className="text-xl font-bold">
              {storeWithCounts?._count.banners ?? 0}
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Created:{" "}
          {storeWithCounts?.createdAt
            ? storeWithCounts.createdAt.toISOString().slice(0, 10)
            : "-"}
        </p>
      </div>
      <div className="p-6 rounded-lg border bg-background">
        <h2 className="text-lg font-semibold">Quick Actions</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Manage your store data, upload banners, and configure settings.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <Link href={`/${storeId}/products`}>
            <Button className="cursor-pointer" size="sm">
              Manage Products
            </Button>
          </Link>
          <Link href={`/${storeId}/categories`}>
            <Button className="cursor-pointer" variant="outline" size="sm">
              Manage Categories
            </Button>
          </Link>
          <Link href={`/${storeId}/banners`}>
            <Button className="cursor-pointer" variant="outline" size="sm">
              Manage Banners
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
