"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/reduxhooks";
import { RootState } from "@/redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { getClientAuth } from "@/firebase/getFirebaseConfig";
import { setUser } from "@/redux/features/authSlice";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getClientAuth, (user) => {
      dispatch(setUser(user));
      if (!user) {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [dispatch, router]);

  if (!user) {
    return null; // Or a loading spinner
  }

  return <>{children}</>;
}
