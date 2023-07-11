import Button from '@/components/Button';
import { Prisma } from '@prisma/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import React from 'react'
import ReactCountryFlag from 'react-country-flag';

interface UserReservationItem{
  reservations:Prisma.TripReservationGetPayload<{
    include: { trip: true };
  }>;
}

function UserReservations({reservations}:UserReservationItem) {
  console.log(reservations);
  
  return (
      /*Card*/
      <div className="border-b border-grayLighter border-solid border shadow-sm p-5 rounded-lg mt-5">
        <div className='flex items-center pb-5 border-b border-grayLighter'>
          <div className='relative w-[124px] h-[106px]'>
            <Image src={reservations.trip.coverImage} alt={reservations.trip.name} fill/>
          </div>
          
          <div className='flex flex-col p-5'>
            <h2 className='text-primaryDarker font-semibold text-xl'>{reservations.trip.name}</h2>
            <div className='flex gap-2 items-center'>
              <ReactCountryFlag countryCode={reservations.trip.countryCode} svg />
              <p className='text-grayPrimary underline'>{reservations.trip.location}</p>
            </div>
            </div>
          </div>

        <div className="flex flex-col gap-2 pb-5 border-b border-grayLighter border-solid">
          <h3 className='text-primaryDarker font-semibold mt-5 '>Sobre a Viagem</h3>
          <p>Data:</p>
          <div className="flex items-center gap-1">
              <p>{format(new Date(reservations.startDate), "dd 'de' MMMM", { locale: ptBR })}</p>
              {" - "}
              <p>{format(new Date(reservations.endDate), "dd 'de' MMMM", { locale: ptBR })}</p>
            </div>
          <p className='text-primaryDarker font-semibold mt-5 '>Hóspedes:</p>
          <p>{reservations.guests} hóspedes</p>
        </div>

          <div className='mt-5 gap-2 flex flex-col'>
            <p className='text-primaryDarker font-semibold'>Informações de pagamento</p>
            <div className="flex justify-between ">
              <p className='text-primaryDarker'>Total</p>
              <p className='text-primaryDarker font-semibold'>R$ {Number(reservations.totalPaid)}</p>
            </div>
          </div>

          <Button variant='danger' className='w-full mt-5'>
            Cancelar
          </Button>
        


      </div>
      
  )
}

export default UserReservations;

/*
<div className='border-b border-grayLighter border-solid border shadow-sm mt-5 p-5 '>
<div className="flex items-center border-b border-grayLighter pb-10 border-solid gap-3 w-full">
  <div className='relative w-[124px] h-[106px]  '>
    <Image 
    src={trips?.coverImage} alt={trips?.name} fill 
    style={{objectFit:'cover'}}
    className='rounded-lg shadow-sm'
    />
  </div>
  <div className="flex flex-col p-5">
    <h2 className='text-xl text-primaryDarker font-semibold'>{trips.name}</h2>
    <div className='flex gap-2 items-center'>
      <ReactCountryFlag countryCode={trips.countryCode} svg/>
      <p className='text-grayPrimary underline text-xs '>{trips.location}</p>
    </div>
  </div>
</div>
  <h3 className='text-sm text-primaryDarker font-semibold mt-5'>Informações do preço</h3>
  <div className='flex justify-between mt-2'>
    <p className='text-sm text-primaryDarker'>Total:</p>
    <p className="font-medium">R${totalPrice}</p>
  </div>
  
</div>
*/