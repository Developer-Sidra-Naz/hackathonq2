import { Slider } from "@/components/ui/slider"


export default function Side(){
    return(
        <div>
                   <div className=" hidden lg:block bg-white">
                <div className="p-10 mt-2">
                    <h3 className="text-gray-500">TYPE</h3>
                    <ul className="">
                        <li className="mt-3 flex gap-2"><input type="checkbox" checked/> Sport <span className="text-gray-500">(10)</span></li>
                        <li className="mt-3 flex gap-2"><input type="checkbox" checked/>SUV <span className="text-gray-500">(12)</span></li>
                        <li className="mt-3 flex gap-2"><input type="checkbox" />MPV <span className="text-gray-500">(16)</span></li>
                        <li className="mt-3 flex gap-2"><input type="checkbox" />Sedan <span className="text-gray-500">(20)</span></li>
                        <li className="mt-3 flex gap-2"><input type="checkbox" />Coupe <span className="text-gray-500">(14)</span></li>
                        <li className="mt-3 flex gap-2"><input type="checkbox" />Hatchback <span className="text-gray-500">(14)</span></li>
                    </ul>
                </div>
                <div className="p-10 mx-2">
                    <h3 className="text-gray-500">CAPACITY</h3>
                    <ul className="">
                        <li className="mt-3 flex gap-2"><input type="checkbox" checked/> 2 Persons <span className="text-gray-500">(10)</span></li>
                        <li className="mt-3 flex gap-2"><input type="checkbox" />4 Persons <span className="text-gray-500">(14)</span></li>
                        <li className="mt-3 flex gap-2"><input type="checkbox" />6 Persons <span className="text-gray-500">(12)</span></li>
                        <li className="mt-3 flex gap-2"><input type="checkbox" checked/>8 or More <span className="text-gray-500">(16)</span></li>
                          </ul>
                </div>
                
            <div className="mx-5">
            <Slider defaultValue={[33]} max={100} step={1} className="text-blue-600"/>
            <br />
            <h2 className="text-gray-600">Max. $100.00</h2>

            </div>
            </div>



        </div>
    )
}