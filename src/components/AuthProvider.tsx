"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getFirebaseAuth } from "@/lib/firebase/getFirebaseConfig";
import { clearUser, setUser } from "@/redux/features/authSlice";

const publicPaths = ["/login", "/register", "/forgot-password"];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getFirebaseAuth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email!,
          })
        );
        if (publicPaths.includes(pathname)) {
          router.push("/dashboard");
        }
      } else {
        dispatch(clearUser());
        if (!publicPaths.includes(pathname)) {
          router.push("/login");
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, router, pathname]);

  return children;
}
