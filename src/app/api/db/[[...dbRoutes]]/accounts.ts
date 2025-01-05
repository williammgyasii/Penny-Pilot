import { Hono } from "hono";

const accounts = new Hono();

accounts.get("/", (ctx) => {
  return ctx.json({
    message: "Hello Account Route on the db!",
  });
});

export default accounts;
