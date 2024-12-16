import PickDrop from "./PickDrop";
import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div>
      <section className="bg-gray-50 my-5 px-4 lg:px-8 text-white rounded-lg flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="relative bg-cover bg-center bg-[url('/bg1.jpg')] w-full lg:w-1/2 h-[300px] lg:h-[360px] mb-5 lg:mb-0 lg:mr-2 p-5 rounded-lg">
          <h2 className="text-mg lg:text-2xl font-bold">
            The Best Platform <br /> for Car Rental
          </h2>
          <p className="mt-2 text-sm lg:text-base">
            Ease of doing car rental safely and <br /> reliably. Of course at a
            low price.
          </p>
          <button className="bg-[#3563E9] hover:bg-blue-800 px-4 py-2 lg:py-3 rounded-md mt-4 lg:mt-6">
            Rental Car
          </button>
          <div className="relative w-full lg:w-[406px] h-[100px] lg:h-[116px] mt-4 lg:mx-16">
        
            <Image 
  src="/car1.png"
  width={500} 
  height={300} 
  style={{ objectFit: "cover" }} 
  alt="Car 1"
  className="rounded-md"
/>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative bg-cover bg-center bg-[url('/bg2.jpg')] w-full lg:w-1/2 h-[300px] lg:h-[360px] lg:ml-2 p-5 rounded-lg">
          <h2 className="text-xl lg:text-2xl font-bold">
            Easy way to rent a <br /> car at a low price
          </h2>
          <p className="mt-2 text-sm lg:text-base">
            Providing cheap car rental services <br /> and safe and comfortable
            facilities.
          </p>
          <button className="bg-[#45A6FF] hover:bg-[#192f6e] px-4 py-2 lg:py-3 rounded-md mt-4 lg:mt-6">
            Rental Car
          </button>
          <div className="relative w-full lg:w-[406px] h-[100px] lg:h-[116px] mt-4 lg:mx-16">
          <Image 
  src="/car2.png"
  width={500} 
  height={300} 
  style={{ objectFit: "cover" }} 
  alt="Car 1"
  className="rounded-md"
/>
          </div>
        </div>
      </section>

      {/* Section 2 */}
 <PickDrop/>
    </div>
  );
};

export default HeroSection;
