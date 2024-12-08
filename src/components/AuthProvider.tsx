"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/reduxhooks";
import { onAuthStateChanged } from "firebase/auth";
import {
  getClientAuth,
  getClientFirestore,
} from "@/firebase/getFirebaseConfig";
import { setUser } from "@/redux/features/authSlice";
import { doc, getDoc } from "firebase/firestore";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getClientAuth, async (user) => {
      if (user) {
        const userDoc = await getDoc(
          doc(getClientFirestore, "users", user.uid)
        );
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            ...userDoc.data(),
          })
        );
        setLoading(false);
      } else {
        dispatch(setUser(null));
        console.log("Client Router Triggered...");
        setLoading(false);
        // router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [dispatch, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return <>{children}</>;
}
