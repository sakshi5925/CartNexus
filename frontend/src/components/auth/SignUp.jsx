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
    <div className='bg-slate-400 h-[500px] w-96 rounded-3xl'>
      <h2 className='p-6 text-3xl font-bold'>Create Your Account</h2>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col text-black gap-6 p-7'>
          <input 
            className='p-2 border-2 text-black w-60 rounded-xl' 
            type="text" 
            placeholder='Enter your Full Name' 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            required
            autoComplete="name"
          />
          <input 
            className='p-2 border-2 text-black w-60 rounded-xl' 
            type="email" 
            placeholder='Enter your Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            autoComplete="username"
          />
         <input 
            className='p-2 border-2 text-black w-60 rounded-xl' 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            autoComplete="new-password"
          />
          <button className='text-sm font-bold bg-blue-600 w-20 p-2 rounded-full' type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};