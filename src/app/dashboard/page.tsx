"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "@/lib/redux/services/authApi";
import { Button } from "@/components/ui/button";
import { addToast } from "@/lib/redux/features/toastSlice";

export default function DashboardPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(
        addToast({
          message: "Logged out successfully",
          type: "success",
        })
      );
      router.push("/login");
    } catch (error: any) {
      dispatch(
        addToast({
          message: error.message || "Logout failed",
          type: "error",
        })
      );
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <div className="grid gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Welcome to your Dashboard!
            </h2>
            <p className="text-muted-foreground">
              This is a protected route. You can only see this page if you are
              not authenticated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
