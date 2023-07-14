import TripItem from "@/components/TripItem";
import { prisma } from "@/lib/prisma";
import { Trip } from "@prisma/client";
import React from "react";

const getTrips = async() =>{
  const trips = await prisma.trip.findMany({});
  return trips;

}
const RecommendedTrips = async () =>{
  const data = await getTrips();
   
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className=" px-5 font-medium text-grayLighter  whitespace-nowrap lg:text-xl">Destinos Recomendados</h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="mt-5 flex flex-col items-center gap-3 lg:flex-row gap lg:flex-wrap lg:justify-center lg:gap-10 lg:mt-10 ">
      {data.map((trip:Trip)=>(
        <TripItem key={trip.id} trips={trip} />
    ))}
    </div>
  </div>
    
  )
}
export default RecommendedTrips;