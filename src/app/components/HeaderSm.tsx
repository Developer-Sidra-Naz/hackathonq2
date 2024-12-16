import React from 'react';
import { FaUser } from 'react-icons/fa';
import { RiSearch2Line } from 'react-icons/ri';
import { VscSettings } from 'react-icons/vsc';
import Link from 'next/link';
import { IoHeartSharp, IoNotifications } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';

export default function HeaderSm() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white py-4 px-5 shadow-md flex flex-wrap items-center justify-between">
        {/* Logo & Search Bar */}
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto space-y-4 lg:space-y-0">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">MORENT</div>
          <Link href="/profile">
            <div className="w-10 h-10 rounded-full border overflow-hidden border-gray-300 flex items-center justify-center">
              <FaUser className="text-gray-600" />
            </div>
          </Link>

          {/* Search Bar */}
          <div className="relative w-full lg:w-[492px] h-[44px] sm:m-3">
            <input
              type="text"
              placeholder="Search something here"
              className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ borderRadius: '60px' }}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              <RiSearch2Line />
            </div>
            <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              <VscSettings />
            </div>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          {/* Favorites */}
          {/* <Link href="/favourite">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center ">
              <IoHeartSharp className="text-xl text-gray-600 cursor-pointer" />
            </div>
          </Link>
          {/* Notifications */}
          {/* <Link href="/notification">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center relative">
              <IoNotifications className="text-xl text-gray-600 cursor-pointer" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
          </Link> */}
          {/* Settings */}
          {/* <Link href="/setting">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <IoMdSettings className="text-xl text-gray-600 cursor-pointer" />
            </div>
          </Link> */} 
          {/* Profile */}
         
        </div>
      </nav>
    </>
  );
}
