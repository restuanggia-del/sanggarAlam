import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) {
    redirect("sign-in");
  }

  let store = null;
  try {
    store = await db.store.findFirst({
      where: { userId },
      select: { id: true },
    });
  } catch (error) {
    console.error("DB error in SetupLayout:", error);
  }

  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
