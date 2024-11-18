// app/lib/store.ts
"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import toastReducer from "./features/toastSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      toast: toastReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["auth/setUser"],
          ignoredActionPaths: ["payload.user"],
          ignoredPaths: ["auth.user"],
        },
      }),
  });
};

// Infer types from store
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
