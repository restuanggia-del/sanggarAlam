import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// Use a stable global reference to avoid creating many PrismaClient instances
// during hot-reloads in development.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

export default db;
