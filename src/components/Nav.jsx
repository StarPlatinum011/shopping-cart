import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpenIcon, ShoppingBagIcon, Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'


export default function Navbar() {

  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
        {/* Logo */}
        <div className=" flex text-2x1 cursor-pointer items-center gap-1">
          <BookOpenIcon className="w-8 h-7 text-blue-700"/>
          <span className="font-bold">Retro Books</span>
        </div>
        
        {/* Hamburger menu */}
        <div onClick={()=> setIsOpen(!isOpen)} className="w-7 h-7 absolute right-7 top-7 cursor-pointer md:hidden ">
          {
            isOpen? <XMarkIcon/>: <Bars3BottomRightIcon/>
          }
        
        </div>

        {/* Navigation links */}
        <div>
          <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]
           left-0 w-full transition-all bg-white duration-500 ease-in ${isOpen? 'top-12' : 'top-[-490px]'}`}>
            <li className="font-semibold my-7 md:my-0 md:ml-8"><Link to={'/'}>Home</Link></li>
            <li className="font-semibold my-7 md:my-0 md:ml-8"><Link to={'/#about'}>About</Link></li>
            <li className="flex font-semibold my-7 md:my-0 md:ml-8"><Link to={'/cart'}><ShoppingBagIcon className="w-5 h-5 text-black-700"/></Link> <span className="cursor-pointer">1</span></li>
            <button className="btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static">Register</button>
          </ul>
        </div>

      </div>
      
    </div>
  );
}
