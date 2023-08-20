import React from "react";
import Link from "next/link"
export default function Despt() {
  return (
    <div>
      <div className="bg-teal-500 justify-center flex gap-32 py-16 px-8 pt-80  text-center h-screen">
        <div className="space-y-10">
          <h1 className="text-4xl font-bold  text-white mb-4 mt-[5%]">
            Welcome to Car Haven
          </h1>
          <Link href="/products">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-lg  transition-colors duration-300">
            BOOK YOUR NOW
          </button>
          </Link>
         
        </div>

        <p className="text-xl text-justify w-[50%] text-white mb-8">
          "Discover the perfect ride for your lifestyle at our premier car
          dealership. Browse our extensive selection of quality vehicles,
          meticulously inspected and ready to hit the road. Whether you're
          seeking power, efficiency, or luxury, we have a car to suit your every
          need. Experience unmatched performance and reliability with our
          exceptional collection of pre-owned and new cars. Our knowledgeable
          staff is here to assist you in finding the ideal vehicle that matches
          your style and budget. Visit us today and start your journey towards
          owning your dream car!"
        </p>
      </div>
    </div>
  );
}
