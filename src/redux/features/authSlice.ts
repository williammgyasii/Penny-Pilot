"use client";
import { doc, setDoc } from "firebase/firestore";
import { UserData } from "@/types/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOGOUT_USER, registerUser } from "../asyncfunctions/authFunctions";

interface AuthState {
  currentUser: UserData | null;
  AUTH_SLICE_LOADING: boolean;
  error: string | null;
  AUTH_SLICE_STATE: "idle" | "loading" | "completed" | "failed";
}

const initialState: AuthState = {
  currentUser: null,
  AUTH_SLICE_LOADING: false,
  error: null,
  AUTH_SLICE_STATE: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = {
        ...action.payload,
        fullName: `${action.payload.firstName} ${action.payload.lastName}`,
      };
    },
    clearUser: (state) => {
      state.currentUser = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.AUTH_SLICE_LOADING = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
      state.AUTH_SLICE_LOADING = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.AUTH_SLICE_LOADING = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.AUTH_SLICE_LOADING = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.AUTH_SLICE_LOADING = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(LOGOUT_USER.pending, (state) => {
        state.AUTH_SLICE_STATE = "loading";
        state.error = null;
      })
      .addCase(LOGOUT_USER.fulfilled, (state) => {
        state.currentUser = null;
        state.AUTH_SLICE_STATE = "completed";
      })
      .addCase(LOGOUT_USER.rejected, (state, action) => {
        state.AUTH_SLICE_STATE = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { setUser, clearUser, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
