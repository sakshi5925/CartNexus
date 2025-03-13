import React from 'react'

export const Login = () => {
  return (
    <div className='bg-slate-400 h-[500px] w-96 rounded-3xl'>
    <h2 className='p-6 text-3xl font-bold'>Login</h2>
    <div className=''>
        <form action="" className='flex flex-col text-black  gap-6 p-7'>
       
        <input className='p-2 border-2 text-black w-60 rounded-xl ' type="email" placeholder='Email'/>
        <input className='p-2 border-2 text-black w-60 rounded-xl ' type="password" placeholder='Password'/>
        <button className='text-sm font-bold bg-blue-600 w-20 p-2 rounded-full '>Login</button>
        
        </form>
    </div>
 
</div>
  )
}
