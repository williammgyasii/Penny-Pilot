"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { clearUser, setLoading, setUser } from "@/redux/features/authSlice";
import {
  getFirebaseAuth,
  getFirebaseFirestore,
} from "@/lib/firebase/getFirebaseConfig";
import { addToast } from "@/redux/features/toastSlice";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    const unsubscribe = onAuthStateChanged(getFirebaseAuth, async (user) => {
      try {
        if (user) {
          // Fetch user details from Firestore
          const userDoc = await getDoc(
            doc(getFirebaseFirestore, "users", user.uid)
          );

          if (userDoc.exists()) {
            dispatch(setUser(userDoc.data() as any));
            router.push("/dashboard");
          } else {
            throw new Error("User data not found");
          }
        } else {
          dispatch(clearUser());
          router.push("/login");
        }
      } catch (error: any) {
        dispatch(clearUser());
        // dispatch(
        //   addToast({
        //     message: "Error loading user data",
        //     type: "error",
        //   })
        // );
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [dispatch, router, pathname]);

  return children;
}
