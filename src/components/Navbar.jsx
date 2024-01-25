import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import logo from "../logo.png";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex flex-row justify-around items-center h-20   mx-auto w-[100%] bg-gray-800">
      <NavLink to="/">
        <div className="ml-6">
          <img src="./logo.png" className="h-14" alt="Logo" />
        </div>
      </NavLink>
      <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
        <NavLink to="/">
          <p className="hover:text-green-600  cursor-pointer duration-300 transition-all ease-in ">
            Home
          </p>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative ">
            <FaShoppingCart className="text-2xl  " />
            {
              cart.length > 0 &&
              <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 grid justify-items-center animate-bounce">{cart.length}</span>
            }
          </div>
        </NavLink>
      </div>
    </div>
  );
};


export default Navbar