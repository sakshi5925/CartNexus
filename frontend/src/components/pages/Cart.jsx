import React, { useEffect, useState } from 'react';
import { Paymentprocess, Pricedetail, Productdetails } from '../layout/CartLayout';

export const Cart = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch('http://localhost:3000/product/getallProduct');
=======
        const response = await fetch('http://localhost:3000/product/getproduct');
>>>>>>> 8936166decb82b988fe95146989108fc13d3a2b4
        const data = await response.json();

        if (data.success) {
          setProducts(data.data); // Store all products in state
          console.log(products);
        } else {
          console.error("No products found");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Paymentprocess />
      <div className='flex justify-between mt-3'>

      <h2 className='text-3xl font-bold mx-12 '>Product Details</h2>
      <h2 className='text-3xl font-bold  mr-48'>Price Details</h2>
      </div>

      <div className='flex'>
      <div className='flex flex-wrap gap-4'>
        {products ? (
          products.map((product) => (
            <Productdetails key={product.id} product={product} />
          ))
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
      <Pricedetail products={products}/>
        </div>
    </>
  );
};
