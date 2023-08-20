"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import Header from "@/app/Components/Header";
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

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: Product[] = await client.fetch(`*[_type == "product"]{
          _id,
          productname,
          description,
          price,
          image {
            asset {
              _ref
            }
          }
        }`);
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products from Sanity:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-slate-800  px-6 sm:px-10">
      <div>
        <Header />
      </div>

      <div className="container mx-auto pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`https://cdn.sanity.io/images/6dacafhr/production/10f2bcb76d1bc5b0862eb26321aabf6a6086003a-3920x5203.jpg`}
                alt={product.productname}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-black font-bold mb-2">
                  {product.productname}
                </h3>
                <p className="text-gray-900 font-bold">${product.price}</p>
                
                <Link href="/Koeni/jesko">
                    <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
                        See Details
                    </button>
                    </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
