import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";
import auth, { getAuth } from "firebase-admin/auth";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

export const initializeFirebaseAdmin = async () => {
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

    if (!getApps().length) {
      initializeApp({
        credential: applicationDefault(),
      });
      console.log("Firebase Admin initialized successfully");
    }
  } catch (error) {
    console.error("Error accessing secret from Secret Manager:", error);
    throw error;
  }
};

export const adminAuth = getAuth();
