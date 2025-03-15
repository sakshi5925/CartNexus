import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CatagoryCard = () => {
  const [categories, setCategories] = useState([]);
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
        console.log("Fetched Categories:", data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  // Navigate to shopping page with category
  const handleButtonClick = (categoryName) => {
    navigate(`/shopping/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-6 p-5">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-72 w-56 rounded-xl overflow-hidden shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${category.image || "https://via.placeholder.com/150"})` }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          {/* Category Name */}
          <h2 className="absolute bottom-16 left-0 right-0 text-center text-xl font-bold text-white">
            {category.name}
          </h2>

          {/* Explore Button */}
          <button 
            onClick={() => handleButtonClick(category.name)}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Explore
          </button>
        </div>
      ))}x
    </div>
  );
};
