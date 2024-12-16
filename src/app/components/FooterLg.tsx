import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import { FaRegCopyright } from "react-icons/fa6";
import React from "react";

export default function FooterLg() {
  return (
    <div className="bg-white">
      {/* Top Section */}
      <div className="flex flex-wrap lg:flex-nowrap pt-10 pb-5">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 pl-5 lg:pl-10">
          <h1 className="text-blue-600 font-bold text-2xl">MORENT</h1>
          <p className="text-gray-500 pb-5 lg:pb-10 py-4 text-sm">
            Our vision to provide convenience <br /> and help increase your sales business.
          </p>
        </div>
        {/* Right Section */}
        <div className="flex flex-wrap w-full lg:w-1/2 pr-5 lg:pr-10">
          {/* Column 1 */}
          <div className="w-1/2 lg:w-1/3 p-4">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg">About</li>
              <li className="text-gray-500 hover:text-gray-800"><Link href="">How it works</Link></li>
              <li className="text-gray-500 hover:text-gray-800"><Link href="">Featured</Link></li>
              <li className="text-gray-500 hover:text-gray-800"><Link href="">Partnership</Link></li>
              <li className="text-gray-500 hover:text-gray-800"><Link href="">Business Relation</Link></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="w-1/2 lg:w-1/3 p-4">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg">Community</li>
              <li className="text-gray-500 hover:text-gray-800"><Link href="">Events</Link></li>
              <li className="text-gray-500 hover:text-gray-800"><Link href="">Blogs</Link></li>
              <li className="text-gray-500 hover:text-gray-800"><Link href="">Podcast</Link></li>
              <li className="text-gray-500 hover:text-gray-800"><Link href="">Invite a friend</Link></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="w-1/2 lg:w-1/3 p-4">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg">Socials</li>
              <li className="text-gray-500 hover:text-gray-800"><Link href="">Discord</Link></li>
              <li className="text-gray-500 hover:text-gray-800"><Link href="">Instagram</Link></li>
              <li className="text-gray-500 hover:text-gray-800"><Link href="">Twitter</Link></li>
              <li className="text-gray-500 hover:text-gray-800"><Link href="">Facebook</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <Separator />


      {/* Bottom Section */}
      <div className="flex flex-wrap  justify-between items-center p-5 lg:p-10">
        {/* Left Side */}
        <div className="flex items-center gap-2 font-bold w-full lg:w-auto mb-4 lg:mb-0">
          <FaRegCopyright className="text-gray-500" />
          <span>2022 MORENT. All rights reserved</span>
        </div>
        {/* Right Side */}
        <div className="flex gap-5 lg:gap-10 font-semibold w-full lg:w-auto justify-center lg:justify-end">
          <span>Privacy & Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
}