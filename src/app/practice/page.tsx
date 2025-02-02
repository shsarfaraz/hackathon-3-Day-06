'use client';
import { useEffect, useState } from "react"
import { Product } from "../../../types/products"
import { client } from "@/sanity/lib/client"
import { allProducts } from "@/sanity/lib/queries"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";
// Product
export default function Home() {

    const [product , setProduct] = useState<Product[]>([])
  
    useEffect(()=>{
      async function fetchproduct (){
        const fetchedProduct : Product[] = await client.fetch(allProducts)
        setProduct(fetchedProduct)
      }
      fetchproduct()
    },[])


    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
      e.preventDefault();
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        title: `added to cart`,
        showConfirmButton: false,
        timer: 1500
        
      })
      addToCart (product);
      
    };
  
    return (
     <div>
          {
            product.map((product)=>(
              <div key={product._id}>
                {product.productname}
                {product.image && (
                  <Image
                  src={urlFor(product.image).url()}
                  alt="image"
                  width={200}
                  height={200}
                  />
                )}
                {product.price}

                <button
                className="bg-gradient-to-r from-blue-500 to-purple-500
                 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110
                 transition-transform duration-300 ease-in-out"
                 onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart

                </button>
  
              </div>
            ))
          }

        </div>
  );
}
