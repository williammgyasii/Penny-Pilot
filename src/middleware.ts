import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { adminAuth } from "./firebase/getFirebaseAdmin";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!session) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    try {
      await adminAuth.verifySessionCookie(session, true);
    } catch (error) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
