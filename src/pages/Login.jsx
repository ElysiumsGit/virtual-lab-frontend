import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  const signIn = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <div className="flex flex-col items-center mb-6">
          <div className="text-3xl text-indigo-500 mb-1">🎓</div>
          <h1 className="text-xl font-bold">VIRTUAL LAB SIMULATOR</h1>
          <p className="text-sm text-gray-600 mt-1">Sign in your account</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-600"
                onClick={togglePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-500" />
              Remember
            </label>
            <a href="#" className="text-indigo-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            onClick={signIn}
            className="w-full background-primary-color hover:opacity-95 cursor-pointer text-white py-2 rounded-md font-semibold"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-indigo-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
