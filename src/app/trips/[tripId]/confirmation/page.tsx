'use client'
import { Trip } from '@prisma/client';
import Image from 'next/image';
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import React, { useEffect, useState } from 'react'
import ReactCountryFlag from 'react-country-flag';
import { ptBR } from 'date-fns/locale';
import Button from '@/components/Button';

function TripConfirmation({params}:{params:{tripId:string}}) {
  const [trips,setTrips] = useState<Trip| null >();
  const [totalPrice,setTotalPrice] = useState <number>(0);
  const searchParams = useSearchParams();
  useEffect(()=>{
    async function fetchTrips() {
      const response = await fetch('/api/trips/check',{
        method: 'POST',
        body:JSON.stringify({
          tripId: params.tripId,
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
        })
      })
      const {trip,totalPrice} = await response.json();

      setTotalPrice(totalPrice);
      setTrips(trip);
    }
    fetchTrips();
  },[ searchParams, params])

  if(!trips) return null;

  const startDate = new Date(searchParams.get("startDate") as string);
  const endDate = new Date(searchParams.get("endDate") as string);
  const guests = searchParams.get("guests");

  const handleBuyClick = () =>{
    
  }


  return (
    <div className='container mx-auto p-5' >
      <div className="flex flex-col">
        <h2 className='text-primaryDarker font-semibold text-xl'>Sua viagem</h2>
          {/* CARD */}  
          <div className='border-b border-grayLighter border-solid border shadow-sm mt-5 p-5 '>
            <div className="flex items-center border-b border-grayLighter pb-5 border-solid gap-3 w-full">
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

          <div className="flex flex-col mt-5 ">
            <h2>Data:</h2>
            <div className="flex items-center mt-2 gap-1">
              <p>{format(startDate, "dd 'de' MMMM", { locale: ptBR })}</p>
              {" - "}
              <p>{format(endDate, "dd 'de' MMMM", { locale: ptBR })}</p>
            </div>
          </div> 
          <div className="flex flex-col mt-5 ">
            <h2>Hóspedes:</h2>
            <div className="flex items-center mt-2 gap-1">
              <p>{`${guests} hospedes`}</p>
            </div>
          </div> 
      </div>
      <Button variant='primary' className='w-full mt-5' onClick={handleBuyClick}>
        Finalizar Compra
      </Button>
    </div>
  )
}

export default TripConfirmation;