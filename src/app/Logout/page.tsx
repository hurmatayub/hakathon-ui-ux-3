"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // For Next.js 13+ App Router

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear authentication data (localStorage or sessionStorage)
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    // Redirect user to login page
    router.push("/login");
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-sm w-full text-center">
        <h1 className="text-3xl font-semibold text-red-500 mb-6">Logged Out</h1>
        <p className="text-lg text-gray-600 mb-4">
          You have been successfully logged out.
        </p>
        <button
          onClick={() => router.push("/login")}
          className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition-all"
        >
          Go to Login Page
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
