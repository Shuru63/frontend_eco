import React from 'react'
const Homepage = () => {
  return (
    <div>
      <nav className="bg-white-800 border-2" >
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-14 w-15" src="logo.png" alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          
            <a href="#" className="text-lg text-white-00 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home </a>
            <a href="#" className=" text-lg text-white-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Product</a>
            <a href="#" className=" text-lg text-white-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
            <a href="#" className="text-lg text-white-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="relative ml-3">
          <div>
          <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium border-2 border-gray" aria-current="page">Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
     
      <a href="#" className="text-white-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
      <a href="#" className="text-white-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Product</a>
      <a href="#" className="text-white-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Abouts</a>
      <a href="#" className="text-white-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Homepage
