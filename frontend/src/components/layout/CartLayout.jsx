import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { RiDiscountPercentLine } from "react-icons/ri";

const steps = [
  'Cart',
  'Address',
  'Payment',
  'Summary',
];

export const Paymentprocess = () => {
  return (
    <Box sx={{ width: '100%' }} className="mt-7">
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

const Temp = ({ product }) => {
  return (
    <div className='flex border-2 p-10 '>
      <div className='flex flex-col '>
        <img src={product.images} alt="" />
        <h2 className='font-bold'>{product.title}</h2>
      </div>
      <div className='w-[40rem]'>
        <h3 className='font-bold text-gray-500 mb-6'>{product.description}</h3>
        <h4 className='text-gray-500'>
          <h2 className='text-2xl font-bold mb-2 text-gray-700'>Special price </h2>
          $<b className='text-3xl text-green-500'>{(product.price - (product.price * product.discountPercentage) / 100).toFixed(1)}</b> ${product.price} <b className='text-3xl text-black'>{product.discountPercentage}</b><b className='text-green-500 text-2xl'>% off</b>
        </h4>
        <h4 className='mt-3 text-lg text-gray-500 font-bold'>{product.warrantyInformation} <br />{product.shippingInformation} <br />{product.returnPolicy}</h4>
        <div className='flex justify-between mt-6'>
          <button className='p-3 bg-green-500 text-white rounded-full w-24 font-bold ml-7'>Remove</button>
          <button className='p-3 border-2 rounded-full w-24 font-bold border-green-500'>Edit</button>

        </div>
      </div>

    </div>
  )
}


export const Productdetails = ({ product }) => {
  const array = [2, 4, 5];
  return (
    <div className='p-8'>
      <h2 className='text-3xl font-bold mb-9'>Product Details</h2>
      {
        array.map((elem, index) => (
          <Temp
            key={elem}
            product={product}
          />
        ))
      }
    </div>
  )
}

export const Pricedetail = () => {
  return (
    <div className='p-8 flex flex-col  w-[40rem] h-[35rem] '>
      <h2 className='text-3xl font-bold mb-9'>Price Details</h2>
      <div className='border-2 p-6'>
        <h3 className='text-xl font-bold'>Total Products: 3</h3>
        <div className='flex justify-between mt-5 text-xl text-gray-400'>
          <h2>Total Product Price </h2>
          <h2>+$xxxx</h2>
        </div>
        <div className='flex justify-between text-xl mt-3 text-green-400 mb-5 font-bold'>
          <h2>Total Discount </h2>
          <h2>-$xxxx</h2>
        </div>
        <hr></hr>
        <div className='flex justify-between mt-5 text-2xl font-bold'>
          <h2>Order Total </h2>
          <h2>$xxxx</h2>
        </div>
        <div className='h-14 bg-green-200 flex text-green-600 justify-center items-center mt-8  '>
          <b className='text-4xl m-1'><RiDiscountPercentLine /></b>
          <p className='text-xl font-bold '>
            Yay! Your total discount is $xxxx</p>
        </div>
        <div className='flex flex-col mt-8'>
          <h3 className='m-auto font-bold mb-3'>Clicking on 'Continue' will not deduct any money</h3>
          <div className='h-14 bg-pink-700 flex text-white justify-center items-center font-bold text-xl'>
            Continue
          </div>
        </div>
      </div>

    </div>
  )
}