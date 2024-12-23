"use client"
import React from "react";
import { IoPeopleSharp } from "react-icons/io5";
import Link from "next/link";
import { FaRegLifeRing } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";

interface CarCardProps {
  carId: number;
  carImage: string;
  carName: string;
  Model: string;
  Capacity: string;
  carType: string;
  carSitting: string;
  carPrice: string;
}

const CarCard: React.FC<CarCardProps> = ({
  carId,
  carImage,
  carName,
  Model,
  Capacity,
  carType,
  carSitting,
  carPrice,
}) => (
  <div>
    <Link href="/detail">
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center lg:flex-row lg:m-2 w-full lg:w-[290px] transition-transform transform hover:scale-105">
        <div>
          <div className="flex w-full">
            <div className="w-[230px]">
              <h2 className="ml-2 lg:ml-3 w-full font-bold">{carName}</h2>
            </div>
            <div className="ml-5 lg:ml-1">
              <CiHeart className="text-2xl" />
            </div>
          </div>
          <div>
            <p className="text-[12px] text-gray-600 mx-2 lg:mx-3">{Model}</p>
          </div>
          <div className="w-11/12 h-32 my-8">
            <Image
              src={carImage}
              alt={carName}
              height={60}
              width={200}
              className="rounded-md object-cover"
            />
          </div>

          <div className="flex gap-4 text-[7px]">
            <div className="flex gap-1">
              <div className="text-[12px] text-gray-500 mt-1">
                <BsFillFuelPumpFill />
              </div>
              <div>
                <p className="text-sm text-gray-500">{Capacity}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-[12px] text-gray-500 mt-1">
                <FaRegLifeRing />
              </div>
              <div>
                <p className="text-sm text-gray-500">{carType}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-[12px] text-gray-500 mt-1">
                <IoPeopleSharp />
              </div>
              <div>
                <p className="text-sm text-gray-500">{carSitting}</p>
              </div>
            </div>
          </div>

          <div className="flex mt-3">
            <p className="text-[15px] font-bold mt-2">{carPrice}</p>
            <Link href="/billing">
            <button className="lg:ml-12 ml-12 px-2 py-2 bg-blue-700 rounded-md hover:bg-blue-800 text-white">
              Rent Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default CarCard;
