import functions from "firebase-functions";
import admin from "firebase-admin";
import cors from "cors";

// Initialize Firebase Admin SDK
admin.initializeApp();

// Set up CORS middleware
const corsHandler = cors({ origin: true });

export const createSessionCookie = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
      }

      const { idToken } = req.body;

      if (!idToken) {
        return res
          .status(400)
          .json({ error: "Missing idToken in request body" });
      }

      const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
      const sessionCookie = await admin
        .auth()
        .createSessionCookie(idToken, { expiresIn });

      res.cookie("session", sessionCookie, {
        maxAge: expiresIn,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      return res
        .status(200)
        .json({ success: true, sessionCookie: sessionCookie });
    } catch (error) {
      console.error("Error creating session cookie:", error);
      return res
        .status(401)
        .json({ error: "Failed to create session", errorMessage: error });
    }
  });
});

// export const verifyToken = functions.https.onRequest(async (req, res) => {
//   corsHandler(req, res, async () => {
//     try {
//       const { token } = req.body;

//       if (!token) {
//         return res.status(401).json({ error: "No token provided" });
//       }

//       // Verify token
//       const decodedToken = await admin.auth().verifyIdToken(token);
//       return res.status(200).json({ success: true, user: decodedToken });
//     } catch (error) {
//       console.error("Token verification failed:", error);
//       return res.status(401).json({ error: "Invalid token" });
//     }
//   });
// });
