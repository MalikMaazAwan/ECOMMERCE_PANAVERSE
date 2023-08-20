"use client"
import Link from 'next/link';
import React from 'react'
import { CiShop } from "react-icons/ci";
export default function 
() {
  return (
    <div className="bg-white py-12 ">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-black">Welcome to Pakistan Super Cars</h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-6">
            We provide the finest collection of supercars, including Bugatti, Lamborghini, Koenigsegg, and JDMs.
          </p>
          <Link href="/products">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow flex gap-3 items-center">
             <CiShop size={25}/> Book Your  Now
          </button>
          </Link>
        </div>
        <div className="lg:w-1/2 mb-4">
          <img src="/hero.jpg" alt="Supercar" className="w-full h-auto rounded-lg" />
        </div>
      </div>
      <div className=" pl-72 grid grid-cols-4 gap-1 w-[50%]">
            <img src="/bugatti_logo.png" alt="Bugatti Logo" className="w-[50%] h-auto rounded-lg" />
            <img src="/Lambo.jpg" alt="Lambo" className="w-[50%] h-auto rounded-lg" />
            <img src="/koeni.png" alt="koeni"className="w-[50%] h-auto rounded-lg" />
            <img src="/jdm.png" alt="jdm" className="w-[50%] object-fill rounded-lg" />
        </div>
    </div>
  )
}
