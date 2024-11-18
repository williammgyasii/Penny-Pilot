import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import toastReducer from "@/redux/features/toastSlice";
import authReducer from "@/redux/features/userSlice";
// import { api } from "./services/api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
    // [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
