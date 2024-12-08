import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { adminAuth } from "@/firebase/getFirebaseAdmin";

export async function POST() {
  const sessionCookie = cookies().get("session")?.value;

  if (sessionCookie) {
    try {
      const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie);
      await adminAuth.revokeRefreshTokens(decodedClaims.sub);
    } catch (error) {
      console.log(error);
      // Ignore token verification errors on logout
    }
  }

  cookies().delete("session");

  return NextResponse.json({ status: "success" }, { status: 200 });
}
