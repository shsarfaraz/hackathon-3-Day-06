"use client";

import React, { useEffect, useState } from 'react';
import { Product } from '../../types/products';
import { client } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';

const Practice = () => { // <-- Change function name to "Practice"
    const [product, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const fetchedProduct: Product[] = await client.fetch(allProducts);
            setProduct(fetchedProduct);
        }
        fetchProducts();
    }, []);

    return (
        <div className='max-w-6xl mx-auto px-4 py-8'>
            {product.map((product) => (
                <div key={product._id}>
                    {product.productname}
                </div>
            ))}
        </div>
    );
};

export default Practice; 
