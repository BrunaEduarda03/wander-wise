'use client'

import Button from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import Input from '@/components/Input'
import { Trip } from '@prisma/client'
import React from 'react'

interface TripReservationsProps {
  trip:Trip;
}

function TripReservations({trip}:TripReservationsProps) {
  return (
    <div className='flex flex-col px-5'>
      <div className="flex gap-4">
        <DatePicker placeholderText='Data de Início' onChange={()=>{}} className='w-full' />
        <DatePicker placeholderText='Data Final' onChange={()=>{}} className='w-full' />
      </div>
      <Input placeholder={`Número de Hóspedes (Máx ${trip.maxGuests})`} className='mt-4' />
      <div className="flex justify-between mt-3 ">
        <p className='font-medium text-sm text-primaryDarker'>Total</p>
        <p className='font-medium text-sm text-primaryDarker'>R$ 2500</p>
      </div>
      <div className='w-full border-b border-b-grayLighter pb-10'>
        <Button className='mt-3 w-full'>Reservar Agora</Button>
      </div>
      
    </div>
  )
}

export default TripReservations