import { SecretManagerServiceClient } from "@google-cloud/secret-manager";
import admin from "firebase-admin";
export async function getSecretValue(secretName: string): Promise<string> {
  const client = new SecretManagerServiceClient();

  try {
    const [version] = await client.accessSecretVersion({
      name: `projects/penny-pilot-backend/secrets/firebase-admin-service-account/versions/latest`,
    });

    if (!version.payload?.data) {
      throw new Error("No secret data found");
    }

    return version.payload.data.toString();
  } catch (error) {
    console.error("Error accessing secret:", error);
    throw error;
  }
}

if (!admin.apps.length) {
  try {
    const firebaseCredentials = JSON.parse(
      await getSecretValue("FIREBASE_ADMIN_CREDENTIALS")
    );

    admin.initializeApp({
      credential: admin.credential.cert(firebaseCredentials),
    });
  } catch (error) {
    console.error("Firebase Admin initialization error:", error);
  }
}

export const adminAuth = admin.auth();
