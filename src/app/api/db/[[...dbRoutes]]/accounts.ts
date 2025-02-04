import { Hono } from "hono";
import { db } from "@/database/drizzle";
import { accountsTable, insertAccountTable } from "@/database/schema";
import { zValidator } from "@hono/zod-validator";
import { uuid } from "drizzle-orm/pg-core";

const accounts = new Hono()
  .get("/getAllAccounts", async (ctx) => {
    const data = await db
      .select({
        id: accountsTable.id,
        name: accountsTable.name,
        plaid_id: accountsTable.plaid_id,
      })
      .from(accountsTable);

    return ctx.json(
      {
        data,
      },
      200
    );
  })
  .post(
    "/postNewAccount",
    zValidator(
      "json",
      insertAccountTable.pick({
        name: true,
      })
    ),
    async (ctx) => {
      const values = ctx.req.valid("json");
      const [data] = await db
        .insert(accountsTable)
        .values({
          id: uuid(),
          name: values.name,
          plaid_id: null,
          userId: values.userId,
          classvar: "Account",
        })
        .returning();
      return ctx.json({ data });
    }
  );

export default accounts;
