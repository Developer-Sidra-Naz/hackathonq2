import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdRadioButtonChecked } from "react-icons/md";

export default function PickDrop(){
return(
    <div>
          {/* Section 2 */}
              <section className="flex flex-col gap-4 lg:gap-8 lg:flex-row my-5 mx-4 lg:mx-8 rounded-lg p-5">
                {/* Pick-Up & Drop-Off Container */}
                <div className="flex flex-col lg:flex-row w-full gap-5">
                  {/* Pick-Up Section */}
                  <div className="flex-1 bg-white p-5 rounded-md">
                    <div className="flex items-center gap-2 mb-3">
                      <MdRadioButtonChecked className="text-blue-700 hover:bg-blue-900" />
                      <p className="font-bold">Pick-Up</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      {/* Location */}
                      <div className="flex-1">
                        <h2 className="font-bold text-sm">Location</h2>
                        <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
                          <p>Select your City</p>
                          <RiArrowDropDownLine className="w-4 h-4" />
                        </div>
                      </div>
                      
                      {/* Date */}
                      <div className="flex-1">
                        <h2 className="font-bold text-sm">Date</h2>
                        <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
                          <p>Select your date</p>
                          <RiArrowDropDownLine className="w-4 h-4" />
                        </div>
                      </div>
                      {/* Time */}
                      <div className="flex-1">
                        <h2 className="font-bold text-sm">Time</h2>
                        <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
                          <p>Select your time</p>
                          <RiArrowDropDownLine className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
        
                  {/* Switch Icon */}
                  <div className="w-[60px] p-5 lg:p-5 bg-blue-600 hover:bg-blue-900 h-[60px] text-white lg:mt-8 rounded-md mx-auto lg:mx-0 flex items-center justify-center">
                    <HiOutlineArrowsUpDown className="h-5 w-5" />
                  </div>
        
                  {/* Drop-Off Section */}
                  <div className="flex-1 bg-white p-5 rounded-md">
                    <div className="flex items-center gap-2 mb-3">
                      <MdRadioButtonChecked className="text-blue-700 hover:bg-blue-900" />
                      <p className="font-bold">Drop-Off</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      {/* Location */}
                      <div className="flex-1">
                        <h2 className="font-bold text-sm">Location</h2>
                        <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
                          <p>Select your City</p>
                          <RiArrowDropDownLine className="w-4 h-4" />
                        </div>
                      </div>
                      {/* Date */}
                      <div className="flex-1">
                        <h2 className="font-bold text-sm">Date</h2>
                        <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
                          <p>Select your date</p>
                          <RiArrowDropDownLine className="w-4 h-4" />
                        </div>
                      </div>
                      {/* Time */}
                      <div className="flex-1">
                        <h2 className="font-bold text-sm">Time</h2>
                        <div className="flex items-center justify-between text-gray-500 text-xs mt-1">
                          <p>Select your time</p>
                          <RiArrowDropDownLine className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    </div>
)
}