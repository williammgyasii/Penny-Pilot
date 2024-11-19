import { Button } from "@/components/ui/button";
import React from "react";


const handleLogout = async () => {

  

  console.log(user);
  try {
    await dispatch(LOGOUT_USER());
    dispatch(
      addToast({
        message: "Logged out successfully",
        type: "success",
      })
    );
    router.push("/login");
  } catch (error) {
    dispatch(
      addToast({
        message: (error as string) || "Logout failed",
        type: "error",
      })
    );
  }
};

const DashboardOverview = () => {
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
              authenticated.
            </p>
            <Link href={"/dashboard/profile"}>To Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
