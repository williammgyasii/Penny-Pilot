"use client";
import { LOG_OUT_USER } from "@/redux/functions/authFunctions";
import { useAppDispatch, useAppSelector } from "@/redux/reduxhooks";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

export function Dashboard() {
  const user = useAppSelector((state: RootState) => state.auth.currentUser);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await dispatch(LOG_OUT_USER()).unwrap();
      router.push("/");
    } catch (err) {
      console.error("Failed to sign out:", err);
    }
  };

  if (!user) return null;

  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <p>Email: {user.email}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
