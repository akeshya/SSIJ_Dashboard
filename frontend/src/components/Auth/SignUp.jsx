import React, { useState } from "react"; // Import React and useState hook
import { HiEyeOff, HiEye } from "react-icons/hi"; // Import icons for password visibility toggle

const SignUp = () => {
  // Define state variables for user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
  const [error, setError] = useState(""); // Error message state

  // Function to handle sign-up form submission
  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (password.length < 8) {
      setError("Password must be at least 8 characters long."); //we set error if password is too short
      return;
    }
    setError(""); // Clear error message if password is valid
    // console.log("Name:", name, "Email:", email, "Password:", password); // Log user input (for testing)
    setName("");
    setEmail("");
    setPassword(""); // Clear input fields after submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Centering the form container */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border-2 border-[#CC7B25FF]">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp}>
          {/* Name Input Field */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* Email Input Field */}
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
          {/* Password Input Field with Visibility Toggle */}
          <div className="mb-4 relative">
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter at least 8+ characters"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <HiEye /> : <HiEyeOff />}{" "}
              {/* Toggle password visibility */}
            </button>
          </div>
          {/* Error Message Display */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="mb-3 w-full bg-[#CC7B25FF] text-white py-2 rounded-lg hover:bg-[#f5c688] transition"
          >
            Sign Up
          </button>
          {/* Already have an account? */}
          <p className="text-sm text-center ">
            Already have an account?
            <a href="/signin" className="text-[#CC7B25] hover:underline ">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp; // Export the SignUp component
