import Navbar from "@/components/navbar";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ storeId: string }>;
}) {
  const { storeId } = await params;

  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  let store;
  try {
    store = await db.store.findFirst({
      where: {
        id: storeId,
        userId,
      },
    });
  } catch (error) {
    console.error("DB error in DashboardLayout:", error);
    redirect("/");
  }

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
