"use client";

import { LOG_OUT_USER } from "@/redux/functions/authFunctions";
import { useAppDispatch, useAppSelector } from "@/redux/reduxhooks";
import { RootState } from "@/redux/store";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.auth.currentUser);
  console.log(user);

  const handleSignOut = () => {
    dispatch(LOG_OUT_USER());
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Welcome, {user?.email}</span>
              <button
                onClick={handleSignOut}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
            {/* Add your dashboard content here */}
            <h2 className="text-2xl font-bold text-center mt-8">
              Welcome to your Dashboard
            </h2>
            <p className="text-center mt-4">
              This is a protected page. Only authenticated users can see this
              content.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
