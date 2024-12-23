"use client";
import { IoIosStarOutline } from "react-icons/io";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function CarDetail() {
  return (
    <div>
      <main className="flex flex-col">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row bg-gray-50 p-4 lg:p-6 m-2 space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Left Section */}
          <div className="relative bg-[url('/bg2.jpg')] bg-cover bg-center w-full lg:w-1/2 p-6 rounded-lg">
            <h1 className="text-xl lg:text-2xl font-bold text-white">
              Sports car with the best <br />
              design and acceleration
            </h1>
            <h3 className="text-white mt-2 text-sm lg:text-base">
              Safely and comfort while driving <br />
              futuristic and elegant sports car
            </h3>
            <Image
              src="/car2.png"
              width={300}
              height={100}
              style={{ objectFit: "cover" }}
              alt="Car"
              className="my-5 mx-auto w-full lg:w-3/4"
            />
          </div>
          {/* Right Section */}
          <div className="relative bg-white w-full lg:w-1/2 p-6 rounded-lg">
            <h1 className="text-xl lg:text-2xl font-bold">Nissan GT - R</h1>
            <div className="flex items-center mt-2">
              <IoIosStarOutline />
              <IoIosStarOutline />
              <IoIosStarOutline />
              <IoIosStarOutline />
              <IoIosStarOutline />
              <span className="ml-2 text-gray-500 text-sm">440+ Reviewer</span>
            </div>
            <p className="text-gray-500 mt-4 text-sm lg:text-base">
              NISMO has become the embodiment of Nissan&apos;s outstanding
              performance, inspired by the most unforgiving proving ground, the
              &#34;race track&#34;.
            </p>
            {/* Specifications */}
            <div className="flex flex-wrap mt-5">
              <div className="w-1/2 sm:w-1/4 mb-4">
                <h3 className="text-gray-500">Type Car</h3>
                <h3 className="text-gray-900">Sport</h3>
              </div>
              <div className="w-1/2 sm:w-1/4 mb-4">
                <h3 className="text-gray-500">Capacity</h3>
                <h3 className="text-gray-900">2 Person</h3>
              </div>
              <div className="w-1/2 sm:w-1/4 mb-4">
                <h3 className="text-gray-500">Steering</h3>
                <h3 className="text-gray-900">Manual</h3>
              </div>
              <div className="w-1/2 sm:w-1/4 mb-4">
                <h3 className="text-gray-500">Gasoline</h3>
                <h3 className="text-gray-900">70L</h3>
              </div>
            </div>
            {/* Pricing and Rent Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-7">
              <div className="flex items-baseline">
                <h3 className="text-2xl font-bold">$80.0/</h3>
                <p className="text-gray-500 text-sm ml-1">day</p>
              </div>
              <Link href="/billing">
                <button className="w-full sm:w-auto mt-4 sm:mt-0 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Reviews Section */}
      <div className="bg-white m-2 p-4">
        <div className="flex items-center">
          <h2 className="font-semibold">Reviews</h2>
          <div className="ml-2 bg-blue-700 text-white px-3 py-1 rounded-sm">
            13
          </div>
        </div>
        {/* Individual Review */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex mt-5">
            <div className="rounded-full bg-black p-3 h-12 w-12 flex items-center justify-center">
              <FaUser className="text-gray-600" />
            </div>
            <div className="ml-3">
              <h3 className="font-semibold">Reviewer Name</h3>
              <h4 className="text-gray-500 text-sm">Position</h4>
              <p className="text-gray-500 mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                praesentium expedita exercitationem, qui ipsa saepe cumque,
                quos quam perferendis impedit harum consectetur necessitatibus
                rerum dolor nobis.
              </p>
            </div>
          </div>
        ))}
        {/* Show All Button */}
        <div className="text-center mt-4">
          <Link href="#">
            <p className="text-blue-500 hover:text-blue-700">Show All</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
