import React, { useState } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { Link } from "react-router-dom"; // If using React Router

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignInClick = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border-2 border-[#CC7B25FF]">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Sign in
        </h2>
        <form onSubmit={handleSignInClick}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter at least 8+ characters"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8} // Ensures at least 8 characters
              required
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500"
              onClick={() => setPasswordVisible(!passwordVisible)}
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              {passwordVisible ? <HiEye /> : <HiEyeOff />}
            </button>
            {password.length > 0 && password.length < 8 && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 8 characters long.
              </p>
            )}
          </div>

          <div className="flex justify-between items-center text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" required /> Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-[#CC7B25] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-[#CC7B25FF] text-white py-2 rounded-lg hover:bg-[#f5c688] transition"
          >
            Sign in
          </button>
        </form>
        {/* there you have already account you can sign up */}
        <div className="text-sm text-center mt-4">
          Need an account?
          <Link to="/signup" className="text-[#CC7B25] hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
