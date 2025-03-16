import React, { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/product/catagory");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  // Function to navigate to selected category
  const handleCategoryClick = (category) => {
    navigate(`/shopping/${category.toLowerCase()}`);
    setSearchTerm(""); // Clear search after selection
  };

  // Filter categories based on search input
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="relative top-0 left-0 w-full bg-white shadow-md px-8 py-3 flex items-center justify-between z-50">
      <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
        <span className="text-indigo-600">LOGO</span>
        <span className="text-gray-700">
          Cart<strong className="text-indigo-600">Nexus</strong>
        </span>
      </div>

      <div className="flex items-center gap-7">
        <Popover>
          <PopoverTrigger className="cursor-pointer text-gray-700 font-medium hover:text-indigo-600 transition relative after:block after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">
            Category
          </PopoverTrigger>
          <PopoverContent className="bg-white p-2 shadow-lg rounded-md w-[50rem] flex flex-wrap">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className="flex flex-col items-center p-2 rounded-md cursor-pointer border-2 m-2 hover:bg-indigo-100"
              >
                {category.name}
              </button>
            ))}
          </PopoverContent>
        </Popover>

        <ul className="flex gap-5 text-gray-700 font-medium">
          <NavLink
            to="/"
            className="relative after:block after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full hover:text-indigo-600 transition"
          >
            Deals
          </NavLink>
          <NavLink
            to="/shopping/all"
            className="relative after:block after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full hover:text-indigo-600 transition"
          >
            Shopping
          </NavLink>
          <NavLink
            to="/delivery"
            className="relative after:block after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full hover:text-indigo-600 transition"
          >
            Delivery
          </NavLink>
        </ul>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-full px-4 py-2 w-60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm"
        />
        
        {/* Search results dropdown */}
        {searchTerm && filteredCategories.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
            {filteredCategories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className="flex items-center gap-3 p-2 hover:bg-indigo-100 cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-10 h-10 object-cover rounded-md"
                />
                <span className="text-gray-800">{category.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-6 items-center text-gray-700 font-medium">
        <div className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 transition">
          <CgProfile className="text-2xl" />
          <span>Account</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 transition">
          <IoCartOutline className="text-2xl" />
          <NavLink to="/cart">Cart</NavLink>
        </div>
      </div>
    </nav>
  );
};
