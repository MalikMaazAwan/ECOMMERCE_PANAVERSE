"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";

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
        const productIds = ["26837176-78b4-43f3-8d3c-2af2b2974fef", "3d265fb6-79fb-43a7-8351-f3065a9a9c4f", "6bea549d-2c21-429e-ae23-0f3b56c41e36","8a052a91-b72b-4221-b746-9d983542d84a"];

        const response: Product[] = await client.fetch(`*[_type == "product" && _id in $productIds]{
          _id,
          productname,
          description,
          price,
          image {
            asset {
              _ref
            }
          }
        }`, { productIds });

        setProducts(response);
      } catch (error) {
        console.error("Error fetching products from Sanity:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="h-auto bg-gradient-to-t from-gray-800 to-indigo-900 text-white">
       <div> <nav className="bg-blue-500 py-7 ">
    <div className="container mx-auto pb-8 px-4 lg:px-8 flex items-center justify-between">
      <Link href="/">
        <h1 className="text-white text-xl font-bold transition-colors duration-300 ease-in-out hover:text-green-400">
          Pakistan Super Cars
        </h1>
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link href="/Bugatti">
            <span className="text-white cursor-pointer transition-colors duration-300 ease-in-out hover:text-red-400">
              Bugatti
            </span>
          </Link>
        </li>
        <li>
          <Link href="/Lambo">
            <span className="text-white cursor-pointer transition-colors duration-300 ease-in-out hover:text-yellow-400">
              Lamborghini
            </span>
          </Link>
        </li>
        <li>
          <Link href="/Koeni">
            <span className="text-white cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-400">
              Koenigsegg
            </span>
          </Link>
        </li>
        <li>
          <Link href="/jdm">
            <span className="text-white cursor-pointer transition-colors duration-300 ease-in-out hover:text-purple-400">
              JDMs
            </span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
</div>
      <div className="container mx-auto px-4 py-10">
        <img className="object-cover h-96 w-screen" src="./koenig.jpg" alt="koenig" />
        <h2 className="text-8xl font-bold mb-6 text-center py-4">   KOENIGSEGG </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div key={product._id} className="card bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`https://cdn.sanity.io/images/6dacafhr/production/4994c6f9ebaf45b0ca76ba1f068f1afb13011a39-3936x4920.jpg`}
                alt={product.productname}
                className="card-image w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-black">{product.productname}</h3>
                <p className="text-gray-900 font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pl-5 grid grid-cols-4 gap-6">
       
       <Link href="/Koeni/agera">
       <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
          See Details
       </button>
       </Link>
       <Link href="/Koeni/jesko">
       <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
          See Details
       </button>
       </Link>
       <Link href="/Koeni/gemra">
       <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
          See Details
       </button>
       </Link>
       <Link href="/Koeni/regra">
       <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
          See Details
       </button>
       </Link>
       </div>
    </div>
  );
};

export default ProductGrid;
