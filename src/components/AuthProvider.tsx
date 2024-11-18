"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase/getFirebaseConfig";
import { clearUser, setUser } from "@/redux/features/authSlice";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getFirebaseAuth, async (user) => {
      console.log(user);
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email || "",
            firstName: user.displayName?.split(" ")[0] || "",
            lastName: user.displayName?.split(" ")[1] || "",
            // phoneNumber: user.phoneNumber || "",
          })
        );
      } else {
        dispatch(clearUser());
        if (pathname.startsWith("/dashboard")) {
          router.push("/login");
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, router, pathname]);

  return <>{children}</>;
}
