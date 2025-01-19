// "use client";
// import HeroSection from "./components/HeroSection";
// import PopularCarParent from "./components/PopularCarParent";
// import Link from "next/link";
// export default function Home() {
//   return (
//     <div>
//       <div className="bg-gray-100">
//         <HeroSection />
//         <div className="flex p-3 mx-5 justify-between">
//           <div className="text-gray-500">
//             <h1>Popular Car</h1>
//           </div>
//           <div>
//             <Link href="/view" className="text-blue-500 hover:text-blue-700">
//               View All
//             </Link>
//           </div>
//         </div>
//         <div className="w-full">
//           <PopularCarParent />
//         </div>
//       </div>
//     </div>
//   );
// }

import { sanityFetch } from "@/sanity/lib/fetch";
import { allProduct } from "@/sanity/lib/queries";
import { Car } from "lucide-react";
import Image from "next/image";


type Product ={
  _id:string;
  name:string;
  price:number;
  description:string;
  image:string
}

export default async function Home(){
  const Products : Product[] = await sanityFetch({query : allProduct})
  console.log(Products)
  return(
    
    <div>
      <div>
        <h1>Products</h1>
        <div className="bg-red-500 text-2xl">
          {
            Products.map((product)=>(
              <div className="p-4" key={product._id}>
                  <Image 
                  src="/path-to-your-image.jpg" 
                  width={500} 
                  height={300} 
                  alt="Description of image" 
                />
              </div>

            ))
          }
        </div>

      </div>

    </div>
  )
}