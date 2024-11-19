// src/lib/firebaseAdmin.js
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

// Initialize Firebase Admin SDK
initializeApp({
  credential: applicationDefault(), // Use service account or default credentials
});

const firebaseAdminAuth = getAuth(); // Firebase authentication instance

export { firebaseAdminAuth };
