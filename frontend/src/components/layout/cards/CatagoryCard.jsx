import React from 'react'

export const CatagoryCard = () => {
  return (
    <div className="h-72 w-56 bg-slate-200 rounded-xl bg-cover bg-[url('/images/img2.png')] flex flex-col justify-between items-center transition-transform duration-300  hover:scale-110">
        <h2 className='text-center mt-3 text-xl font-bold text-white'>Furniture</h2>
        <button className='font-semibold text-sm bg-black p-2 w-20 rounded-3xl text-white mb-3 '>Explore</button>
       
    </div>
  )
}
