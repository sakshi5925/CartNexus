import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <div className='flex justify-between p-8  bg-slate-200 '>
      <div>
        <h2 className='text-2xl font-bold '>Explore</h2>
        <ul className='list-none mt-10 font-semibold '>
            <li>Search</li>
            <li>About Us</li>
        </ul>
      </div>
      <div>
        <h2 className='text-2xl font-bold '>About</h2>
        <ul className='list-none mt-10 font-semibold '>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Terms</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h2 className='text-2xl font-bold'>Connect</h2>
        <ul className='list-none flex gap-x-6 mt-10  '>
            <li><RiFacebookFill /></li>
            <li><FaTwitter /></li>
            <li><FaLinkedinIn /></li>
            <li><FaYoutube /></li>
        </ul>
      </div>
      
    </div>


    </>
  )
}

export default Footer