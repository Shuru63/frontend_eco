import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Correct import statement for useSelector

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(state.length)

  return (
    <div>
      <nav className="bg-white-800 border-2" >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-14 w-15" src="logo.png" alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">

                  <NavLink to='/content' className="text-lg text-white-00 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home </NavLink>
                  <NavLink to='/content' className=" text-lg text-white-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Product</NavLink>
                  <NavLink to='/About' className=" text-lg text-white-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</NavLink>
                  <NavLink to='/contact' className="text-lg text-white-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div><NavLink to ="/"className="mr-2 bg-gray-700 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mt-auto  inline-block max-w-content mt-4" aria-current="page">
                  log in</NavLink>
                  <NavLink to ="/cart"className="bg-gray-700 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 mt-auto  inline-block max-w-content mt-4"  aria-current="page">Cart({state.length})</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">

            <NavLink to='/content' className="text-white-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</NavLink>
            <NavLink to='/product' className="text-white-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Product</NavLink>
            <NavLink to='/About' className="text-white-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Abouts</NavLink>
            <NavLink to='/contact' className="text-white-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
