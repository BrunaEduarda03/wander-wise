import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react'

interface TripLocationProps{
  location: string;
  locationDescription:string;
}

function TripLocation({location,locationDescription}:TripLocationProps) {
  return (
    <div className='p-5'>
      <h2 className='text-primaryDarker font-semibold mb-3'>Localização</h2>
      <div className='relative w-full h-[246px]' >
        <Image 
        src='/Map-mobile.png' 
        alt={location} fill
        style={{objectFit:'cover'}}
        className='rounded-lg shadow-md'
        />
      </div>
      <div>
        <h2 className='text-primaryDarker font-semibold mb-3 mt-3'>{location}</h2>
        <p className='text-primaryDarker text-sm leading-5 '>{locationDescription}</p>
        <Button variant='outlined' className='w-full mt-3'>Ver no Google Maps</Button>
      </div>

    </div>
  )
}

export default TripLocation