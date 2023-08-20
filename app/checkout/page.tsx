// "use client";
import getStripePromise from "../lib/stripe";



// const products = [
//   {
//     product: 1,
//     name: "stripe 1",
//     price: 400,
//     quantity: 3,
//   },
//   {
//     product: 2,
//     name: "stripe 2",
//     price: 600,
//     quantity: 1,
//   },
// ];
// const Checkout = () => {
//   const handleCheckOut = async () => {
//     const stripe = await getStripePromise();
//     const response = await fetch("/api/stripe-session/", {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       cache: "no-cache",
//       body: JSON.stringify({ products }),
//     });
  
//     const data = await response.json();
//     if (data.session) {
//       stripe?.redirectToCheckout({ sessionId: data.session.id });
//     }
//   };

//   return (
//     <div>
//       <div className="pl-[40%] mt-10 ">
//         <button
//           onClick={handleCheckOut}
//           className=" bg-gradient-to-bl from-rose-600 to-purple-600 hover:bg-gradient-to-tl  rounded-2xl py-6 px-32 duration-500"
//         >
//           CHECK OUT
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Checkout;

//v2


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

// Pass the products prop to the Checkout component
interface CheckoutProps {
  products: Product[];
}

const Checkout: React.FC<CheckoutProps> = ({ products }) => {
  const handleCheckOut = async () => {
    const stripe = await getStripePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify({ products }),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <div>
      <div className="pl-[40%] mt-10 ">
        <button
          onClick={handleCheckOut}
          className=" bg-gradient-to-bl from-rose-600 to-purple-600 hover:bg-gradient-to-tl  rounded-2xl py-6 px-32 duration-500"
        >
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default Checkout;
