import React, { useEffect, useState } from 'react';
import { Rating, Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const ProductLayout = () => {
  const location = useLocation();
  const product = location.state?.product || {};  // Ensure product is not undefined
  const [selectedImage, setSelectedImage] = useState(product.thumbnail || "");
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState({
    id: "",
    images: [],
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    warrantyInformation: "",
    shippingInformation: "",
    returnPolicy: "",
    productCount: 1,
    stock: 0,
  });

  // Debugging logs
  console.log("Product from location.state:", location.state?.product);

  useEffect(() => {
    console.log("useEffect running...");
    if (product && Object.keys(product).length > 0) {
      console.log("Product exists:", product);
      setData((prevData) => ({
        ...prevData,
        id: product.id,
        images: product.images,
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        warrantyInformation: product.warrantyInformation,
        shippingInformation: product.shippingInformation,
        returnPolicy: product.returnPolicy,
        productCount: 1,
        stock: product.stock,
      }));
    } else {
      console.log("Product is undefined or empty!");
    }
  }, [product]);

  // Check if data updates
  useEffect(() => {
    console.log("Data state updated:", data);
  }, [data]);

  if (!product || Object.keys(product).length === 0) {
    return <p className="text-red-600 text-center">Product not found!</p>;
  }

  const handleCartButton = () => {
    console.log("Added to cart:", product.title, "Quantity:", quantity);
  };

  return (
    <>
      <div className="flex flex-row p-6 bg-white m-4">
        {/* Left Section - Product Images */}
        <section className="basis-1/2 flex flex-col items-center">
          <img src={selectedImage} alt="Product" className="w-full h-[35rem] object-cover rounded-lg" />
          <div className="flex mt-3 gap-3">
            {product.images?.map((img, index) => (
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

        {/* Right Section - Product Details */}
        <section className="basis-1/2 pl-6 pt-16">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>

          {/* Rating Section */}
          <div className="flex items-center mt-2">
            <Stack>
              <Rating name="half-rating-read" value={product.rating || 0} precision={0.1} readOnly />
            </Stack>
            <span className="ml-2 text-gray-600">
              {product.rating} ({product.review || "No reviews"})
            </span>
          </div>

          <div className="h-[0.7px] w-full bg-gray-400 my-3"></div>

          {/* Pricing Details */}
          <div className="mt-4">
            <p className="text-xl font-semibold text-green-600">${product.price?.toFixed(2)}</p>
            <p className="text-sm text-gray-500">
              or ${product.monthlyPrice || "0"}/month with 6-month special financing
            </p>
            <p className="text-red-500">Discount: {product.discountPercentage}% OFF</p>
          </div>

          <div className="h-[0.7px] w-full bg-gray-400 my-3"></div>

          {/* Quantity Selector */}
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
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700" onClick={handleCartButton}>
              Add to Cart
            </button>
          </div>

          <div className="h-[0.7px] w-full bg-gray-400 my-3"></div>

          {/* Additional Information */}
          <div className="mt-6 text-sm text-gray-700">
            <p>📦 Shipping: {product.shippingInformation || "Not available"}</p>
            <p>🛠 Warranty: {product.warrantyInformation || "No warranty"}</p>
            <p>🔄 Return Policy: {product.returnPolicy || "No return policy available"}</p>
          </div>
        </section>
      </div>

      {/* Reviews Section */}
      <div className="m-4">
        <h3 className="text-xl font-bold">Customer Reviews</h3>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="mt-3 p-3 border rounded-lg shadow-sm bg-gray-100">
              <Stack direction="row" alignItems="center">
                <Rating name={`review-rating-${index}`} value={review.rating} precision={0.1} readOnly />
                <span className="ml-2 text-gray-600">({review.rating})</span>
              </Stack>
              <p className="text-gray-800 font-semibold">{review.comment}</p>
              <p className="text-sm text-gray-500">- {review.reviewerName}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </>
  );
};
