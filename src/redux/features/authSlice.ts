"use client";
import {
  getFirebaseAuth,
  getFirebaseFirestore,
} from "@/lib/firebase/getFirebaseConfig";
import { getFirebaseErrorMessage } from "@/lib/utils";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  uid?: string;
}

interface AuthState {
  user: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: UserData, { rejectWithValue }) => {
    try {
      // console.log(userData);
      const { user } = await createUserWithEmailAndPassword(
        getFirebaseAuth,
        userData.email,
        userData.password
      );

      await updateProfile(user, {
        displayName: `${userData.firstName} ${userData.lastName}`,
      });

      const userDoc: Omit<UserData, "password"> = {
        uid: user.uid,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      };

      await setDoc(doc(getFirebaseFirestore, "users", user.uid), userDoc);

      return userDoc;
    } catch (error) {
      if (error instanceof FirebaseError) {
        getFirebaseErrorMessage(error.code);
      }
      return rejectWithValue("an unknown error occurred");
    }
  }
);

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.user = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
