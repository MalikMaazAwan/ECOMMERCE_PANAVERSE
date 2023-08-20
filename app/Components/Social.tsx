
    import React from "react";
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa"
import {SiSketchfab} from "react-icons/si"

export default function Social() {
  return (
    <div>
      <Link
        href={
          " https://www.linkedin.com/in/malik-maaz-27165723b/"
        }
        target={"_blank"}
      >
        <div className="ml-[-80px] hover:ml-0 duration-300    flex  shadow-lg hover:shadow-lg shadow-blue-700 fixed bg-blue-900   text-lg top-[42vh]   text-white py-2 px-3 rounded-r-md   items-center  w-32  gap-4">
          LinkedIn
          <FaLinkedin size={25} />
        </div>
      </Link>
      <Link
        href={
          " https://www.linkedin.com/in/malik-maaz-27165723b/"
        }
        target={"_blank"}
      >
      <div className="ml-[-80px] hover:ml-0 duration-300  flex  gap-8 fixed w-32   top-[50vh]   text-white py-2 px-3 rounded-r-md     shadow-lg hover:shadow-lg shadow-purple-500  bg-purple-700 "> 
        GitHub
        <FaGithubSquare size={25}/>
      </div>
      </Link>

      <Link
        href={
          " https://sketchfab.com/MaazAwan"
        }
        target={"_blank"}
      >
      <div className="ml-[-80px] hover:ml-0 duration-300   flex  gap-3 fixed w-32  top-[58vh]   text-white py-2 px-3 rounded-r-md    shadow-lg hover:shadow-lg shadow-blue-400  bg-blue-400 ">
        Sketchfab
        <SiSketchfab size={25} />
      </div>
      </Link>

    </div>
  );
}
