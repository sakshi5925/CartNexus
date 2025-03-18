import React, { useState } from 'react';

export const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email, password);
  };

  return (
    <div className="flewx items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-600">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input 
            className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition duration-300"
            type="text"
            placeholder="Enter your Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            autoComplete="name"
          />
          <input 
            className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition duration-300"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
          <input 
            className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition duration-300"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          <button 
            className="bg-green-600 text-white font-bold py-2 rounded-full hover:bg-green-700 transition duration-300"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="#" className="text-green-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};
