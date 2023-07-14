import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react'

interface TripLocationProps{
  location: string;
  locationDescription:string;
}

function TripLocation({location,locationDescription}:TripLocationProps) {
  return (
    <div className='p-5 lg:p-0 lg:mt-10 lg:pb-20'>
      <h2 className='text-primaryDarker font-semibold mb-3 lg:text-xl lg:mb-10'>Localização</h2>
      <div className='relative h-[480px] w-full hidden lg:block' >
        <Image 
        src='/map-desktop.png' 
        alt={location} fill
        style={{objectFit:'cover'}}
        className='rounded-lg shadow-md'
        />
      </div>
      <div>
        <h2 className='text-primaryDarker font-semibold mb-3 mt-5'>{location}</h2>
        <p className='text-grayPrimary text-sm leading-5 lg:text-base lg:leading-7 '>{locationDescription}</p>
        <Button variant='outlined' className='w-full mt-5  '>Ver no Google Maps</Button>
      </div>

    </div>
  )
}

export default TripLocation