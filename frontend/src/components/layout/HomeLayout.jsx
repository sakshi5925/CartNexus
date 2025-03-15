import React from 'react'
import { CatagoryCard } from './cards/CatagoryCard'

export const HeroSection = () => {
  return (
    <div className='h-[600px] relative'>
    <img className="h-full w-full" src="/images/img0.png" alt="" />
    <div className="absolute top-[50%] translate-y-[-50%] left-[25%] translate-x-[-50%]">
      <h1 className="text-8xl ">The Westmire<br /><b>A56 Headset</b></h1>
      <div className="flex gap-10 mt-7 justify-center">
        <button className='bg-blue-50 p-3 rounded-full font-bold w-36'>Buy Now</button>
        <button className='font-bold w-36 rounded-full border-2'>Shop All</button>
      </div>
    </div>

  </div>
  )
}

const array = [2,3,4,5,6,7]
export const ProductCatagory = () => {
    return (
        <div className=' p-16'>
        
        <h1 className='mt-2 font-bold text-2xl'>
            Shop Our Top Categories
        </h1>
      
                    <CatagoryCard />
               
            </div>
    )
}

