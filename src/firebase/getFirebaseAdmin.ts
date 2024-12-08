import { SecretManagerServiceClient } from "@google-cloud/secret-manager";
import * as admin from "firebase-admin";

// Firebase Admin app instance to prevent multiple initializations
export const initializeFirebaseAdmin = async (): Promise<admin.app.App> => {
  const secretManagerClient = new SecretManagerServiceClient();
  const secretName =
    "projects/penny-pilot-backend/secrets/firebase-admin-service-account/versions/latest";

  try {
    const [version] = await secretManagerClient.accessSecretVersion({
      name: secretName,
    });

    if (!version?.payload?.data) {
      throw new Error("Secret payload is invalid or not set");
    }

    const serviceAccountKey = JSON.parse(version.payload.data.toString());

    // Check if the app is already initialized
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccountKey),
      });
      console.log("Firebase Admin initialized successfully");
    } else {
      console.log("Firebase Admin already initialized");
    }

    return admin.app(); // Return default app
  } catch (error) {
    console.error("Error initializing Firebase Admin:", error);
    throw error;
  }
};

export const adminAuth = admin.auth();
