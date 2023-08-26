import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("online-users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }).unique(),
});

export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type
