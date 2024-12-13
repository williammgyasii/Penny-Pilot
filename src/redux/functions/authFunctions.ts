import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { TYPE_REGISTER_SCHEMA } from "@/schema/registerSchema";
import { UserData } from "@/types/userTypes";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { getFirebaseErrorMessage } from "@/lib/utils";
import { TYPE_LOGIN_SCHEMA } from "@/schema/loginSchema";
import axios from "axios";
import {
  getClientAuth,
  getClientFirestore,
  getClientStorage,
} from "@/firebase/getFirebaseConfig";
import {
  ONBOARDING_SCHEMA,
  TYPE_ONBOARDING_SCHEMA,
} from "@/schema/onBoardingSchema";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { RootState } from "../store";

export const LOG_OUT_USER = createAsyncThunk("auth/signOut", async () => {
  await signOut(getClientAuth);
});

export const REGISTER_NEW_USER = createAsyncThunk<
  UserData,
  TYPE_REGISTER_SCHEMA,
  {
    rejectValue: string;
  }
>("auth/register", async (userData, { rejectWithValue }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      getClientAuth,
      userData.email,
      userData.password
    );

    const userDoc = {
      uid: user.uid,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      createdAt: new Date(),
      // ...userData,
    };

    await setDoc(doc(getClientFirestore, "users", user.uid), userDoc);
    const idToken = await user.getIdToken();
    if (idToken) {
      // await axios.post(CREATE_SESSION_COOKIE_CLOUD_FUNCTION_URL, { idToken });
      await axios.post("/api/auth/session", { idToken });
    }
    return userDoc;
  } catch (error) {
    if (error instanceof FirebaseError) {
      return rejectWithValue(getFirebaseErrorMessage(error.code));
    }
    return rejectWithValue("Registration failed");
  }
});

export const LOGIN_EXISTING_USER = createAsyncThunk<
  UserData,
  TYPE_LOGIN_SCHEMA,
  {
    rejectValue: string;
  }
>("auth/loginUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    // console.log(email, password);
    const userCredential = await signInWithEmailAndPassword(
      getClientAuth,
      email,
      password
    );
    const user = userCredential.user;

    // Fetch additional user details from Firestore
    const userDoc = await getDoc(doc(getClientFirestore, "users", user.uid));
    const userDetails = userDoc.data() as UserData;

    const idToken = await user.getIdToken();
    if (idToken) {
      const results = await axios.post("/api/auth/session", { idToken });
      // const results = await axios.post(
      //   CREATE_SESSION_COOKIE_CLOUD_FUNCTION_URL,
      //   { idToken }
      // );
      // console.log(results);
    }
    return { ...user, ...userDetails };
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.code);
      return rejectWithValue(getFirebaseErrorMessage(error.code));
    }
    return rejectWithValue("Login failed");
  }
});

export const ONBOARD_USER_DETAILS = createAsyncThunk<
  TYPE_ONBOARDING_SCHEMA, // **Expected Return Type**
  TYPE_ONBOARDING_SCHEMA, // **Input Type**
  { rejectValue: string }
>("auth/onboard", async (onboardData, { rejectWithValue, getState }) => {
  const validatedData = ONBOARDING_SCHEMA.parse(onboardData);
  const state = getState() as RootState;
  const userUid = state.auth.currentUser?.uid;
  console.log(userUid);

  if (!userUid) {
    return rejectWithValue("User is not authenticated");
  }

  try {
    let profileImageUrl = validatedData.profileImage; // Use validatedData instead of direct `onboardData`
    if (
      validatedData.profileImage &&
      validatedData.profileImage.startsWith("data:")
    ) {
      const storageRef = ref(
        getClientStorage,
        `images/${userUid}/${Date.now()}_profile.jpg`
      );
      const response = await fetch(validatedData.profileImage);
      const blob = await response.blob();
      await uploadBytes(storageRef, blob);
      profileImageUrl = await getDownloadURL(storageRef);
    }

    const userData = {
      ...validatedData,
      uid: userUid,
      profileImage: profileImageUrl,
      createdAt: new Date(),
    };

    // await setDoc(doc(getClientFirestore, "users", userUid), userData);

    return userData;
  } catch (error) {
    if (error instanceof FirebaseError) {
      return rejectWithValue(getFirebaseErrorMessage(error.code));
    }
    return rejectWithValue("Something went wrong with onboarding.");
  }
});
