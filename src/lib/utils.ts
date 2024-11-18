import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFirebaseErrorMessage(errorCode: string): string {
  const errorMessages: Record<string, string> = {
    "auth/email-already-in-use": "This email is already registered.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/operation-not-allowed": "Email/password accounts are not enabled.",
    "auth/weak-password": "Please choose a stronger password.",
    "auth/network-request-failed":
      "Network error. Please check your connection.",
  };

  return errorMessages[errorCode] || "An unexpected error occurred.";
}
