"use client";
import {
  getFirebaseAuth,
  getFirebaseFirestore,
} from "@/lib/firebase/getFirebaseConfig";
import { getFirebaseErrorMessage } from "@/lib/utils";
import { TYPE_REGISTER_SCHEMA } from "@/schema/registerSchema";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { LOGOUT_USER, registerUser } from "../functions/authFunctions";
import { UserData } from "@/types/userTypes";

interface AuthState {
  user: UserData | null;
  AUTH_SLICE_LOADING: boolean;
  error: string | null;
  AUTH_SLICE_STATE: "idle" | "loading" | "completed" | "failed";
}

const initialState: AuthState = {
  user: null,
  AUTH_SLICE_LOADING: false,
  error: null,
  AUTH_SLICE_STATE: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.AUTH_SLICE_LOADING = action.payload;
    },
    logout: (state) => {
      state.user = null;
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
        state.user = action.payload;
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
        state.user = null;
        state.AUTH_SLICE_STATE = "completed";
      })
      .addCase(LOGOUT_USER.rejected, (state, action) => {
        state.AUTH_SLICE_STATE = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { setUser, clearUser, logout,setLoading } = authSlice.actions;
export default authSlice.reducer;
