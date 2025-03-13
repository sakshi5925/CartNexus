import React, { useState } from 'react';
import { Rating, Stack } from '@mui/material';

export const ProductLayout = () => {
  const product = {
    id: 78,
    title: "Apple MacBook Pro 14 Inch - Space Grey",
    description:
      "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    category: "laptops",
    price: 1999.99,
    monthlyPrice: 333.33,
    discountPercentage: 9.25,
    rating: 3.1,
    reviews: 320,
    stock: 15,
    brand: "Apple",
    warrantyInformation: "1 Year Apple Warranty",
    shippingInformation: "Ships in 1 week",
    returnPolicy: "30 days free return",
    images: [
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png",
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  };

  const [selectedImage, setSelectedImage] = useState(product.thumbnail);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-row p-6 border rounded-lg shadow-xl bg-white">
      <section className="basis-1/2 flex flex-col items-center">
        <img src={selectedImage} alt="Product" className="w-full h-[35rem] object-cover rounded-lg" />
        <div className="flex mt-3 gap-3">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className={`w-16 h-16 object-cover cursor-pointer rounded border ${
                selectedImage === img ? "border-blue-600 border-2" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </section>

      <section className="basis-1/2 pl-6 pt-16">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>

        <div className="flex items-center mt-2">
          <Stack>
            <Rating name="half-rating-read" value={product.rating} precision={0.1} readOnly />
          </Stack>
          <span className="ml-2 text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="h-[0.7px] w-full bg-gray-400 my-3"></div>
        <div className="mt-4">
          <p className="text-xl font-semibold text-green-600">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500">
            or ${product.monthlyPrice}/month with 6-month special financing
          </p>
          <p className="text-red-500">Discount: {product.discountPercentage}% OFF</p>
        </div>

        <div className="h-[0.7px] w-full bg-gray-400 my-3"></div>

        <div className="mt-4 flex items-center">
          <button
            className="px-3 py-1 border rounded-l-lg bg-gray-200"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          >
            -
          </button>
          <span className="px-4 py-1 border-t border-b">{quantity}</span>
          <button
            className="px-3 py-1 border rounded-r-lg bg-gray-200"
            onClick={() => setQuantity(quantity < product.stock ? quantity + 1 : product.stock)}
          >
            +
          </button>
          <p className="ml-3 text-sm text-red-600 font-semibold">
            Only {product.stock} Left!
          </p>
        </div>

        {/* Buttons */}


        <div className="mt-5 flex gap-4">
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
            Buy Now
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

        <div className="h-[0.7px] w-full bg-gray-400 my-3"></div>
        {/* Shipping, Warranty, Return Policy */}
        <div className="mt-6 text-sm text-gray-700">
          <p>📦 Shipping: {product.shippingInformation}</p>
          <p>🛠 Warranty: {product.warrantyInformation}</p>
          <p>🔄 Return Policy: {product.returnPolicy}</p>
        </div>
      </section>
    </div>
  );
};
