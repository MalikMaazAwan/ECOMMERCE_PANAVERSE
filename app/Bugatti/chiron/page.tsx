"use client"
import Header  from '@/app/Components/Header'
import React, { useEffect, useState } from "react";
import { client } from "@/app/lib/sanityClient";
interface Product {
  _id: string;
  productname: string;
  description: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

interface ProductPageProps {
  productId: string;
}

const ProductPage: React.FC<ProductPageProps> = ({ productId }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        productId = "cee73d0b-e0c4-4d8e-921f-5c3fb33a0d63"
        const response: Product | null = await client.fetch(`*[_type == "product" && _id == $productId][0]{
          _id,
          productname,
          description,
          price,
          image {
            asset {
              _ref
            }
          }
        }`, { productId });
        setProduct(response);
      } catch (error) {
        console.error("Error fetching product from Sanity:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
  // const handleAddToCart = async (): Promise<void> => {
  //   try {
  //     const response = await fetch("/api/cart", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         product_id: product._id,
  //       }),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error(`Failed to add product to cart: ${response.status}`);
  //     }
  
  //     const result = await response.json();
  //     // Process the result if needed
  //     console.log(result);
  //   } catch (error) {
  //     console.error("Error occurred while adding product to cart:", error);
  //   }
  // };
  
  const handleAddToCart = async ()=> {
    const res = await fetch("/api/cart",
    {
      method:"POST",
      body: JSON.stringify({
          product_id:product._id,
      })
    })
   
    console.log(res);
      const result = await res.json() 

  } 
  return (
    <div>
       <div>
      <Header/>
    </div>
    <div className=" w-auto h-auto   container mx-auto py-10 pl-20 bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={`https://cdn.sanity.io/images/6dacafhr/production/10f2bcb76d1bc5b0862eb26321aabf6a6086003a-3920x5203.jpg`}
            alt={product.productname}
            className="w-[100%] h-[80%] object-cover rounded-3xl"
          />
        </div>
        <div className="  pt-[30%]   md:w-1/2 md:pl-8">
          <h2 className=" text-black text-2xl font-bold mb-4">{product.productname}</h2>
          <p className="text-slate-700 font-bold mb-4">${product.price}</p>
          <button onClick={handleAddToCart} className="bg-rose-500 text-white px-4 py-2 rounded ">Add to Cart</button>
         
        </div>
        
      </div>
      <div className='text-black'>
        <h3 className='text-6xl'>DESCRIPTION</h3>
      <p className="mt-4 text-justify w-[50%]">{product.description}</p>
      </div>
      
    </div>
    </div>
  );
};

export default ProductPage;
