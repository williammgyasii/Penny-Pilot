import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: "YOUR_PROJECT_ID",
      clientEmail: "YOUR_CLIENT_EMAIL",
      privateKey: "YOUR_PRIVATE_KEY".replace(/\\n/g, "\n"),
    }),
  });
}

const firestore = getFirestore();

export { firestore };
