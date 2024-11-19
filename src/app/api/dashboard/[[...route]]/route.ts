import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "nodejs";

const app = new Hono().basePath("/api/dashboard/");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});

export const GET = handle(app);
export const POST = handle(app);
