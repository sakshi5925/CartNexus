import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

export const Navbar = () => {
  return (
    <div className="flex items-center p-4 gap-5 bg-slate-200 shadow-md">
      <div className="font-bold text-lg">LOGO </div>
      <div>Cart<strong>Nexus</strong></div>

      <div>
        <ul className="list-none flex gap-4">
          <li>
            <Popover>
              <PopoverTrigger className="cursor-pointer">Category</PopoverTrigger>
              <PopoverContent className="bg-white p-2 shadow-lg rounded-md">
                <p className="hover:bg-gray-200 p-1">Beauty</p>
                <p className="hover:bg-gray-200 p-1">Furniture</p>
                <p className="hover:bg-gray-200 p-1">Electronics</p>
                <p className="hover:bg-gray-200 p-1">Dress</p>
              </PopoverContent>
            </Popover>
          </li>
          <li>Deals</li>
          <li>What's New</li>
          <li>Delivery</li>
        </ul>
      </div>
    </div>
  );
};