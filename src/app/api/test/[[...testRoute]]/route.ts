import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api/test/");

app
  .get("/testing", (c) => {
    return c.json({
      message: "Hello Next.js! Test",
      firstName: "Wulliam",
    });
  })
  .get("/testing/:hono", (c) => {
    return c.json({
      message: `Hello Next.js! ${c.req.param("hono")}`,
      firstName: "Wulliam",
    });
  });

export const GET = handle(app);
export const POST = handle(app);
