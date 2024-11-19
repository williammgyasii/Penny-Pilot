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

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthState {
  user: UserData | null;
  AUTH_SLICE_LOADING: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  AUTH_SLICE_LOADING: false,
  error: null,
};

// export const registerUser = createAsyncThunk<
//   UserData,
//   TYPE_REGISTER_SCHEMA,
//   {
//     rejectValue: string;
//   }
// >("auth/register",({data},{rejectWithValue})) => {
//   try {
//     console.log("accr");
//     // console.log(Credentials);
//     // const { user } = await createUserWithEmailAndPassword(
//     //   getFirebaseAuth,
//     //   userData.email,
//     //   userData.password
//     // );
//     // await updateProfile(user, {
//     //   displayName: `${userData.firstName} ${userData.lastName}`,
//     // });
//     // const userDoc = {
//     //   uid: user.uid,
//     //   firstName: userData.firstName,
//     //   lastName: userData.lastName,
//     //   email: userData.email,
//     // };
//     // await setDoc(doc(getFirebaseFirestore, "users", user.uid), userDoc);
//     // return userDoc;
//   } catch (error) {
//     if (error instanceof FirebaseError) {
//       rejectWithValue(getFirebaseErrorMessage(error.code);)
//     }
//     return rejectWithValue("an unknown error occurred");
//   }

// });

export const registerUser = createAsyncThunk<
  UserData,
  TYPE_REGISTER_SCHEMA,
  {
    rejectValue: string;
  }
>("auth/register", async (userData, { rejectWithValue }) => {
  try {
    // console.log(Cred/entials);
    const { user } = await createUserWithEmailAndPassword(
      getFirebaseAuth,
      userData.email,
      userData.password
    );
    await updateProfile(user, {
      displayName: `${userData.firstName} ${userData.lastName}`,
    });

    const userDoc = {
      uid: user.uid,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      createdAt: new Date(),
      updatedAt: new Date(),
      // ...userData,
    };
    await setDoc(doc(getFirebaseFirestore, "users", user.uid), userDoc);
    return userDoc;
  } catch (error) {
    if (error instanceof FirebaseError) {
      return rejectWithValue(getFirebaseErrorMessage(error.code));
    }
    return rejectWithValue("Registration failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState["user"]>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
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
  },
});

export const { setUser, clearUser, logout } = authSlice.actions;
export default authSlice.reducer;
