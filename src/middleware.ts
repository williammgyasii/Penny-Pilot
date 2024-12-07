import axios from "axios";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { adminAuth } from "./firebase/getFirebaseAdmin";

export async function middleware(request: NextRequest, response: NextResponse) {
  const session = request.cookies.get("session")?.value;

  //Return to /login if don't have a session
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // Validate the session
  try {
    const decodedToken = await adminAuth.verifySessionCookie(session, true);
    const { pathname } = request.nextUrl;

    // If the user is authenticated and trying to access the login page, redirect to dashboard
    if (pathname === "/login") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } catch (error) {
    // If there's an error, clear the session cookie and redirect to login
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("session");
    return response;
  }

  return NextResponse.next();
}

// Add your protected routes here
export const config = {
  matcher: ["/dashboard/:path*"],
};
