import { serialize } from "cookie";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  res.setHeader(
    "Set-Cookie",
    serialize("session", "", {
      maxAge: -1,
      path: "/",
    })
  );

  res.status(200).json({ status: "success" });
}
