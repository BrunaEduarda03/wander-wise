import { prisma } from '@/lib/prisma'
import Image from 'next/image';
import React from 'react'
import ReactCountryFlag from 'react-country-flag';
import TripHeader from './components/TripHeader';
import TripReservations from './components/TripReservations';
import TripDescription from './components/TripDescription';
import TripHighlights from './components/TripHighlights';
import TripLocation from './components/TripLocation';

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
    <div className='container mx-auto lg:px-40 '>
      <TripHeader trip={trip} />
      <div className="flex flex-col lg:flex-row lg:order-2 lg:mt-10">
        <div className='lg:order-2 lg:flex items-center' >
          <TripReservations 
            tripId={trip.id} 
            tripStartDate={trip.startDate} 
            tripEndDate={trip.endDate} 
            maxGuests={trip.maxGuests} 
            pricePerDay={trip.pricePerDay as any} 
          />
        </div>
        
        <div className="lg:order-1">
          <TripDescription description={trip.description} />
          <TripHighlights highlights={trip.highlights} />
        </div>
      </div>

      

      <TripLocation location={trip.location} locationDescription={trip.locationDescription} />
    </div>
  )
}

export default TripDetails;