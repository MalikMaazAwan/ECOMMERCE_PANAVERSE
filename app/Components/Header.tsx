import Link from 'next/link';
import {GiCartwheel} from 'react-icons/gi';
export default function Header() {
  return (
    <nav className="bg-teal-500 py-7">
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
        <Link href="/AddToCart ">
        <div className=' hover:scale-110 cursor-pointer'>
        <GiCartwheel size={25}  color="white"/>
      </div>
        </Link>
       
      </ul>
    </div>
   
  </nav>
  
  )
}

