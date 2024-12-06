import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { TYPE_REGISTER_SCHEMA } from "@/schema/registerSchema";
import { UserData } from "@/types/userTypes";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { getFirebaseErrorMessage } from "@/lib/utils";
import {
  getFirebaseAuth,
  getFirebaseFirestore,
} from "@/firebase/getFirebaseConfig";
import { TYPE_LOGIN_SCHEMA } from "@/schema/loginSchema";

export const SignOutCurrentUser = createAsyncThunk("auth/signOut", async () => {
  await signOut(getFirebaseAuth);
});

export const registerNewUser = createAsyncThunk<
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

export const loginUser = createAsyncThunk<
  UserData,
  TYPE_LOGIN_SCHEMA,
  {
    rejectValue: string;
  }
>("auth/loginUser", async (loginData, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      getFirebaseAuth,
      loginData.email as string,
      loginData.password as string
    );
    const user = userCredential.user;
    // Fetch additional user details from Firestore
    const userDoc = await getDoc(doc(getFirebaseFirestore, "users", user.uid));
    const userDetails = userDoc.data() as UserData;
    return { ...user, ...userDetails };
  } catch (error) {
    if (error instanceof FirebaseError) {
      return rejectWithValue(getFirebaseErrorMessage(error.code));
    }
    return rejectWithValue("Registration failed");
  }
});
