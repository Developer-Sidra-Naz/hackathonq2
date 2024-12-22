import { IoMdRadioButtonOff } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { MdRadioButtonChecked } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
export default function Billing() {
  return (
    <div className="">
      <div className="bg-gray-50 w-full lg:flex ">
        <div className="p-2 w-full lg:w-2/3">
          <div className=" p-2 w-full">
            {/* Info area */}
            <div className="bg-white rounded-lg p-3 m-2">
              <div className="w-full">
                <h1 className="text-2xl font-bold">Billing Info</h1>
              </div>
              <div className="flex">
                <div className="w-full lg:w-1/2 text-gray-500">
                  <h2 className="text-sm">Please enter your billing info</h2>
                </div>
                <div className="w-full lg:w-1/2 text-gray-500">
                  <h2 className="flex justify-end text-sm">Step 1 of 4</h2>
                </div>
              </div>
              {/* personal data */}
              <div className="lg:flex">
                <div className="w-full lg:w-1/2 p-2 m-2">
                  <h1 className="text-1xl font-semibold">Name</h1>
                  <Input
                    placeholder="Your Name"
                    className="bg-gray-50 h-14 m-2 border-none"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-2 m-2">
                  <h1 className="text-1xl font-semibold">Phone Number</h1>
                  <Input
                    placeholder="Phone number"
                    className="bg-gray-50 h-14 m-2 border-none"
                  />
                </div>
              </div>

              <div className="lg:flex">
                <div className="w-full lg:w-1/2 p-2 m-2">
                  <h1 className="text-1xl font-semibold">Address</h1>
                  <Input
                    placeholder="Address"
                    className="bg-gray-50 h-14 m-2 border-none"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-2 mx-2">
                  <h1 className="text-1xl font-semibold">Town/City</h1>
                  <Input
                    placeholder="Town or City"
                    className="bg-gray-50 h-14 m-2 border-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rental Info */}

          {/* pick-up */}
          <div className=" p-2 w-full">
            <div className="bg-white rounded-lg p-3 m-2">
              <div className="w-full">
                <h1 className="text-2xl font-bold">Rental Info</h1>
              </div>
              <div className="flex">
                <div className="w-full lg:w-1/2 text-gray-500">
                  <h2 className="text-sm">Please enter your rental date</h2>
                </div>

                <div className="w-full lg:w-1/2 text-gray-500 ">
                  <h2 className="flex justify-end text-sm">Step 2 of 4</h2>
                </div>
              </div>
              <div className="flex items-center gap-2 m-2">
                <MdRadioButtonChecked className="text-blue-700 hover:bg-blue-900" />
                <p className="font-bold">Pick-Up</p>
              </div>

              <div className="lg:flex">
                <div className="w-full lg:w-1/2 p-2 m-2">
                  <h1 className="text-1xl font-semibold">Locations</h1>
                  <Input
                    placeholder="Select your city"
                    className="bg-gray-50 h-14 m-2 border-none"
                  />
                </div>

                <div className="w-full lg:w-1/2 p-2 m-2">
                  <h1 className="text-1xl font-semibold">Date</h1>
                  <Input
                    placeholder="Select your date"
                    className="bg-gray-50 h-14 m-2 border-none"
                  />
                </div>
              </div>

              <div className="flex">
                <div className="w-full lg:w-1/2 p-2 m-2">
                  <h1 className="text-1xl font-semibold">Time</h1>
                  <Input
                    placeholder="Select your time"
                    className="bg-gray-50 h-14 m-2 border-none"
                  />
                </div>
              </div>
              {/* dropoff */}
              <div className="flex items-center gap-2 m-2">
                <MdRadioButtonChecked className="text-blue-700 hover:bg-blue-900" />
                <p className="font-bold">Drop-Off</p>
              </div>

              <div className="flex">
                <div className="w-full lg:w-1/2 p-2 m-2">
                  <h1 className="text-1xl font-semibold">Locations</h1>
                  <Input
                    placeholder="Select your city"
                    className="bg-gray-50 h-14 m-2 border-none"
                  />
                </div>

                <div className="w-full lg:w-1/2 p-2 m-2">
                  <h1 className="text-1xl font-semibold">Date</h1>
                  <Input
                    placeholder="Select your date"
                    className="bg-gray-50 h-14 m-2 border-none"
                  />
                </div>
              </div>

              <div className="flex">
                <div className="w-full lg:w-1/2 p-2 m-2">
                  <h1 className="text-1xl font-semibold">Time</h1>
                  <Input
                    placeholder="Select your time"
                    className="bg-gray-50 h-14 m-2 border-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* payment */}

          <div className=" p-2 w-full">
            <div className="bg-gray-50 rounded-lg p-3 m-2">
              <div className="w-full">
                <h1 className="text-2xl font-bold">Payment Method</h1>
              </div>
              <div className="flex">
                <div className="w-full lg:w-1/2 text-gray-500">
                  <h2 className="text-sm">Please enter your payment method</h2>
                </div>

                <div className="w-full lg:w-1/2 text-gray-500 ">
                  <h2 className="flex justify-end">Step 3 of 4</h2>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg m-2">
                <div className="flex">
                  <div className="flex items-center w-full lg:w-1/2 gap-2 m-2">
                    <MdRadioButtonChecked className="text-blue-700 hover:bg-blue-900" />

                    <p className="font-bold sm:text-base lg:text-md">Credit Card</p>
                  </div>
                  <div className="relative w-full h-[50px]">
                    <Image
                      src="/visa.png"
                      width={100}
                      height={30}
                      alt="MasterCard"
                      className="rounded-md object-cover absolute right-0 bottom-0"
                    />
                  </div>
                </div>

                <div className="lg:flex">
                  <div className="w-full lg:w-1/2 p-2 m-2">
                    <h1 className="text-1xl font-semibold">Card Number</h1>
                    <Input
                      placeholder="Card Number"
                      className="bg-gray-50 h-14 m-2 border-none"
                    />
                  </div>

                  <div className="w-full lg:w-1/2 p-2 m-2">
                    <h1 className="text-1xl font-semibold">Expiration Date</h1>
                    <Input
                      placeholder="DD/MM/YY"
                      className="bg-gray-50 h-14 m-2 border-none"
                    />
                  </div>
                </div>

                <div className="lg:flex">
                  <div className="w-full lg:w-1/2 p-2 m-2">
                    <h1 className="text-1xl font-semibold">Card Holder</h1>
                    <Input
                      placeholder="Card Holder"
                      className="bg-gray-50 h-14 m-2 border-none"
                    />
                  </div>

                  <div className="w-full lg:w-1/2 p-2 m-2">
                    <h1 className="text-1xl font-semibold">CVC</h1>
                    <Input
                      placeholder="CVC"
                      className="bg-gray-50 h-14 m-2 border-none"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-full flex bg-gray-100 mt-3 p-5 rounded-md">
                <div className="my-1 mx-2">
                  <IoMdRadioButtonOff />
                </div>
                <div className="mx-2">
                  <h1>PayPal</h1>
                </div>
                <div className="relative w-full">
                  <Image
                    src="/paypal.png"
                    width={100}
                    height={50}
                    alt="paypal"
                    className="rounded-md object-cover absolute right-0 bottom-0"
                  />
                </div>
              </div>

              <div className="w-full lg:w-full flex bg-gray-100 mt-3 p-5 rounded-md">
                <div className="my-1 mx-2">
                  <IoMdRadioButtonOff />
                </div>
                <div className="mx-2">
                  <h1>Bitcoin</h1>
                </div>
                <div className="relative w-full">
                  <Image
                    src="/bitcoin.png"
                    width={100}
                    height={50}
                    alt="bitcoin"
                    className="rounded-md object-cover absolute right-0 bottom-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* confirmation */}
          <div className=" p-2 w-full">
            <div className="bg-gray-50 rounded-lg p-3 m-2">
              <div className="w-full">
                <h1 className="text-2xl font-bold">Confirmation</h1>
              </div>
              <div className="flex mb-6">
                <div className="w-full lg:w-2/3 text-gray-500 ">
                  <h2 className="text-sm">
                    we are getting to the end, just few clicks and your rental
                    is ready!
                  </h2>
                </div>

                <div className="w-full lg:w-1/3 text-gray-500 ">
                  <h2 className="flex justify-end">Step 4 of 4</h2>
                </div>
              </div>

              <div className="w-full lg:w-full flex bg-gray-100 mt-3 p-5 rounded-md">
                <div className="my-1 mx-2">
                  <MdOutlineCheckBoxOutlineBlank className="text-gray-500" />
                </div>
                <div className="mx-2 font-semibold lg:text-1xl sm:text-base">
                  <h1>
                    I agree with sending an Marketing and newsletter emails. No
                    spam, promissed!
                  </h1>
                </div>
              </div>

              <div className="w-full lg:w-full flex bg-gray-100 mt-3 p-5 rounded-md">
                <div className="my-1 mx-2">
                  <MdOutlineCheckBoxOutlineBlank className="text-gray-500" />
                </div>
                <div className="mx-2 font-semibold lg:text-1xl sm:text-base">
                  <h1>
                    I agree with our terms and conditions and privacy policy.
                  </h1>
                </div>
              </div>

              <Link href="admin">
                <button className=" m-3 px-5 py-3 bg-blue-800 rounded-md hover:bg-blue-900 text-white">
                  Rent Now
                </button>
              </Link>
              <div>
                <Image
                  src="/security.png"
                  width={50}
                  height={50}
                  alt="security"
                  className="rounded-md object-cover m-3"
                />
              </div>
              <div className="p-5">
                <h1 className="font-semibold">All your data are safe</h1>
                <p className="text-gray-500 text-sm">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 mt-5 mr-5 w-full lg:w-1/3">
          <div className="w-full bg-white rounded-lg p-5">
            <div>
              <h2 className="text-2xl font-semibold">Rental Summary</h2>
              <p className="text-gray-500 text-sm mt-2">
                Prices may change depending on the length of the rental and the
                price of your rental car.
              </p>
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
                  <IoIosStarOutline className="mt-1" />
                  <IoIosStarOutline className="mt-1" />
                  <IoIosStarOutline className="mt-1" />
                  <IoIosStarOutline className="mt-1" />
                  <IoIosStarOutline className="mt-1" />
                  <h2 className="text-gray-500 ">440+ Reviewer</h2>
                </div>
              </div>
            </div>
            <hr className="my-4" />

            <div className="w-full flex justify-between items-center mt-5">
              <p className="text-gray-500">Subtotal</p>
              <span className="text-black">$80.00</span>
            </div>

            <div className="w-full flex justify-between items-center mt-5">
              <p className="text-gray-500">Tax</p>
              <span className="text-black">$0</span>
            </div>
            <div className="relative">
              <Input
                placeholder="Apply promo code"
                className="bg-gray-50 h-14 m-2 border-none pl-4 pr-14"
              />
              <Link href="admin">
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black px-4 py-2 rounded">
                  Apply Now
                </button>
              </Link>
            </div>
            <div className="w-full flex mt-5 mb-3">
                <div className="w-2/3">
                    <h1 className="font-semibold">Total Rental Price</h1>
                    <p className="text-gray-500 text-[12px]">Overall price and includes rental discounts</p>
                </div>
                <div className="w-1/3">
                    <h1 className="font-semibold text-2xl p-2 ml-2">
                        $80.00
                    </h1>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
