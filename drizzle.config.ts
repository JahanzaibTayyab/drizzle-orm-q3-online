import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgres://default:p8FwxmPSKMZ4@ep-lingering-smoke-991231-pooler.ap-southeast-1.postgres.vercel-storage.com/verceldb?sslmode=require",
  },
} satisfies Config;
