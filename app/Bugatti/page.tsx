"use client";
import React, { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import Link from "next/link";

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
        const productIds = [
          "5e1e2ba1-dd0a-4adc-8451-9af46328d26c",
          "b09208b0-9b3c-4c18-89a1-172513b1af6b",
          "b53b1abe-1720-412a-ad01-f977515a05dd",
          "cee73d0b-e0c4-4d8e-921f-5c3fb33a0d63",
        ];

        const response: Product[] = await client.fetch(
          `*[_type == "product" && _id in $productIds]{
          _id,
          productname,
          description,
          price,
          image {
            asset {
              _ref
            }
          }
        }`,
          { productIds }
        );

        setProducts(response);
      } catch (error) {
        console.error("Error fetching products from Sanity:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="h-auto bg-gradient-to-t from-rose-800 to-gray-900 text-white">
          <div> <nav className="bg-rose-500 py-7">
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
        <img
          className="object-cover h-96 w-screen"
          src="./bugatti.jpg"
          alt="bugatti"
        />
        <h2 className="text-8xl font-bold mb-6 text-center py-4">BUGATTI</h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="card bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`https://cdn.sanity.io/images/6dacafhr/production/674a7edfe05f591b401962f19177bb2eaea65323-1920x800.jpg`}
                alt={product.productname}
                className="card-image w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-black">
                  {product.productname}
                </h3>
                <p className="text-gray-900 font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pl-5 grid grid-cols-4 gap-6">
       
      <Link href="/Bugatti/lavoiturenoire">
      <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
         See Details
      </button>
      </Link>
      <Link href="/Bugatti/centuries">
      <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
         See Details
      </button>
      </Link>
      <Link href="/Bugatti/veyron">
      <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
         See Details
      </button>
      </Link>
      <Link href="/Bugatti/chiron">
      <button className="bg-gray-500 hover:bg-gradient-to-tr from-white to-gray-300 hover:text-gray-500 font-bold py-2 px-32 rounded-lg shadow  items-center">
         See Details
      </button>
      </Link>
      </div>
     
    </div>
  );
};

export default ProductGrid;
// ////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////
