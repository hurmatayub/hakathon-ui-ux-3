// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation"; 
// import router from "next/router";

// const Logout = () => {
//   const router = useRouter();

//   // useEffect(() => {

//   //   localStorage.removeItem("authToken");
//   //   sessionStorage.removeItem("authToken");

//   //   // Redirect user to login page
//   //   router.push("/sign-in");
//   // }, [router]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
//       <div className="bg-white p-10 rounded-lg shadow-xl max-w-sm w-full text-center">
//         <h1 className="text-3xl font-semibold text-red-500 mb-6">Logged Out</h1>
//         <p className="text-lg text-gray-600 mb-4">
//           You have been successfully logged out.
//         </p>
//         {/* <button
//           onClick={() => router.push("/sign-in")}
//           className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition-all"
//         >
//           Go to Login Page
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default Logout;


"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Remove authentication tokens
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    // Redirect user to login page
    router.push("/sign-in");
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-sm w-full text-center">
        <h1 className="text-3xl font-semibold text-red-500 mb-6">Logging Out...</h1>
        <p className="text-lg text-gray-600 mb-4">
          Redirecting you to the login page...
        </p>
      </div>
    </div>
  );
};

export default Logout;
