import { db } from "../drizzle";
import { accountsTable } from "../schema";

export const getAllAccounts = async () => {
  try {
    const data = await db
      .select({
        id: accountsTable.id,
        name: accountsTable.name,
      })
      .from(accountsTable);

    return data;
  } catch (error) {
    console.log("Get all accounts error", error);
    return error;
  }
};
