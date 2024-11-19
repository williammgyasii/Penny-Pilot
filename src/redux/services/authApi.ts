import {
  getFirebaseAuth,
  getFirebaseFirestore,
} from "@/lib/firebase/getFirebaseConfig";
import { TYPE_REGISTER_SCHEMA } from "@/schema/registerSchema";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    register: builder.mutation<void, TYPE_REGISTER_SCHEMA>({
      async queryFn(data) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            getFirebaseAuth,
            data.email,
            data.password
          );

          await setDoc(
            doc(getFirebaseFirestore, "users", userCredential.user.uid),
            {
              uid: userCredential.user.uid,
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              // phone: data.phone,
              // address: data.address,
              createdAt: new Date().toISOString(),
            }
          );

          return { data: undefined };
        } catch (error: any) {
          return { error: error.message };
        }
      },
    }),
    logout: builder.mutation<void, void>({
      async queryFn() {
        try {
          await signOut(getFirebaseAuth);
          return { data: undefined };
        } catch (error: any) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLogoutMutation } = authApi;
