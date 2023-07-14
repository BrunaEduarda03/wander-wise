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
  }, [searchParams]);

  return (
    <div className="container mx-auto flex flex-col items-center lg:items-start p-5 lg:pt-10">
      <div className="text-primaryDarker font-semibold text-xl lg:text-[2.5rem]">Hospedagens Encontradas</div>
      <div className="text-grayPrimary text-base lg:mt-5 lg:text-xl lg:mb-10">{trips.length > 0 ?'Listamos as melhores opções para você!': 'Não encontramos nada nas filtragens!'}</div>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:gap-10">
        {(trips.map((trip)=>(
          <TripItem  key={trip.id} trips={trip} />
        )))}
      </div>
    </div>
  );
};

export default Trips;