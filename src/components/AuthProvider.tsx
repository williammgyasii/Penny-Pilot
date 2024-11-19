"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { clearUser, setLoading, setUser } from "@/redux/features/authSlice";
import { getFirebaseAuth, getFirebaseFirestore } from "@/lib/firebase/getFirebaseConfig";
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
        // Check if the path is a protected route (starts with "/dashboard/")
        const isProtectedRoute = pathname.startsWith("/dashboard/");

        // If user is logged in and accessing a protected route
        if (user && isProtectedRoute) {
          // Fetch user details from Firestore
          const userDoc = await getDoc(doc(getFirebaseFirestore, "users", user.uid));

          if (userDoc.exists()) {
            // User data exists, dispatch user data to the store
            dispatch(setUser(userDoc.data()));
            return; // Allow access to the protected route
          } else {
            // throw new Error("User data not found");
          }
        }

        // If no user and trying to access a protected route, redirect to login
        if (!user && isProtectedRoute) {
          dispatch(clearUser());
          router.push("/login");
          return;
        }

        // If the user is logged in and trying to access non-protected route ("/dashboard")
        if (user && !isProtectedRoute) {
          router.push("/dashboard");
        } else {
          dispatch(clearUser());
          router.push("/login");
        }

      } catch (error: unknown) {
        dispatch(clearUser());
        // Optionally, you can display a toast message for errors (commented out for now)
        // dispatch(addToast({ message: "Error loading user data", type: "error" }));
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return children;
}
