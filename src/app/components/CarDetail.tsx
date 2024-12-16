"use client";
import { IoIosStarOutline } from "react-icons/io";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function CarDetail() {
  return (
    <div>
      <main className="flex">
        {/* right section */}
        <div className="flex w-full lg:full bg-gray-50 p-3">
          {/* left in right */}
          <div className="relative bg-[url('/bg2.jpg')] w-full lg:w-1/2 p-3 rounded-lg m-2">
            <h1 className="m-2 font-bold text-2xl text-white">
              Sports car with the best <br />
              design and acceleration
            </h1>
            <h3 className="text-white mx-2 my-1">
              Safely and comfort while driving <br />
              futuristic and elegant sports car
            </h3>
            <Image
              src="/car2.png"
              width={300}
              height={100}
              style={{ objectFit: "cover" }}
              alt="Car 1"
              className="my-5 ml-7"
            />
          </div>
          {/* right in right */}
          <div className="relative bg-white w-full lg:w-1/2 p-4 rounded-lg m-2">
            <h1 className="font-bold text-2xl">Nissan GT - R</h1>
            <div className="flex mt-1">
              <IoIosStarOutline />
              <IoIosStarOutline />
              <IoIosStarOutline />
              <IoIosStarOutline />
              <IoIosStarOutline />
              <h2 className="text-gray-500">440+ Reviewer</h2>
            </div>
            <div className="text-gray-500 mt-5 sm:text-sm">
              NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </div>

            <div className="w-full flex mt-7">
              <div className="w-1/4">
                <h3 className="text-gray-500">Type Car</h3>
              </div>
              <div className="w-1/4">
                <h3 className="text-gray-900">Sport</h3>
              </div>
              <div className="w-1/4">
                <h3 className="text-gray-500">Capacity</h3>
              </div>
              <div className="w-1/4">
                <h3 className="text-gray-900">2 Person</h3>
              </div>
            </div>
            <div className="w-full flex mt-4">
              <div className="w-1/4">
                <h3 className="text-gray-500">Steering</h3>
              </div>
              <div className="w-1/4">
                <h3 className="text-gray-900">Manual</h3>
              </div>
              <div className="w-1/4">
                <h3 className="text-gray-500">Gasoline</h3>
              </div>
              <div className="w-1/4">
                <h3 className="text-gray-900">70L</h3>
              </div>
            </div>

            <div className="my-7 flex">
              <div className="flex w-4/6">
                <h3 className="font-bold text-2xl">$80.0/</h3>
                <br />
                <div>
                  <p className="text-gray-500 text-sm mt-2">days</p>
                </div>
              </div>

              <div className="w-2/6">
                <button className="lg:ml-12 px-2 py-2 bg-blue-700 rounded-md hover:bg-blue-800 text-white">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* review section */}
      <div className="bg-white m-2 p-3">
        <div className="flex">
          <div>
            <h2 className="text-semibold">Reviews</h2>{" "}
          </div>
          <div className="bg-blue-700 text-white px-3  rounded-sm mx-2">
            {" "}
            13
          </div>
        </div>
        <div className="flex mt-8">
          <div className="rounded-full bg-black m-1 p-3 h-10 w-10">
            {" "}
            <FaUser className="text-gray-600" />
          </div>
          <div className="mt-1">
            <h3 className="font-semibold text-1xl">Alex Stanton</h3>
            <h3 className="text-gray-500">CEO of Bukalapak</h3>
          </div>{" "}
          <br />
          <div></div>
        </div>
        <p className="text-gray-500 my-4 mx-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          praesentium expedita exercitationem, qui ipsa saepe cumque, quos quam
          perferendis impedit harum consectetur necessitatibus rerum dolor
          nobis. Officiis, aspernatur dolor? Illo optio architecto provident
          ratione, eaque corporis eos consequuntur consectetur maxime hic
          inventore accusamus tenetur nulla non soluta pariatur facilis fugit?
        </p>
      </div>

      <div className="bg-white m-2 p-3">
        <div className="flex mt-8">
          <div className="rounded-full bg-black m-1 p-3 h-10 w-10">
            {" "}
            <FaUser className="text-gray-600" />
          </div>
          <div className="mt-1">
            <h3 className="font-semibold text-1xl">Skylar Dias</h3>
            <h3 className="text-gray-500">CEO of Amazon</h3>
          </div>{" "}
          <br />
          <div></div>
        </div>
        <p className="text-gray-500 my-4 mx-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          praesentium expedita exercitationem, qui ipsa saepe cumque, quos quam
          perferendis impedit harum consectetur necessitatibus rerum dolor
          nobis. Officiis, aspernatur dolor? Illo optio architecto provident
          ratione, eaque corporis eos consequuntur consectetur maxime hic
          inventore accusamus tenetur nulla non soluta pariatur facilis fugit?
        </p>
      </div>
<div className="flex">  <div className="text-gray-500 hover:text-gray-800 m-auto items-center justify-center">
  <Link href="#"><p>Show All       </p></Link></div>

</div>
    </div>
  );
}
