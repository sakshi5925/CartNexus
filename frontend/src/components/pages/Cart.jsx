import React from 'react'
import { Paymentprocess, Pricedetail, Productdetails } from '../layout/CartLayout'


export const Cart = () => {
  const product = {
    title: "Apple MacBook Pro 14 Inch - Space Grey",
    description:
      "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.", 
    price: 1999.99,

    discountPercentage: 9.25,
    warrantyInformation: "1 Year Apple Warranty",
    shippingInformation: "Ships in 1 week",
    returnPolicy: "30 days free return",
    images: 
    "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  }
  return (
      <>
          <Paymentprocess />
          <div className='flex'>
            <Productdetails
                product = {product}   
            />
            <Pricedetail/>
          </div>
        </>
  )
}