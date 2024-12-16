
import PickDrop from "../components/PickDrop"
import PopularCarParent from "../components/PopularCarParent"
import Side from "../components/Side"

export default function View(){

    return(
    <main>
        {/* left section */}
        <div className="flex w-full ">
           <div className="w-1/4">
           <Side/>
            </div> 
            {/* right section */}
            <div className="sm: w-full lg:w-3/4 bg-gray-50">
            <PickDrop/>
            <PopularCarParent/>
            </div>
        </div>
    </main>
    )
}