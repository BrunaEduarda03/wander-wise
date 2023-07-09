import { Trip } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'

interface TripHeaderProps {
  trip:Trip;
}

function TripHeader({trip}:TripHeaderProps) {
  return (
    <div className="flex flex-col">
      <div className='relative w-full h-[280px]'>
      <Image 
        src={trip?.coverImage} 
        alt={trip?.name} fill
        style={{
          objectFit:'cover'
        }} 
      />
      </div>
      
      <div className="flex flex-col p-5 ">
        <h2 className='text-primaryDarker font-medium  '>{trip.name}</h2>
        <div className='flex items-center gap-3 my-1 '>
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className='text-grayPrimary underline'>{trip.location}</p>
        </div>
        <p className='text-primary font-medium'>R$ {trip.pricePerDay.toString()} <span className='text-grayPrimary'>por Noite</span></p>
      </div> 
    </div>
  )
}

export default TripHeader