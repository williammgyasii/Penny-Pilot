import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { parse } from "cookie";
import { CREATE_SESSION_COOKIE_CLOUD_FUNCTION_URL } from "./lib/constants";

axios.defaults.withCredentials = true;

export async function middleware(req: NextRequest) {
  // Extract cookies from the request headers
  const cookies = req.headers.get("cookie");
  let token = null;

  if (cookies) {
    const parsedCookies = parse(cookies);
    token = parsedCookies.session; // Get token from the session cookie
  }

  console.log(token);

  // Redirect to login if the token isn't valid or doesn't exist
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    try {
      const response = await axios.post(
        CREATE_SESSION_COOKIE_CLOUD_FUNCTION_URL,
        { token }
      );

      if (!response.data.success) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
      }

      return NextResponse.next();
    } catch (error) {
      console.error("Error verifying token with Cloud Function", error);
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }

  return NextResponse.next();
}
