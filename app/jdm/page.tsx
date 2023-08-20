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
        const productIds = ["60d96693-59cf-47a9-afd2-477fbfdb2d67", "859d047c-8231-4d4b-a6a5-6cbf2a8cfb2f", "e8ea1386-3940-4dc9-acec-b10d13755d27","c8e06cb3-33ff-4813-9937-09ad416f5639"];

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
    <div className="h-auto bg-gradient-to-t from-gray-800 to-red-900 text-white">
         <div> <nav className="bg-orange-500 py-7 ">
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
        <img className="object-cover h-96 w-screen" src="./jdms.jpg" alt="koenig" />
        <h2 className="text-8xl font-bold mb-6 text-center py-4">   JDM </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div key={product._id} className="card bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`https://cdn.sanity.io/images/6dacafhr/production/953b17b2da81125ed7cc755afa0b31a841f448b0-5867x3911.jpg`}
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
       
      <Link href="/jdm/sky">
      <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
         See Details
      </button>
      </Link>
      <Link href="/jdm/sabaru">
      <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
         See Details
      </button>
      </Link>
      <Link href="/jdm/special">
      <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
         See Details
      </button>
      </Link>
      <Link href="/jdm/r35">
      <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
         See Details
      </button>
      </Link>
      </div>
    </div>
  );
};

export default ProductGrid;
