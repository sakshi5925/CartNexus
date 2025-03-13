import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";



export const Navbar = () => {
  return (
    <ul className="flex items-center p-4 gap-7 bg-slate-200 shadow-md justify-between">
      <ul className='flex items-center gap-2'>
      <li className="font-bold text-lg">LOGO </li>
      <li>Cart<strong>Nexus</strong></li>
      </ul>
      <li className='flex gap-7'>
        <Popover>
          <PopoverTrigger className="cursor-pointer">Category</PopoverTrigger>
          <PopoverContent className="bg-white p-2 shadow-lg rounded-md">
            <p className="hover:bg-gray-200 p-1">Beauty</p>
            <p className="hover:bg-gray-200 p-1">Furniture</p>
            <p className="hover:bg-gray-200 p-1">Electronics</p>
            <p className="hover:bg-gray-200 p-1">Dress</p>
          </PopoverContent>
        </Popover>
        <ul className='flex gap-5'>
          <li>Deals</li>
          <li>What's New</li>
          <li>Delivery</li>
        </ul>
      </li>
      <li>
        <input type="text" placeholder='search product' className="rounded-xl p-1"/>
      </li>
      <ul className='flex gap-3'>
      <li className='flex gap-2'>
        Account
        <CgProfile className='mt-1' />
      </li>
      <li className='flex gap-2'>
        Cart
        <IoCartOutline className='mt-1'/>
      </li>
      </ul>
    </ul>
  );
};