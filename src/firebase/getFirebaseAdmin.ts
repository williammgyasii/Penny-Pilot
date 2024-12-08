import admin from "firebase-admin";

export function initializeFirebaseAdmin() {
  // Check if already initialized
  if (admin.apps.length) {
    return admin.app();
  }

  // Production environment
  if (
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production"
  ) {
    return admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
  }

  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export const adminAuth = initializeFirebaseAdmin().auth();
