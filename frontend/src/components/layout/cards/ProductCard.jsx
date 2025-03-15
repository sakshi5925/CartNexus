import React from 'react';
import { Rating, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/productInfo');
    }
    return (
        <div className="w-[16rem] rounded-lg border border-gray-300 m-3 shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white">
            <div className="relative">
                <img 
                    src={product.thumbnail} 
                    alt={product.title} 
                    className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {product.discountPercentage}% OFF
                </span>
            </div>

            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 text-center truncate">
                    {product.title.length > 14 ? product.title.slice(0, 14) + '...' : product.title}
                </h2>

                <div className="text-gray-500 flex justify-center items-center gap-2 my-3">
                    <p className="text-black font-bold text-2xl">
                        ${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}
                    </p>
                    <span className="text-gray-400 line-through text-sm">
                        ${product.price}
                    </span>
                </div>

                <div className="flex items-center justify-center">
                    <Stack>
                        <Rating name="half-rating-read" value={product.rating} precision={0.1} readOnly />
                    </Stack>
                    <span className="ml-2 text-gray-600 text-sm">{product.rating}</span>
                </div>

                <button className="mt-6 block w-full py-2 text-white font-medium rounded-full bg-black transition-all duration-300 hover:bg-gray-800"
                    onClick={handleButtonClick}
                >
                    Explore
                </button>
            </div>
        </div>
    );
};
