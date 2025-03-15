import React, { useEffect, useState } from 'react'
import { ProductCard } from '../layout/cards/ProductCard';

export const Shopping = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.error || 'Failed to fetch profile');
                }
                setProducts(data.products);
            } catch (error) {
                console.log('Error in fetching the product', error);
            }
        }
        fetchData();
    }, [])
    console.log(products);
    if (!products) return <h1>Loading</h1>
    return (
        <div className='flex flex-wrap justify-center mt-4'>
            {
                products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </div>
    )
}
