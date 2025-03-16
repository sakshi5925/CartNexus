import React, { useEffect, useState } from 'react';
import { Paymentprocess, Pricedetail, Productdetails } from '../layout/CartLayout';

export const Cart = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/product/getallproduct');
        const data = await response.json();

        if (data.success) {
          setProducts(data.products); // Store all products in state
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
      <div className='flex flex-wrap gap-4'>
        {products.length > 0 ? (
          products.map((product) => (
            <Productdetails key={product._id} product={product} />
          ))
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
      <Pricedetail />
    </>
  );
};
