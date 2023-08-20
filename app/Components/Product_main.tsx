"use client";

// // single product

// // import React, { useEffect, useState } from 'react';
// // import { client } from '../lib/sanityClient';

// // interface Product {
// //   _id: string;
// //   productname: string;
// //   description: string;
// //   price: number;
// //   image: {
// //     asset: {
// //       _ref: string;
// //     };
// //   };
// // }

// // const Product_main: React.FC = () => {
// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [imgFinal, setImgFinal] = useState<string | undefined>(undefined);

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         // Fetch a single product from Sanity
// //         const response: Product | null = await client.fetch(`*[_type == "product"][0]{
// //           _id,
// //           productname,
// //           image {
// //             asset {
// //               _ref
// //             }
// //           }
// //         }`);
// //         setProduct(response);
// //       } catch (error) {
// //         console.error('Error fetching product from Sanity:', error);
// //       }
// //     };

// //     fetchProduct();
// //   }, []);

// //   useEffect(() => {
// //     if (product && product.image && product.image.asset && product.image.asset._ref) {
// //       const img = product.image.asset._ref;
// //       const imgLink = img.substring(6);
// //       const lastIndex = imgLink.lastIndexOf("-");
// //       const imgFinal = imgLink.slice(0, lastIndex) + "." + imgLink.slice(lastIndex + 1);
// //       setImgFinal(imgFinal);
// //     }
// //   }, [product]);

// //   return (
// //     <div>
// //       <h2>Product</h2>
// //       {product && (
// //         <div key={product._id}>
// //           <h3>{product.productname}</h3>
// //           {imgFinal && (
// //             <img
// //               src={`https://cdn.sanity.io/images/6dacafhr/production/${imgFinal}`}
// //               alt={product.productname}
// //             />
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Product_main;

// import React, { useEffect, useState } from "react";
// import { client } from "../lib/sanityClient";

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

// const Product_main: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [imgFinal, setImgFinal] = useState<string | undefined>(undefined);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // Fetch the first three products from Sanity
//         const response: Product[] =
//           await client.fetch(`*[_type == "product"][0...3]{
//           _id,
//           productname,
//           description,
//           price,
//           image {
//             asset {
//               _ref
//             }
//           }
//         }`);
//         setProducts(response);
//       } catch (error) {
//         console.error("Error fetching products from Sanity:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//     useEffect(() => {
//       if (products.length > 0) {
//         const product = products[0];
//         if (product && product.image && product.image.asset && product.image.asset._ref) {
//           const img = product.image.asset._ref;
//           const imgLink = img.substring(6);
//           const lastIndex = imgLink.lastIndexOf("-");
//           const imgFinal = imgLink.slice(0, lastIndex) + "." + imgLink.slice(lastIndex + 1);
//           setImgFinal(imgFinal);
//         }
//       }
//     }, [products]);

//   return (
//     <div>
//     <div className="bg-white">
//       <div className="bg-white py-12 px-[48%]">
//         <h2 className="text-black font-extrabold w-72 text-3xl">WHAT WE HAVE</h2>
//       </div>
//     </div>
//     <div className="bg-white py-10">
//     <div className="grid grid-cols-3 gap-4 mt-8 mx-28 mb-10 shadow-md">
//       {products.map((product) => (
//         <div key={product._id} className="bg-white p-4 hover:scale-110 transition-transform duration-200">
//           <h3 className="text-xl font-bold text-black">{product.productname}</h3>
//           <p className="text-gray-700">Price: {product.price}</p>
//           <img
//             src={`https://cdn.sanity.io/images/6dacafhr/production/${imgFinal}`}
//             className="mt-4 w-[100%] h-[50%] object- hover:scale-110 transition-transform duration-200"
//             alt={product.productname}
//           />
//         </div>
//       ))}
//     </div>
//     </div>
//   </div>

//     //    {imgFinal && (
//     //     <div>
//     //       <h2>Product</h2>
//     //       {products.length > 0 && (
//     //         <div key={products[0]._id}>
//     //             <h3>{products[0].price}</h3>
//     //           <h3>{products[0].productname}</h3>
//     //           <img
//     //             src={`https://cdn.sanity.io/images/6dacafhr/production/9dd0a1f03babf616cffc2bfffac308cbe57e5e9d-300x168.jpg`}
//     //             alt={products[0].productname}
//     //           />
//     //         </div>
//     //       )}
//     //     </div>
//     //   )}
//     // </div>
//   );
// };

// export default Product_main;


/////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanityClient';

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

const Product_main: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [imgFinal, setImgFinal] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch the first three products from Sanity
        const response: Product[] =
          await client.fetch(`*[_type == "product"][0...3]{
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
        console.error('Error fetching products from Sanity:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const product = products[0];
      if (product && product.image && product.image.asset && product.image.asset._ref) {
        const img = product.image.asset._ref;
        const imgLink = img.substring(6);
        const lastIndex = imgLink.lastIndexOf('-');
        const imgFinal = imgLink.slice(0, lastIndex) + '.' + imgLink.slice(lastIndex + 1);
        setImgFinal(imgFinal);
      }
    }
  }, [products]);

  return (
    <div>
      <div className="bg-rose-500 py-20  text-center ">
        <h2 className="text-white font-extrabold text-3xl">WHAT WE HAVE</h2>
      </div>
      <div className="bg-white py-10 ">
        <div className="grid grid-cols-3 gap-4 mt-8 mx-28 mb-10 ">
          {products.map((product) => (
            <div key={product._id} className="bg-white p-4 hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-bold text-black">{product.productname}</h3>
              <p className="text-gray-700">Price: {product.price}</p>
              <img
                src={`https://cdn.sanity.io/images/6dacafhr/production/${imgFinal}`}
                className="mt-4 w-full h-40 object-contain hover:scale-105 transition-transform duration-200"
                alt={product.productname}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product_main;
