import { prisma } from '@/lib/prisma'
import Image from 'next/image';
import React from 'react'
import ReactCountryFlag from 'react-country-flag';
import TripHeader from './components/TripHeader';
import TripReservations from './components/TripReservations';

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  return trip;
};


async function TripDetails({params}:{params:{tripId:string}}) {
  const trip = await getTripDetails(params.tripId);
  if(!trip) return null;
  return (
    <div className='container mx-auto '>
      <TripHeader trip={trip} />
      <TripReservations />
    </div>
  )
}

export default TripDetails;