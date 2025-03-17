import React, { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition duration-300"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <input
            className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition duration-300"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <button
            className="bg-blue-600 text-white font-bold py-2 rounded-full hover:bg-blue-700 transition duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 text-sm text-center mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};
