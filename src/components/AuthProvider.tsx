"use client";

import { useEffect } from "react";
import { useRouter, usePathname, redirect } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { clearUser, setLoading, setUser } from "@/redux/features/authSlice";
import { addToast } from "@/redux/features/toastSlice";
import {
  getFirebaseAuth,
  getFirebaseFirestore,
} from "@/firebase/getFirebaseConfig";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getFirebaseAuth, (user) => {
      dispatch(setUser(user));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return children;
}
