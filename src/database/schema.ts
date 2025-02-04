import { pgTable, text, integer, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

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
  classvar: varchar({ length: 255 }),
});

export const transactionTabe = pgTable("transactions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  amount: integer(),
  date: text("date").notNull(),
  category: varchar({ length: 255 }),
  description: varchar({ length: 255 }),
  // classvar: varchar({ length: 255 }).nullable(),
});

export const insertAccountTable = createInsertSchema(accountsTable);
