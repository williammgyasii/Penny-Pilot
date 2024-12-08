import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  //Return to /login if don't have a session
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // research on ways to validate
    // const result = await axios.get("api/auth/session");
    // // const decodedToken = await adminAuth.verifySessionCookie(session, true);
    const { pathname } = request.nextUrl;

    if (pathname === "/login") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } catch (error) {
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
