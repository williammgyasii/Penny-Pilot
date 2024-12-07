import { SecretManagerServiceClient } from "@google-cloud/secret-manager";
import * as admin from "firebase-admin";

// Google Cloud Secret Manager client
const client = new SecretManagerServiceClient();
let initialized = false;

// Securely fetch and initialize Firebase Admin credentials
async function initializeFirebaseAdmin() {
  if (initialized) return;

  const secretName =
    "projects/akron-server/secrets/firebase-admin-credentials/versions/latest";

  try {
    const [version] = await client.accessSecretVersion({ name: secretName });

    if (!version?.payload?.data) {
      throw new Error("Secret payload is null or undefined");
    }

    const serviceAccount = JSON.parse(version.payload.data.toString());

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    initialized = true;
    console.log("Firebase Admin Triggered successfully...");
  } catch (error) {
    console.error(
      "Failed to initialize Firebase Admin with Secret Manager:",
      error
    );
    throw new Error("Failed to initialize Firebase Admin");
  }
}

// Initialize admin auth
initializeFirebaseAdmin();

// Exporting the admin auth instance
export const adminAuth = admin.auth();
