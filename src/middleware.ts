import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { VERIFY_SESSION_COOKIE_CLOUD_FUNCTION_URL } from "./lib/constants";

// URL of the deployed Cloud Function endpoint

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Extract token from cookies
  console.log(token);

  // Only intercept requests for the dashboard
  if (!req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  if (!token) {
    // No token found, redirect unauthenticated users
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  try {
    const response = await axios.post(
      VERIFY_SESSION_COOKIE_CLOUD_FUNCTION_URL,
      { token }
    );

    if (response.data.success) {
      // Token is valid, allow access
      return NextResponse.next();
    }

    // Token invalid, redirect to login
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}

// Configure to only apply middleware logic to /dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
