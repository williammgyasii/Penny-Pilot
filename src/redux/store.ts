"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import toastReducer from "./features/toastSlice";
import systemReducer from "./features/systemSlice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { persistStore, persistReducer } from "redux-persist";

// Fallback storage for server-side rendering
const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: unknown) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "system"], // Reducers to persist
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  toast: toastReducer,
  system: systemReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Infer types from store
export const persistor = persistStore(makeStore);

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
