'use client';
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";
import Navbar from "@/components/Navbar";  // Import the Navbar here
import Link from "next/link";
import Header from "@/components/Header";  // Import Header here

export default function Home() {

  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `Added to cart`,
      showConfirmButton: false,
      timer: 1500
    });
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header Component */}
      <Header />  {/* Here is the Header being used */}
      
      {/* Navbar Component */}
      <Navbar />  {/* Here is the Navbar being used */}

      {/* Adding margin-top for space below the Navbar */}
      <div className="mt-8"> {/* Add margin-top here */}
        {/* View Cart Button */}
        <div className="fixed bottom-10 right-10 z-50">
          <Link href="/cart" passHref>
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
              View Cart
            </button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {product.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden">
              {product.image && (
                <div className="relative w-full h-64">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productname}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{product.productname}</h3>
                <p className="text-lg font-medium text-gray-600 my-2">{product.price}</p>
                <button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
