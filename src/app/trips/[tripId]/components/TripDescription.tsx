import { Trip } from '@prisma/client'
import React from 'react'

interface TripDescriptionProps{
  description:string;
}

function TripDescription({description}:TripDescriptionProps) {
  return (
    <div className='flex flex-col p-5'>
      <h3 className='text-primaryDarker font-semibold'>Sobre a viagem</h3>
      <p className='text-primaryDarker text-sm leading-5 mt-1'>{description}</p>
    </div>
  )
}

export default TripDescription