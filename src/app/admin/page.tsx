import { IoCarSportOutline } from "react-icons/io5";
import { RiHome5Line } from "react-icons/ri";
import { CgInsights } from "react-icons/cg";
import { MdSettingsBrightness } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { IoBagAddOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdRadioButtonChecked } from "react-icons/md";
import { Chart } from "../components/Chart";

export default function Admin() {
  return (
    <div>
      <div className="w-full lg:flex">
        {/* left section */}
        <section className="lg:w-1/5 w-full p-2 m-2">
          <h1 className="text-gray-400 p-2">MAIN MAENU</h1>
          <ul className="text-gray-500">
            <Link href="">
              <li className="gap-2 flex mx-1 hover:bg-blue-600 rounded-md p-3 hover:text-white">
                <RiHome5Line className="m-1" /> Dashboard
              </li>
            </Link>
            <Link href="">
              <li className="gap-2 flex mx-1 hover:bg-blue-600 rounded-md p-3 hover:text-white">
                <IoCarSportOutline className="m-1" /> Car Rent
              </li>
            </Link>
            <Link href="">
              <li className="gap-2 flex mx-1 hover:bg-blue-600 rounded-md p-3 hover:text-white">
                <CgInsights className="m-1" /> Insight
              </li>
            </Link>
            <Link href="">
              <li className="gap-2 flex mx-1 hover:bg-blue-600 rounded-md p-3 hover:text-white">
                <MdSettingsBrightness className="m-1" /> Reimburse
              </li>
            </Link>
            <Link href="">
              <li className="gap-2 flex mx-1 hover:bg-blue-600 rounded-md p-3 hover:text-white">
                <AiOutlineMessage className="m-1" /> Inbox
              </li>
            </Link>
            <Link href="">
              <li className="gap-2 flex mx-1 hover:bg-blue-600 rounded-md p-3 hover:text-white">
                <SlCalender className="m-1" /> Calender
              </li>
            </Link>
          </ul>

          <h1 className="text-gray-400 p-2">PREFERENCES</h1>
          <ul className="text-gray-500">
            <Link href="">
              <li className="gap-2 flex mx-1 hover:bg-blue-600 rounded-md p-3 hover:text-white">
                <RiSettingsLine className="m-1" /> Setting
              </li>
            </Link>
            <Link href="">
              <li className="gap-2 flex mx-1 hover:bg-blue-600 rounded-md p-3 hover:text-white">
                <AiOutlineExclamationCircle className="m-1" /> Help Centre
              </li>
            </Link>
            <Link href="">
              <li className="gap-2 flex mx-1 hover:bg-blue-600 rounded-md p-3 hover:text-white">
                <IoBagAddOutline className="m-1" /> Dark Mode{" "}
                <div className="flex gap-3 bg-gray-200 rounded-xl p-1 ">
                  <IoSunnyOutline className="hover:bg-blue-900 hover:text-white rounded-lg" />
                  <IoMoonOutline className="hover:bg-blue-900 hover:textwhite rounded-lg" />
                </div>
              </li>
            </Link>
          </ul>
        </section>
        {/* right section */}
        <section className="lg:flex w-full lg:w-4/5 bg-gray-100">
          {/* left side */}
          <div className="w-full lg:w-1/2 bg-white my-4 p-4 lg:ml-4 rounded-md">
            <div className="rounded-md bg">
              <Image
                src="/Maps.png"
                width={500}
                height={200}
                alt="Car 1"
                className="my-5"
                rounded-lg
              />
            </div>

            <div className="flex w-full mt-2">
              <div className="w-full lg:w-1/3 relative rounded-md p-2">
                {/* First Image */}
                <Image
                  src="/bg2.jpg"
                  width={500}
                  height={300}
                  alt="Background Image"
                  className="rounded-md object-cover h-[100px] w-full"
                />

                {/* Second Image */}
                <Image
                  src="/car2.png"
                  width={200}
                  height={200}
                  alt="Overlay Image"
                  className="absolute inset-0 m-auto rounded-full object-cover p-4"
                />
              </div>

              <div className="w-full lg:w-2/3 justify-between items-center p-5">
                <h1 className="font-bold text-2xl">Nissan GT - R</h1>
                <div className="flex mt-1">
                  <h2 className="text-gray-500 ">Sports Car</h2>
                </div>
              </div>
            </div>

            {/* Pick-Up & Drop-Off Container */}

            {/* Pick-Up Section */}
            <div className="flex-1 bg-white p-5 rounded-md">
              <div className="flex items-center gap-2 mb-3">
                <MdRadioButtonChecked className="text-blue-700 hover:bg-blue-900" />
                <p className="font-bold">Pick-Up</p>
              </div>
              <div className="lg:flex items-center justify-between gap-4 ">
                {/* Location */}
                <div className="flex-1 m-2 lg:m-0">
                  <h2 className="font-bold text-sm">Location</h2>
                  <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
                    <p>Kota Samarang</p>
                    <RiArrowDropDownLine className="w-4 h-4" />
                  </div>
                </div>

                {/* Date */}
                <div className="flex-1 m-2 lg:m-0">
                  <h2 className="font-bold text-sm">Date</h2>
                  <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
                    <p>20 July 2022</p>
                    <RiArrowDropDownLine className="w-4 h-4" />
                  </div>
                </div>
                {/* Time */}
                <div className="flex-1 m-2 lg:m-0">
                  <h2 className="font-bold text-sm">Time</h2>
                  <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
                    <p>07:00</p>
                    <RiArrowDropDownLine className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Drop-Off Section */}
            <div className="flex-1 bg-white p-5 rounded-md">
              <div className="flex items-center gap-2 mb-3">
                <MdRadioButtonChecked className="text-blue-700 hover:bg-blue-900" />
                <p className="font-bold">Drop-Off</p>
              </div>
              <div className="lg:flex items-center justify-between gap-4">
                {/* Location */}
                <div className="flex-1 m-2 lg:m-0">
                  <h2 className="font-bold text-sm">Location</h2>
                  <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
                    <p>Kota Samarang</p>
                    <RiArrowDropDownLine className="w-4 h-4" />
                  </div>
                </div>
                {/* Date */}
                <div className="flex-1 m-2 lg:m-0">
                  <h2 className="font-bold text-sm">Date</h2>
                  <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
                    <p>22 July 2022</p>
                    <RiArrowDropDownLine className="w-4 h-4" />
                  </div>
                </div>
                {/* Time */}
                <div className="flex-1 m-2 lg:m-0">
                  <h2 className="font-bold text-sm">Time</h2>
                  <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
                    <p>07:00</p>
                    <RiArrowDropDownLine className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="m-2 p-2">
                <h1 className="font-semibold ">Total Rental Price</h1>
                <p className="text-[12px] text-gray-500">
                  Overall prices and includes rental discounts
                </p>
              </div>
              <div>
                <h1 className="font-semibold m-2 p-2 text-2xl">$80.00</h1>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full lg:w-1/2 my-4 lg:mx-4 rounded-md bg-gray-100">
            <Chart />

            <div className="bg-white my-5 p-2 rounded-md">
              <div className=" flex justify-between ">
                {" "}
                <h1 className="text-2xl font-semibold">Recent Transaction</h1>
                <Link href="">
                  <button className="text-blue-500 hover:text-blue-800">
                    View All
                  </button>
                </Link>
              </div>
              <div className="w-full flex p-0 my-5">
                <div className=" flex w-2/3 lg:1/2">
                  <div>
                    <Image
                      src="/car2.png"
                      width={150}
                      height={150}
                      alt="Overlay Image"
                      className="inset-0 rounded-full object-cover p-4"
                    />
                  </div>
                  <div className="flex flex-col justify-center lg:items-end">
                    <h1 className="font-semibold text-[10px] lg:text-base">Nissan GT-R</h1>
                    <p className="text-gray-500 text-[8px] lg:text-sm">Sports Car</p>
                  </div>
                </div>
                <div className="w-1/3 lg:w-1/2 flex flex-col justify-center items-end">
                  <p className="text-gray-500">20 July</p>
                  <h2 className="text-xl font-semibold">$80.0</h2>
                </div>
              </div>
              <hr />

              <div className="w-full flex p-0 my-5">
                <div className=" flex w-2/3 lg:1/2">
                  <div>
                    <Image
                      src="/car1.png"
                      width={150}
                      height={150}
                      alt="Overlay Image"
                      className="inset-0 rounded-full object-cover p-4"
                    />
                  </div>
                  <div className="flex flex-col justify-center lg:items-end">
                    <h1 className="font-semibold text-[10px] lg:text-base">Koegnigsegg</h1>
                    <p className="text-gray-500 text-[8px] lg:text-sm">Sports Car</p>
                  </div>
                </div>
                <div className="w-1/3 lg:w-1/2 flex flex-col justify-center items-end">
                  <p className="text-gray-500">19 July</p>
                  <h2 className="text-xl font-semibold">$99.0</h2>
                </div>
              </div>
              <hr />

              <div className="w-full flex p-0 my-5">
                <div className=" flex w-2/3 lg:1/2">
                  <div>
                    <Image
                      src="/car3.png"
                      width={150}
                      height={150}
                      alt="Overlay Image"
                      className="inset-0 rounded-full object-cover p-4"
                    />
                  </div>
                  <div className="flex flex-col justify-center lg:items-end">
                    <h1 className="font-semibold text-[10px] lg:text-base">Rolls-Royce</h1>
                    <p className="text-gray-500 text-[8px] lg:text-sm">Sports Car</p>
                  </div>
                </div>
                <div className="w-1/3 lg:w-1/2 flex flex-col justify-center items-end">
                  <p className="text-gray-500">18 July</p>
                  <h2 className="text-xl font-semibold">$96.0</h2>
                </div>
              </div>
              <hr />

              <div className="w-full flex p-0 my-5">
                <div className=" flex w-2/3 lg:1/2">
                  <div>
                    <Image
                      src="/car9.png"
                      width={150}
                      height={150}
                      alt="Overlay Image"
                      className="inset-0 rounded-full object-cover p-4"
                    />
                  </div>
                  <div className="flex flex-col justify-center lg:items-end">
                    <h1 className="font-semibold text-[10px] lg:text-base">CR - V</h1>
                    <p className="text-gray-500 text-[8px] lg:text-sm">SUV</p>
                  </div>
                </div>
                <div className="w-1/3 lg:w-1/2 flex flex-col justify-center items-end">
                  <p className="text-gray-500">17 July</p>
                  <h2 className="text-xl font-semibold">$80.0</h2>
                </div>
              </div>
              

              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
