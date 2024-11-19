import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const runtime = "edge";

const app = new Hono().basePath("/api/test/");

app
  .get("/testing", (c) => {
    return c.json({
      message: "Hello Next.js! Test",
      firstName: "Wulliam",
    });
  })
  .get(
    "/testing/:hono",
    zValidator(
      "param",
      z.object({
        hono: z.string(),
      })
    ),
    (c) => {
      const { hono } = c.req.valid("param");
      return c.json({
        message: `Hello Next.js! ${hono}`,
        firstName: "Wulliam",
      });
    }
  );

export const GET = handle(app);
export const POST = handle(app);
