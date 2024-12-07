import { adminAuth } from "@/firebase/getFirebaseAdmin";
import { NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//   const session = cookies().get("session")?.value || "";

//   //Validate if the cookie exist in the request
//   if (!session) {
//     return NextResponse.json({ isLogged: false }, { status: 401 });
//   }

//   //Use Firebase Admin to validate the session cookie
//   const decodedClaims = await adminAuth.verifySessionCookie(session, true);

//   if (!decodedClaims) {
//     return NextResponse.json({ isLogged: false }, { status: 401 });
//   }

//   return NextResponse.json({ isLogged: true }, { status: 200 });
// }

export async function POST(request: Request) {
  const { idToken } = await request.json();
  const auth = await adminAuth;
  try {
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn,
    });

    const response = NextResponse.json({ success: true }, { status: 200 });
    response.cookies.set("session", sessionCookie, {
      maxAge: expiresIn,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create session", errorMessage: error },
      { status: 401 }
    );
  }
}
