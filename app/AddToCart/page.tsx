"use client";


// import React, { useEffect, useState } from "react";
// import { client } from "../lib/sanityClient";
// import { RxCrossCircled } from "react-icons/rx";
// import Link from "next/link";
// import Checkout from "../checkout/page";
// interface Product {
//   _id: string;
//   productname: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
// }

// const ProductGrid: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [totalPrice, setTotalPrice] = useState<number>(0);

//   useEffect(() => {
//     const handleGetProducts = async () => {
//       try {
//         const res = await fetch("/api/cart", {
//           method: "GET",
//         });

//         if (res.ok) {
//           const data = await res.json();
//           const productIDs = data.res.map(
//             (item: { product_id: string }) => item.product_id
//           );

//           const fetchedProducts = await client.fetch<Product[]>(
//             `*[_type == "product" && _id in $productIDs]{
//               _id,
//               productname,
//               description,
//               price,
//               image {
//                 asset {
//                   _ref
//                 }
//               }
//             }`,
//             { productIDs }
//           );

//           setProducts(fetchedProducts);
//           calculateTotalPrice(fetchedProducts);
//         } else {
//           // Handle the error if the response is not OK
//           console.error("Failed to fetch products:", res.status);
//         }
//       } catch (error) {
//         // Handle any network or other errors
//         console.error("Error occurred while fetching products:", error);
//       }
//     };

//     handleGetProducts();
//   }, []);

//   const calculateTotalPrice = (products: Product[]) => {
//     const totalPrice = products.reduce((total, product) => {
//       return total + product.price;
//     }, 0);
//     setTotalPrice(totalPrice);
//   };

//   const handleDeleteAllData = async () => {
//     try {
//       const res = await fetch("/api/cart", {
//         method: "DELETE",
//       });
  
//       if (res.ok) {
//         // Reload the page or perform any necessary action
//         console.log("All data deleted successfully");
//       } else {
//         console.error("Failed to delete all data:", res.status);
//       }
//     } catch (error) {
//       console.error("Error occurred while deleting all data:", error);
//     }
//   };
//   return (
//     <div className="bg-gradient-to-b from-gray-100 to-white  px-10">
//       <div className="container mx-auto pt-10">
//         <div>
//           <div className="font-bold text-9xl px-[35%] bg-gradient-to-tr from-purple-800 to-rose-800 py-11 mb-2">
//             CART
//           </div>
//           <Link href="/">
//             <button className="bg-gradient-to-bl from-rose-500 to-purple-500 rounded-xl hover:bg-gradient-to-tl text-white font-bold py-2 px-4 mx-2 ">
//               Continue Shopping
//             </button>
//           </Link>
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="flex my-10 bg-white rounded-lg shadow-md overflow-hidden"
//             >
//               <img
//                 src={`https://cdn.sanity.io/images/6dacafhr/production/10f2bcb76d1bc5b0862eb26321aabf6a6086003a-3920x5203.jpg`}
//                 alt={product.productname}
//                 className="w-32 h-32 object-cover"
//               />

//               <div className="p-4 w-48">
//                 <h3 className="text-xl text-black font-bold mb-2">
//                   {product.productname}
//                 </h3>
//                 <p className="text-gray-900 font-bold">${product.price}</p>
//               </div>
//               <div className="pl-[77%] pt-2 cursor-pointer">
//                 <RxCrossCircled
//                   size={25}
//                   color="black"
//                   // onClick={handleDeleteAllData}
//                 />
//               </div>
//             </div>
//           ))}
//           <div className=" flextext-2xl font-bold mt-5">
//             <div className="text-black mx-2">TOTAL PRICE</div>
//              <div className="bg-rose-600  w-32 px-2 rounded-xl py-4  ">${totalPrice}</div>
//              <div>
//              <Checkout/>
//              </div>
//              {/* <button   onClick={handleDeleteAllData} className="py-4 px-4 bg-black">
//               Remove all Products
//              </button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;
 // v2


 import React, { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import { RxCrossCircled } from "react-icons/rx";
import Link from "next/link";
import Checkout from "../checkout/page";

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
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const handleGetProducts = async () => {
      try {
        const res = await fetch("/api/carts", {
          method: "GET",
        });

        if (res.ok) {
          const data = await res.json();
          const productIDs = data.res.map(
            (item: { product_id: string }) => item.product_id
          );

          const fetchedProducts = await client.fetch<Product[]>(
            `*[_type == "product" && _id in $productIDs]{
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
            { productIDs }
          );

          setProducts(fetchedProducts);
          calculateTotalPrice(fetchedProducts);
        } else {
          // Handle the error if the response is not OK
          console.error("Failed to fetch products:", res.status);
        }
      } catch (error) {
        // Handle any network or other errors
        console.error("Error occurred while fetching products:", error);
      }
    };

    handleGetProducts();
  }, []);

  const calculateTotalPrice = (products: Product[]) => {
    const totalPrice = products.reduce((total, product) => {
      return total + product.price;
    }, 0);
    setTotalPrice(totalPrice);
  };

  const handleDeleteAllData = async () => {
    try {
      const res = await fetch("/api/carts", {
        method: "DELETE",
      });

      if (res.ok) {
        // Reload the page or perform any necessary action
        console.log("All data deleted successfully");
      } else {
        console.error("Failed to delete all data:", res.status);
      }
    } catch (error) {
      console.error("Error occurred while deleting all data:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white  px-10">
      <div className="container mx-auto pt-10">
        <div>
          <div className="font-bold text-9xl px-[35%] bg-gradient-to-tr from-purple-800 to-rose-800 py-11 mb-2">
            CART
          </div>
          <Link href="/">
            <button className="bg-gradient-to-bl from-rose-500 to-purple-500 rounded-xl hover:bg-gradient-to-tl text-white font-bold py-2 px-4 mx-2 ">
              Continue Shopping
            </button>
          </Link>
          {products.map((product) => (
            <div
              key={product._id}
              className="flex my-10 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`https://cdn.sanity.io/images/6dacafhr/production/10f2bcb76d1bc5b0862eb26321aabf6a6086003a-3920x5203.jpg`}
                alt={product.productname}
                className="w-32 h-32 object-cover"
              />

              <div className="p-4 w-48">
                <h3 className="text-xl text-black font-bold mb-2">
                  {product.productname}
                </h3>
                <p className="text-gray-900 font-bold">${product.price}</p>
              </div>
              <div className="pl-[77%] pt-2 cursor-pointer">
                <RxCrossCircled
                  size={25}
                  color="black"
                  // onClick={handleDeleteAllData}
                />
              </div>
            </div>
          ))}
          <div className=" flextext-2xl font-bold mt-5">
            <div className="text-black mx-2">TOTAL PRICE</div>
            <div className="bg-rose-600  w-32 px-2 rounded-xl py-4  ">${totalPrice}</div>
            <div>
              {/* Pass the products state to the Checkout component */}
              <Checkout products={products} />
            </div>
            {/* <button   onClick={handleDeleteAllData} className="py-4 px-4 bg-black">
              Remove all Products
             </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
