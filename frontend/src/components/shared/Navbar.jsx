import React, { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3000/product/catagory");
          if (!response.ok) {
            throw new Error("Failed to fetch categories");
          }
          const data = await response.json();
          setCategories(data);
          console.log("Fetched Categories:", data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
      fetchData();
    }, []);
  const navigate = useNavigate();

  // Function to navigate to selected category
  const handleButtonClick = (category) => {
    navigate(`/shopping/${category.toLowerCase()}`);
  };

  return (
    <nav className="top-0 left-0 w-full bg-white shadow-md px-8 py-3 flex items-center justify-between z-50">
      <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
        <span className="text-indigo-600">LOGO</span>
        <span className="text-gray-700">Cart<strong className="text-indigo-600">Nexus</strong></span>
      </div>

      <div className="flex items-center gap-7">
        <Popover>
          <PopoverTrigger className="cursor-pointer text-gray-700 font-medium hover:text-indigo-600 transition relative after:block after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">
            Category
          </PopoverTrigger>
          <PopoverContent className="bg-white p-2 shadow-lg rounded-md w-[50rem] flex flex-wrap">
          {categories.map((category, index) => (
       <button  key={index} onClick={()=>handleButtonClick(category.name)}  className="hover:bg-indigo-100 p-2 rounded-md cursor-pointer border-2 m-2">{category.name}</button>
      ))}
          </PopoverContent>
        </Popover>

        <ul className="flex gap-5 text-gray-700 font-medium">
          <NavLink to="/" className="relative after:block after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full hover:text-indigo-600 transition">
            Deals
          </NavLink>
          <NavLink to='/shopping/all' className="relative after:block after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full hover:text-indigo-600 transition">
            Shopping
          </NavLink>
          <NavLink to="/delivery" className="relative after:block after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full hover:text-indigo-600 transition">
            Delivery
          </NavLink>
        </ul>
      </div>

      <div>
        <input 
          type="text" 
          placeholder="Search product..." 
          className="rounded-full px-4 py-2 w-60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm"
        />
      </div>

      <div className="flex gap-6 items-center text-gray-700 font-medium">
        <div className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 transition">
          <CgProfile className="text-2xl" />
          <span>Account</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 transition">
          <IoCartOutline className="text-2xl" />
          <NavLink to='/cart'>Cart</NavLink>
        </div>
      </div>
    </nav>
  );
};
