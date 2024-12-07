import * as admin from "firebase-admin";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

// Create a function to initialize Firebase Admin SDK
let app: admin.app.App | undefined;

export async function initializeFirebaseAdmin(): Promise<admin.app.App> {
  if (app) return app;

  try {
    // Fetch the service account JSON from Google Cloud Secret Manager
    const secretClient = new SecretManagerServiceClient();
    const [accessResponse] = await secretClient.accessSecretVersion({
      name: "projects/akron-server/secrets/admin-config/versions/latest",
    });

    const serviceAccount = JSON.parse(
      accessResponse.payload?.data?.toString() || "{}"
    );

    if (!serviceAccount.project_id || !serviceAccount.client_email) {
      throw new Error("Invalid service account JSON from Secret Manager");
    }

    // Initialize Firebase Admin SDK
    app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    console.log("Firebase Admin Initialized");
    return app;
  } catch (error) {
    console.error("Error initializing Firebase Admin:", error);
    throw error;
  }
}

// Export the admin.auth() instance
export const adminAuth = (async () => {
  const adminApp = await initializeFirebaseAdmin();
  return adminApp.auth();
})();
