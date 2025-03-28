import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { RiDiscountPercentLine } from "react-icons/ri";
const steps = ['Cart', 'Address', 'Payment', 'Summary'];

export const Paymentprocess = ({ step }) => {
  return (
    <Box sx={{ width: '100%' }} className="mt-7">
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

const Temp = ({ product }) => {
  return (
    <div className="flex border-2 p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col">
        <img className="w-48 rounded-lg" src={product.images} alt="" />
        <h2 className="font-bold text-lg mt-3">{product.title}</h2>
      </div>
      <div className="w-[40rem] pl-6">
        <h3 className="font-semibold text-gray-600 mb-4">{product.description}</h3>
        <h2 className="text-gray-500 text-xl">
          <p className="text-2xl font-bold mb-2 text-gray-700">Special Price</p>
          <span className="text-3xl text-green-500 font-bold">
            ${(product.price - (product.price * product.discountPercentage) / 100).toFixed(1)}
          </span>
          <span className="text-xl line-through text-gray-400 ml-2">${product.price}</span>
          <span className="text-2xl text-green-500 ml-2 font-bold">{product.discountPercentage}% off</span>
        </h2>
        <h4 className="mt-3 text-lg text-gray-500 font-bold">
          {product.warrantyInformation} <br /> {product.shippingInformation} <br /> {product.returnPolicy}
        </h4>
        <div className="flex justify-between mt-6">
          <button className="p-3 bg-red-500 hover:bg-red-700 text-white rounded-lg w-24 font-bold">Remove</button>
          <button className="p-3 border-2 rounded-lg w-24 font-bold border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">Edit</button>
        </div>
      </div>
    </div>
  );
};


export const Productdetails = ({ product }) => {
  const array = [2, 4, 5];
  return (
    <>
      <div className='p-8'>
        <Temp
          key={product.id}
          product={product}
        />
      </div>
    </>
  )
}

export const Pricedetail = ({ products }) => {
  const [data, setData] = useState({
    totalProducts: 0,
    totalPrice: 0,
    totalDiscount: 0,
    totalOrderPrice: 0
  });

  useEffect(() => {
    let totalProducts = 0;
    let totalPrice = 0;
    let totalDiscount = 0;

    products.forEach((product) => {
      totalProducts += product.productCount; 
      totalPrice += product.price * product.productCount; 
      totalDiscount += (product.price * product.discountPercentage / 100) * product.productCount; 
    });

    setData({
      totalProducts,
      totalPrice: parseFloat(totalPrice.toFixed(2)),  
      totalDiscount: parseFloat(totalDiscount.toFixed(2)),  
      totalOrderPrice: parseFloat((totalPrice - totalDiscount).toFixed(2)) 
    });
  }, [products]); 

  return (
    <div className="p-6 flex flex-col bg-white rounded-lg">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">Total Products: {data.totalProducts}</h3>
        <div className="flex justify-between mt-5 text-xl text-gray-600">
          <h2>Total Product Price </h2>
          <h2 className="font-semibold">+${data.totalPrice}</h2>
        </div>
        <div className="flex justify-between text-xl mt-3 text-green-500 mb-5 font-bold">
          <h2>Total Discount </h2>
          <h2>-${data.totalDiscount}</h2>
        </div>
        <hr className="border-gray-300"></hr>
        <div className="flex justify-between mt-5 text-2xl font-bold text-gray-900">
          <h2>Order Total </h2>
          <h2>${data.totalOrderPrice}</h2>
        </div>

        <div className="h-14 bg-green-200 flex text-green-600 justify-center items-center mt-8 rounded-lg shadow-md">
          <b className="text-4xl m-1"><RiDiscountPercentLine /></b>
          <p className="text-lg font-bold">
            Yay! Your total discount is <span className="text-green-700">${data.totalDiscount}</span>
          </p>
        </div>

        <div className="flex flex-col mt-8 text-center">
          <h3 className="font-bold text-gray-600">
            Clicking on 'Continue' will not deduct any money
          </h3>
        </div>
      </div>
    </div>
  );
};