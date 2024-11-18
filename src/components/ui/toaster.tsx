"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { removeToast } from "@/redux/features/toastSlice";

export function Toaster() {
  const dispatch = useDispatch();
  const toasts = useSelector((state: RootState) => state.toast.toasts);

  useEffect(() => {
    toasts.forEach((toast) => {
      if (toast.duration) {
        const timer = setTimeout(() => {
          dispatch(removeToast(toast.id));
        }, toast.duration);

        return () => clearTimeout(timer);
      }
    });
  }, [toasts, dispatch]);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className={cn(
              "pointer-events-auto flex w-full max-w-md items-center gap-4 rounded-lg p-4 shadow-lg",
              toast.variant === "destructive"
                ? "bg-destructive text-destructive-foreground"
                : toast.variant === "success"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-900"
            )}
          >
            <div className="flex-1">
              {toast.title && (
                <div className="font-semibold">{toast.title}</div>
              )}
              {toast.description && (
                <div className="text-sm">{toast.description}</div>
              )}
            </div>
            <button
              onClick={() => dispatch(removeToast(toast.id))}
              className={cn(
                "rounded-md p-1 opacity-70 transition-opacity hover:opacity-100",
                toast.variant === "destructive"
                  ? "hover:bg-destructive/10"
                  : "hover:bg-gray-100"
              )}
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
