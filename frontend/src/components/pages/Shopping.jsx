import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../layout/cards/ProductCard';

export const Shopping = () => {
    const { id } = useParams();  // Get category from URL
    const [products, setProducts] = useState(null);
    const category = id || 'all';  // Default to 'all' if no category is provided

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/product/${category}`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'Failed to fetch products');
                }
                setProducts(data.data);
            } catch (error) {
                console.log('Error in fetching the product', error);
            }
        };
        fetchData();
    }, [category]);

    if (!products) return <h1>Loading...</h1>;

    return (
        <div className='flex flex-wrap justify-center mt-4'>
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <h2>No products found</h2>
            )}
        </div>
    );
};
