'use client';
import { useEffect, useState } from "react"
import { Product } from "../../../types/products"
import { client } from "@/sanity/lib/client"
import { allProducts } from "@/sanity/lib/queries"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function Home() {

    const [product , setProduct] = useState<Product[]>([])
  
    useEffect(()=>{
      async function fetchproduct (){
        const fetchedProduct : Product[] = await client.fetch(allProducts)
        setProduct(fetchedProduct)
      }
      fetchproduct()
    },[])
  
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
  
              </div>
            ))
          }

        </div>
  );
}