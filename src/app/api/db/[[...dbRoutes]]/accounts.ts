import { Hono } from "hono";
import { db } from "@/database/drizzle";
import { accountsTable } from "@/database/schema";

const accounts = new Hono().get("/getAllAccounts", async (ctx) => {
  const data = await db
    .select({
      id: accountsTable.id,
      name: accountsTable.name,
    })
    .from(accountsTable);

  return ctx.json(
    {
      data,
    },
    200
  );
});

export default accounts;
