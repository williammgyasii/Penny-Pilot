import { SecretManagerServiceClient } from "@google-cloud/secret-manager";
import admin, { initializeApp } from "firebase-admin";

// Google Cloud Secret Manager client
const client = new SecretManagerServiceClient();

// Securely fetch and initialize Firebase Admin credentials
async function initializeFirebaseAdmin() {
  const secretName =
    "projects/akron-server/secrets/firebase-admin-credentials/versions/latest";

  try {
    const [version] = await client.accessSecretVersion({ name: secretName });
    console.log(version);

    if (!version?.payload?.data) {
      throw new Error("Secret payload is null or undefined");
    }

    const serviceAccount = JSON.parse(version.payload.data.toString());

    initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log("Firebase Admin Triggered successfully...");
  } catch (error) {
    console.error(
      "Failed to initialize Firebase Admin with Secret Manager:",
      error
    );
  }
}

// Initialize admin auth
initializeFirebaseAdmin();

// Exporting the admin auth instance
export const adminAuth = admin.auth();
