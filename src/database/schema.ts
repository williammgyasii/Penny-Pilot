import { pgTable, text, integer, varchar } from "drizzle-orm/pg-core";

// export const accounts = pgTable("accounts", {
//   id: text("id").primaryKey(),
//   name: text("name").notNull(),
//   userId: text("userId").notNull(),
// });

export const accountsTable = pgTable("accounts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  plaid_id: varchar({ length: 255 }),
  name: varchar({ length: 255 }).notNull(),
  userId: varchar({ length: 255 }).notNull().unique(),
});
