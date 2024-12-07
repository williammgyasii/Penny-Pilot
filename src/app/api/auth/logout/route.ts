import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  adminAuth,
  initializeFirebaseAdmin,
} from "@/firebase/getFirebaseAdmin";

export async function POST() {
  const auth = await adminAuth; // Access the auth instance
  const sessionCookie = cookies().get("session")?.value;

  if (sessionCookie) {
    try {
      const decodedClaims = await auth.verifySessionCookie(sessionCookie);
      await auth.revokeRefreshTokens(decodedClaims.sub);
    } catch (error) {
      console.log(error);
      // Ignore token verification errors on logout
    }
  }

  cookies().delete("session");

  return NextResponse.json({ status: "success" }, { status: 200 });
}
