"use client";

import TripItem from "@/components/TripItem";
import { Trip } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Trips = () => {
  const [trips, setTrips] = React.useState<Trip[]>([]);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch(
        `/api/trips/search?text=${searchParams.get("text") ?? ""}&startDate=${searchParams.get("startDate")}&budget=${searchParams.get("budget")}`
      );

      const data = await response.json();
      console.log(data);
      

      setTrips(data);
    };

    fetchTrips();
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center lg:items-start p-5 lg:pt-10">
      <div className="text-primaryDarker font-semibold text-xl">Hospedagens Encontradas</div>
      <div className="text-grayPrimary text-base">{trips.length > 0 ?'Listamos as melhores opções para você!': 'Não encontramos nada nas filtragens!'}</div>
      
      {(trips.map((trip)=>(
        <TripItem  key={trip.id} trips={trip} />
      )))}
    </div>
  );
};

export default Trips;