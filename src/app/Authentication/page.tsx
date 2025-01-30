"use client"
import { useState } from "react";
import { FaCar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-6"
      >
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center items-center gap-2 text-blue-600 text-2xl font-bold">
              <FaCar /> Car Rental
            </div>
            <h2 className="text-xl font-semibold mt-4 mb-6">
              {isSignUp ? "Create an Account" : "Sign In"}
            </h2>
            <form className="space-y-4">
              {isSignUp && <Input type="text" placeholder="Full Name" required />}
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </form>
            <div className="flex flex-col items-center mt-4 space-y-2">
              <p className="text-sm">Or continue with</p>
              <div className="flex gap-4">
                <Button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200">
                  <FcGoogle /> Google
                </Button>
                <Button className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700">
                  <FaFacebook /> Facebook
                </Button>
              </div>
            </div>
            <p className="text-sm mt-4">
              {isSignUp ? "Already have an account?" : "Don't have an account?"} 
              <span 
                className="text-blue-600 cursor-pointer" 
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? " Sign in" : " Sign up"}
              </span>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}