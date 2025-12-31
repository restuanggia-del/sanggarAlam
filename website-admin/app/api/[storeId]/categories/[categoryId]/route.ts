import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ categoryId: string }> }
) {
  try {
    const { params } = context;
    if (!(await params).categoryId) {
      return new NextResponse("Category id dibutuhkan", { status: 400 });
    }
    const category = await db.category.findUnique({
      where: {
        id: (await params).categoryId,
      },
      include: {
        banner: true,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  context: { params: Promise<{ storeId: string; categoryId: string }> }
) {
  try {
    const { params } = context;
    const { userId } = await auth();
    const body = await req.json();
    const { name, bannerId } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Harus menginput nama", { status: 400 });
    }
    if (!bannerId) {
      return new NextResponse("Harus menginput bannerId", { status: 400 });
    }
    if (!(await params).categoryId) {
      return new NextResponse("Category id dibutuhkan", { status: 400 });
    }

    const storeByUserId = await db.store.findFirst({
      where: {
        id: (await params).storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const category = await db.category.updateMany({
      where: {
        id: (await params).categoryId,
      },
      data: {
        name,
        bannerId,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ storeId: string; categoryId: string }> }
) {
  try {
    const { params } = context;
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!(await params).categoryId) {
      return new NextResponse("Category id dibutuhkan", { status: 400 });
    }

    const storeByUserId = await db.store.findFirst({
      where: {
        id: (await params).storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const category = await db.category.deleteMany({
      where: {
        id: (await params).categoryId,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
