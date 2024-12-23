import CarDetail from "../components/CarDetail";
import PopularCarParent from "../components/PopularCarParent";
import Side from "../components/Side";

export default function Detail(){
  return(
    <div>
     <div className="flex">
      <div className="w-1/4">
      <Side/>
      </div>
      <div className="w-full lg:w-3/4">
      <CarDetail/>
      <PopularCarParent/>
      </div>
      </div>
    </div>
  )
}