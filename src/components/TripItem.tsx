import { Trip } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import  React from 'react';
import ReactCountryFlag from "react-country-flag";

interface TripItemProps{
  trips:Trip;
}

const TripItem = ({trips}:TripItemProps) =>{
  return(
    <Link href={`/trips/${trips.id}`}>
      <div className="flex flex-col mt-5">
        <div className=' relative h-[280px] w-[300px]'>
        <Image 
          src={trips.coverImage} alt={trips.name} 
          className='rounded-lg' fill 
          style={{objectFit:'cover'}} />
        </div>
        
        <h2 className='font-medium mt-2 lg:'>{trips.name}</h2>
        <div className='flex items-center gap-3 my-1' >
          <ReactCountryFlag countryCode={trips.countryCode} svg />
          <p className='text-grayPrimary'>{trips.location}</p>
        </div>

        <p className="text-lg text-grayPrimary">
            <span className="text-primary font-medium">R${trips.pricePerDay.toString()}</span> por dia
        </p>
      </div>
    </Link>
  )
}

export default TripItem;