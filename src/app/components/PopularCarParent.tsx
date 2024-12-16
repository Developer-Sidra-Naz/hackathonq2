"use client"
import Link from "next/link";
import React from "react";
import CarCard from "./PopularCarChild";

const PopularCarParent: React.FC = () => {
  const Cars = [
    { id: 1, name: "Koenigsegg", model: "Sport", Capacity: "90L", CarImg: "/car1.png", type: "Manual", sitting: "2 Peoples", price: "$99.00 / Day" },
    { id: 2, name: "Nissan GT - R", model: "Sport", Capacity: "80L", CarImg: "/car2.png", type: "Manual", sitting: "2 Peoples", price: "$80.00 / Day" },
    { id: 3, name: "Rolls Royce", model: "Sport", Capacity: "70L", CarImg: "/car3.png", type: "Manual", sitting: "4 Peoples", price: "$96.00 / Day" },
    { id: 4, name: "Nissan GT - R", model: "Sport", Capacity: "80L", CarImg: "/car4.png", type: "Manual", sitting: "2 Peoples", price: "$80.00 / Day" },
    { id: 5, name: "All New Rush", model: "SUV", Capacity: "70L", CarImg: "/car11.png", type: "Manual", sitting: "4 Peoples", price: "$72.00 / Day" },
    { id: 6, name: "CR -V", model: "SUV", Capacity: "80L", CarImg: "/car9.png", type: "Manual", sitting: "6 Peoples", price: "$80.00 / Day" },
    { id: 7, name: "All New Terios", model: "Sport", Capacity: "90L", CarImg: "/car8.png", type: "Manual", sitting: "6 Peoples", price: "$74.00 / Day" },
    { id: 8, name: "CR -V", model: "SUV", Capacity: "80L", CarImg: "/car10.png", type: "Manual", sitting: "6 Peoples", price: "$80.00 / Day" },
    { id: 9, name: "Mg ZX Exclusice", model: "HatchBack", Capacity: "70L", CarImg: "/car5.png", type: "Manual", sitting: "4 Peoples", price: "$74.00 / Day" },
    { id: 10, name: "NewMGZS", model: "SUV", Capacity: "90L", CarImg: "/car6.png", type: "Manual", sitting: "2 Peoples", price: "$72.00 / Day" },
    { id: 11, name: "CR -V", model: "SUV", Capacity: "80L", CarImg: "/car10.png", type: "Manual", sitting: "6 Peoples", price: "$80.00 / Day" },
    { id: 12, name: "Mg ZX Exclusice", model: "HatchBack", Capacity: "70L", CarImg: "/car5.png", type: "Manual", sitting: "4 Peoples", price: "$74.00 / Day" },
   
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {Cars.map((car) => (
          <CarCard
            key={car.id}
            carImage={car.CarImg}
            carName={car.name}
            Model={car.model}
            Capacity={car.Capacity}
            carType={car.type}
            carSitting={car.sitting}
            carPrice={car.price}
            carId={car.id}  // Pass carId here
          />
        ))}
      </div>
      {/* Center align button with text at end */}
      <div className="relative flex justify-center mt-4 lg:mt-7">
       <Link href="/detail"><button className="p-4 bg-blue-700 text-white rounded-md mb-4">Show More Cars</button></Link> 
        <h2 className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 text-sm lg:mr-10">120 cars</h2>
      </div>
    </div>
  );
};

export default PopularCarParent;
