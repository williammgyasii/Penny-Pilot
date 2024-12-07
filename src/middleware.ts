import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// Replace this with your deployed Cloud Function URL
const firebaseTokenVerificationURL =
  "https://<your-region>-<your-project-id>.cloudfunctions.net/verifyToken";

// Middleware to check authentication
export async function middleware(req: NextRequest) {
  const { cookies, nextUrl } = req;

  const token = cookies.get("token")?.value;
  console.log(token) // Get token from cookies

  // Only protect /dashboard routes
  if (!nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  try {
    if (!token) {
      // Redirect to login if token doesn't exist
      return NextResponse.redirect(new URL("/login", nextUrl));
    }

    // Token verification via Cloud Function
    const response = await axios.post(firebaseTokenVerificationURL, { token });

    if (response.status === 200) {
      // Token is valid
      return NextResponse.next();
    }

    // Invalid token? Redirect back to login
    return NextResponse.redirect(new URL("/login", nextUrl));
  } catch (error) {
    console.error("Token validation failed", error);
    return NextResponse.redirect(new URL("/login", nextUrl));
  }
}

// Configure the matcher to secure the routes under `/dashboard`
export const config = {
  matcher: ["/dashboard/:path*"], // Only protect the /dashboard routes and subpaths
};
