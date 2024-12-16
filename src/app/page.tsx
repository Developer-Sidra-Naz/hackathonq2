"use client"
import HeroSection from "./components/HeroSection";
import PopularCarParent from "./components/PopularCarParent";
import Link from "next/link";
export default function Home(){
  return(
    <div>
     <div className="bg-gray-100">
     <HeroSection/>
     <div className="flex p-3 mx-5 justify-between">
  <div className="text-gray-500">
    <h1>Popular Car</h1>
  </div>
  <div>
    <Link href="/view" className="text-blue-500 hover:text-blue-700">
      View All
    </Link>
  </div>
</div>
<div className="w-full">
<PopularCarParent/>
</div>
    


     </div>
    </div>
  )
}