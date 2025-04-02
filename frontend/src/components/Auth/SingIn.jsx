import React, { useState } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { Link } from "react-router-dom";

export const SignIn = () => {
  // State variables to manage user input and visibility
  const [email, setEmail] = useState(""); // Stores the email input
  const [password, setPassword] = useState(""); // Stores the password input
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggles the visibility of the password

  // Function/method to handle the form submission
  const handleSignInClick = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setEmail(""); // Clears the email input after submission
    setPassword(""); // Clears the password input after submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* The container for the sign-in form, centered on the screen */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border-2 border-[#CC7B25FF]">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Sign in
        </h2>
        <form onSubmit={handleSignInClick}>
          {/* Email input field */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Updates the email state when the user types
              required
            />
          </div>
          {/* Password input field with visibility toggle */}
          <div className="mb-4 relative">
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              type={passwordVisible ? "text" : "password"} // Toggles between text and password input based on the visibility state
              placeholder="Enter at least 8+ characters"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Updates the password state when the user types
              minLength={8} // Password must be at least 8 characters
              required
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500"
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggles the password visibility when clicked
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              {passwordVisible ? <HiEye /> : <HiEyeOff />}{" "}
              {/* Displays the correct icon based on visibility */}
            </button>
            {/* Error message for password length validation */}
            {password.length > 0 && password.length < 8 && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 8 characters long.
              </p>
            )}
          </div>

          {/* Remember me checkbox and Forgot password link */}
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
          {/* Sign in button */}
          <button
            type="submit"
            className="w-full bg-[#CC7B25FF] text-white py-2 rounded-lg hover:bg-[#f5c688] transition"
          >
            Sign in
          </button>
        </form>
        {/* Link to the sign-up page for users like need to create an account */}
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
