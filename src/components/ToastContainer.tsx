"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { removeToast } from "@/redux/features/toastSlice";
import { useAppDispatch } from "@/redux/hooks";

export function ToastContainer() {
  const toasts = useSelector((state: RootState) => state.toast.toasts);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 ">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}

function Toast({
  id,
  message,
  type,
  duration = 5000,
}: {
  id: string;
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeToast(id));
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, dispatch]);

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />,
    info: <Info className="h-5 w-5 text-blue-500" />,
  };

  const styles = {
    success: "bg-green-700 border-green-200 text-white",
    error: "bg-red-50 border-red-200 text-red-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border p-4 shadow-lg transition-all",
        styles[type]
      )}
    >
      {icons[type]}
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={() => dispatch(removeToast(id))}
        className="ml-auto rounded-full p-1 hover:bg-black/5"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
