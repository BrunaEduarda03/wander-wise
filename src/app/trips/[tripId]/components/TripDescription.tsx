import { Trip } from '@prisma/client'
import React from 'react'

interface TripDescriptionProps{
  description:string;
}

function TripDescription({description}:TripDescriptionProps) {
  return (
    <div className='flex flex-col p-5 lg:p-0'>
      <h3 className='text-primaryDarker font-semibold lg:text-xl lg:mb-3'>Sobre a viagem</h3>
      <p className='text-grayPrimary text-sm leading-5 mt-1 lg:text-base lg:leading-7'>{description}</p>
    </div>
  )
}

export default TripDescription