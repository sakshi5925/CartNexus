import React, { useEffect, useState } from 'react';
import { Paymentprocess, Pricedetail } from '../layout/CartLayout';
import { Address } from './Address';
import { Payment } from './Payment';
import { OrderDetails } from './OrderDetails';
import { Productdetails } from '../layout/CartLayout';

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const [step, setStep] = useState(0); // Step tracker: 0 - ProductDetails, 1 - Address, 2 - Payment, 3 - OrderDetails

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/product/getproduct');
        const data = await response.json();

        if (data.success) {
          setProducts(data.data);
        } else {
          console.error("No products found");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle continue button click
  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <>
      {/* Stepper */}
      <Paymentprocess step={step} />

      <div className='flex justify-between mt-3'>
        <h2 className='text-3xl font-bold mx-12'>
          {step === 0 ? 'Product Details' : step === 1 ? 'Address Details' : step === 2 ? 'Payment Details' : 'Order Summary'}
        </h2>
        <h2 className='text-3xl font-bold mr-48'>Price Details</h2>
      </div>

      <div className='flex'>
        {/* Conditional rendering based on step */}
        <div className='flex flex-wrap gap-4 w-2/3'>
          {step === 0 && products.map((product) => (
            <Productdetails key={product.id} product={product} />
          ))}
          {step === 1 && <Address />}
          {step === 2 && <Payment />}
          {step === 3 && <OrderDetails />}
        </div>

        {/* Price Details remain the same */}
        <Pricedetail products={products} />
      </div>

      {/* Continue Button */}
      {step < 3 && (
        <div className='flex justify-end m-5'>
          <button
            onClick={handleContinue}
            className='px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-800'
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
};
