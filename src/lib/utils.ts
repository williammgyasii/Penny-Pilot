import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import firebaseErrorMessages from "./errorCodes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFirebaseErrorMessage(errorCode: string): string {
  return firebaseErrorMessages[errorCode];
}

export function formatBytes(
  bytes: number,
  opts: {
    decimals?: number;
    sizeType?: "accurate" | "normal";
  } = {}
) {
  const { decimals = 0, sizeType = "normal" } = opts;

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === "accurate" ? accurateSizes[i] ?? "Bytest" : sizes[i] ?? "Bytes"
  }`;
}

export const calculateMinDate = () => {
  const today = new Date();
  return new Date(today.getFullYear() - 16, today.getMonth(), today.getDate())
    .toISOString()
    .split("T")[0];
};
