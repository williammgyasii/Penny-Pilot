import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { TYPE_REGISTER_SCHEMA } from "@/schema/registerSchema";
import { UserData } from "@/types/userTypes";
import { doc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { getFirebaseErrorMessage } from "@/lib/utils";
import { getFirebaseAuth, getFirebaseFirestore } from "@/firebase/getFirebaseConfig";

export const LOGOUT_USER = createAsyncThunk<void, void>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(getFirebaseAuth);
    } catch (error) {
      if (error instanceof FirebaseError) {
        return rejectWithValue(error.message);
      }
    }
  }
);

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
