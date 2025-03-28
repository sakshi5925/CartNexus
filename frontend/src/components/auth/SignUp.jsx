import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password
        }) // Convert body to JSON string
      });

      const responseData = await response.json(); // Avoid redeclaring 'data'

      if (!response.ok) {
        throw new Error(responseData.error || 'Signup failed');
      }

      alert('Signup successful!');
      navigate('/login');
    } catch (error) {
      console.log("Error: ", error);
      alert('Failed to Register');
    }
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
            value={data.username}
            onChange={(e) => setData((prev) => ({ ...prev, username: e.target.value }))}
            required
            autoComplete="name"
          />
          <input 
            className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition duration-300"
            type="email"
            placeholder="Enter your Email"
            value={data.email}
            onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
            required
            autoComplete="username"
          />
          <input 
            className="p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition duration-300"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData((prev) => ({ ...prev, password: e.target.value }))}
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
