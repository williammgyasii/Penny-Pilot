import { Hono } from "hono";
import { handle } from "hono/vercel";
import { NextRequest, NextResponse } from "next/server";
import account from "./accounts";
export const runtime = "edge";

const app = new Hono().basePath("api/db/");

app.route("/accounts", account);

export const GET = handle(app);
export const POST = handle(app);

// export async function GET(req: NextRequest, response: NextResponse) {
//   return NextResponse.json(
//     { message: "Hello Account Server" },
//     { status: 200 }
//   );
// }
