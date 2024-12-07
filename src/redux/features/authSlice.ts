"use client";
import { UserData } from "@/types/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  LOG_OUT_USER,
  LOGIN_EXISTING_USER,
  REGISTER_NEW_USER,
} from "../functions/authFunctions";

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
        fullName: `${action.payload?.firstName} ${action.payload?.lastName}`,
      };
      state.AUTH_SLICE_LOADING = false;
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
      //LOGOUT CASES
      .addCase(LOGIN_EXISTING_USER.pending, (state) => {
        state.AUTH_SLICE_STATE = "loading";
        state.AUTH_SLICE_LOADING = true;
        state.error = null;
      })
      .addCase(LOGIN_EXISTING_USER.fulfilled, (state, action) => {
        state.AUTH_SLICE_STATE = "loading";
        state.currentUser = action.payload;
      })
      .addCase(LOGIN_EXISTING_USER.rejected, (state, action) => {
        state.AUTH_SLICE_LOADING = false;
        state.error = action.payload as string;
      })
      //REGISTER CASES
      .addCase(REGISTER_NEW_USER.pending, (state) => {
        state.AUTH_SLICE_LOADING = true;
        state.error = null;
      })
      .addCase(REGISTER_NEW_USER.fulfilled, (state, action) => {
        state.AUTH_SLICE_LOADING = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(REGISTER_NEW_USER.rejected, (state, action) => {
        state.AUTH_SLICE_LOADING = false;
        state.error = action.payload as string;
      })
      //LOGOUT CASES
      .addCase(LOG_OUT_USER.pending, (state) => {
        state.AUTH_SLICE_STATE = "loading";
        state.error = null;
      })
      .addCase(LOG_OUT_USER.fulfilled, (state) => {
        state.currentUser = null;
        state.AUTH_SLICE_STATE = "completed";
      })
      .addCase(LOG_OUT_USER.rejected, (state, action) => {
        state.AUTH_SLICE_STATE = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { setUser, clearUser, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
