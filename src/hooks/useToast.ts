"use client";

import { addToast, Toast } from "@/redux/features/toastSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export function useToast() {
  const dispatch = useDispatch();

  const toast = useCallback(
    (props: Omit<Toast, "id">) => {
      dispatch(addToast(props));
    },
    [dispatch]
  );

  return { toast };
}
