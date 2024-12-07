"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/reduxhooks";
import { onAuthStateChanged } from "firebase/auth";
import { getClientAuth } from "@/firebase/getFirebaseConfig";
import { setUser } from "@/redux/features/authSlice";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getClientAuth, (user) => {
      dispatch(setUser(user));
      setLoading(false);
      if (!user) {
        router.push("/login");
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
