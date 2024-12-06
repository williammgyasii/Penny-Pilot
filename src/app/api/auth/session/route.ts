import { firebaseAdminAuth } from "@/firebase/getFirebaseAdmin";
import { NextRequest, NextResponse } from "next/server";
import { serialize } from 'cookie';


export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json();

    if (!idToken) {
      return NextResponse.json({ error: "Missing idToken" }, { status: 400 });
    }

    const expiresIn = 60 * 60 * 24 * 7 * 1000; // 7 days
    const sessionCookie = await firebaseAdminAuth.createSessionCookie(idToken, {
      expiresIn,
    });

    const cookie = serialize("session", sessionCookie, {
      maxAge: expiresIn / 1000, // Convert to seconds
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "strict",
    });

    const response = NextResponse.json({ status: "success" });
    response.headers.append("Set-Cookie", cookie);
    return response;
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
