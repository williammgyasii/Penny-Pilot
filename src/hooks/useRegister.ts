"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { RegisterInput } from "@/lib/validations/auth";
import { setUser } from "@/lib/redux/features/userSlice";
import { getFirebaseErrorMessage } from "@/lib/utils";
import { useToast } from "./useToast";
import {
  getFirebaseAuth,
  getFirebaseFirestore,
} from "@/lib/firebase/getFirebaseConfig";

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const dispatch = useDispatch();

  const registerUser = async (data: RegisterInput) => {
    setIsLoading(true);
    try {
      // Create user and prepare user data in parallel
      const [userCredential] = await Promise.all([
        createUserWithEmailAndPassword(
          getFirebaseAuth,
          data.email,
          data.password
        ),
        // Add artificial delay to prevent race conditions
        new Promise((resolve) => setTimeout(resolve, 100)),
      ]);

      const userData = {
        uid: userCredential.user.uid,
        email: data.email,
        name: data.name,
        phone: data.phone,
        address: data.address,
        createdAt: new Date().toISOString(),
      };

      // Store user data and update Redux state in parallel
      await Promise.all([
        setDoc(
          doc(getFirebaseFirestore, "users", userCredential.user.uid),
          userData
        ),
        dispatch(setUser(userData)),
      ]);

      toast({
        title: "Success!",
        description: "Your account has been created.",
      });

      // Small delay before redirect to ensure toast is visible
      await new Promise((resolve) => setTimeout(resolve, 500));
      router.push("/dashboard");
    } catch (error: any) {
      const errorMessage = error.code
        ? getFirebaseErrorMessage(error.code)
        : "Something went wrong. Please try again.";

      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { registerUser, isLoading };
}
