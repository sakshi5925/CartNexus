import React, { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className='bg-slate-400 h-[500px] w-96 rounded-3xl'>
      <h2 className='p-6 text-3xl font-bold'>Login</h2>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col text-black gap-6 p-7'>
          <input 
            className='p-2 border-2 text-black w-60 rounded-xl' 
            type="email" 
            placeholder='Enter your Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            autoComplete="email"
          />
          <input 
            className='p-2 border-2 text-black w-60 rounded-xl' 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            autoComplete="current-password"
          />
          <button className='text-sm font-bold bg-blue-600 w-20 p-2 rounded-full' type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};