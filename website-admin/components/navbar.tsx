import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./main-nav";
import StoreSwitcher from "./store-switcher";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import db from "@/lib/db";

const Navbar = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();

  const stores = await db.store.findMany({
    where: {
      userId,
    },
  });

  const displayName =
    user?.firstName ||
    user?.username ||
    user?.emailAddresses[0]?.emailAddress.split("@")[0] ||
    "User";

  return (
    <div className="border-b bg-background">
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="grid h-16 grid-cols-3 items-center">
          <div className="flex items-center">
            <StoreSwitcher items={stores} />
          </div>
          <div className="flex justify-center">
            <MainNav />
          </div>
          <div className="flex items-center justify-end gap-3">
            <span className="hidden md:block text-sm text-muted-foreground">
              Hi, {displayName}
            </span>
            <div className="relative">
              <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-green-500 ring-2 ring-background" />
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
