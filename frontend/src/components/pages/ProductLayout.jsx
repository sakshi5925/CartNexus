import React, { useEffect, useState } from "react";
import { Rating, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const ProductLayout = () => {
  const location = useLocation();
  const product = location.state?.product || {}; // Ensure product is not undefined
  const [selectedImage, setSelectedImage] = useState(product.thumbnail || "");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    id: "",
    images: "",
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

  const navigate = useNavigate();

  useEffect(() => {
    if (product && Object.keys(product).length > 0) {
      setData((prevData) => ({
        ...prevData,
        id: product.id,
        images: product.images[0],
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
    }
  }, [product]);

  // Check if data updates
  useEffect(() => {
    console.log("Data state updated:", data);
  }, [data]);

  if (!product || Object.keys(product).length === 0) {
    return <p className="text-red-600 text-center">Product not found!</p>;
  }

  const handleProductCountplus = () => {
    if (quantity < data.stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      setData((prevData) => ({
        ...prevData,
        productCount: prevData.productCount + 1,
      }));
    }
  };

  const handleProductCountminus = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setData((prevData) => ({
        ...prevData,
        productCount: prevData.productCount - 1,
      }));
    }
  };

  const handleCartbutton = async () => {
    const token = localStorage.getItem("authToken");
    if(!token) {
      alert('Login First');
      navigate('/login');
      return;
    }
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const id = decodedToken.id
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:3000/product/add/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.success) {
        alert("Product added successfully");
      }
    } catch (error) {
      alert("Failed to add product");
      console.log("Error in posting data:", error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-row p-6 bg-white m-4">
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
            <p className="text-red-500">Discount: {product.discountPercentage}% OFF</p>
          </div>

          <div className="h-[0.7px] w-full bg-gray-400 my-3"></div>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center">
            <button className="px-3 py-1 border rounded-l-lg bg-gray-200" onClick={handleProductCountminus}>
              -
            </button>
            <span className="px-4 py-1 border-t border-b">{quantity}</span>
            <button className="px-3 py-1 border rounded-r-lg bg-gray-200" onClick={handleProductCountplus}>
              +
            </button>
            <p className="ml-3 text-sm text-red-600 font-semibold">Only {product.stock} Left!</p>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex gap-4">
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
              Buy Now
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700" onClick={handleCartbutton} disabled={loading}>
              {loading ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
