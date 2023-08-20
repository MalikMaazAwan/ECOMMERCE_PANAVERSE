import Image from 'next/image'
import React from 'react';
import Header  from './Components/Header'
import  Hero from './Components/Hero'
import  Product_main from './Components/Product_main'
import Despt from './Components/Despt'
import Feedback from './Components/Feedback'
import Social from './Components/Social'
import Credit from './Components/Credit'

export default function Home() {
  return (

    <div>
    <Header/>
    <Hero/>
    <Product_main/>
    <Despt/>
    <Feedback/>
    <Social/>
    <Credit/>
    
   </div>

  
    
  )
}
