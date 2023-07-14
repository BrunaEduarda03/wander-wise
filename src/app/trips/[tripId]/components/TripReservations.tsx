'use client'

import Button from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import Input from '@/components/Input'
import { differenceInDays, max } from 'date-fns'
import { useRouter } from "next/navigation";
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

interface TripReservationsProps {
  tripId: string;
  tripStartDate: Date;
  tripEndDate: Date;
  maxGuests: number;
  pricePerDay: number;
}
interface TripReservationsForm {
  guest:number;
  startDate: Date | null;
  endDate:Date | null;
}

function TripReservations({tripId,maxGuests,tripStartDate,tripEndDate,pricePerDay}:TripReservationsProps) {
  const {register,handleSubmit,formState:{errors},control,watch,setError} = useForm<TripReservationsForm>();
  const router = useRouter();


  const onSubmit = async (data: TripReservationsForm) => {
    const response = await fetch("/api/trips/check", {
      method: "POST",
      body: Buffer.from(
        JSON.stringify({
          startDate: data.startDate,
          endDate: data.endDate,
          tripId,
        })
      ),
    });
    const res= await response.json();

    if (res?.error?.code === "TRIP_ALREADY_RESERVED") {
      setError("startDate", {
        type: "manual",
        message: "Esta data já está reservada.",
      });

      return setError("endDate", {
        type: "manual",
        message: "Esta data já está reservada.",
      });
    }

    if (res?.error?.code === "INVALID_START_DATE") {
      return setError("startDate", {
        type: "manual",
        message: "Data inválida.",
      });
    }

    if (res?.error?.code === "INVALID_END_DATE") {
      return setError("endDate", {
        type: "manual",
        message: "Data inválida.",
      });
    }
    router.push(
      `/trips/${tripId}/confirmation?startDate=${data.startDate?.toISOString()}&endDate=${data.endDate?.toISOString()}&guests=${data.guest}`
    );
    
  }

  const startDate = watch("startDate");
  const endDate = watch("endDate");
  return (
    <div className='flex flex-col px-5 lg:min-w-[380px] lg:p-5 lg:border-grayLighter lg:border lg:rounded-lg lg:shadow-md'>
      <p className='text-primaryDarker text-xl mb-4 hidden lg:block'>
        <span className='font-semibold'>R${pricePerDay}</span>/Dia
      </p>
      <div className="flex gap-4">
        <Controller
        name='startDate'
        rules={{
          required:{
            value:true,
            message:'Data inicial Obrigatória!'
          }
          
        }}
        control={control}
        render={({field})=>(
          <DatePicker
          error={!!errors?.startDate}
          errorMessage={errors?.startDate?.message} 
          selected={field.value}
          placeholderText='Data de Início' 
          onChange={field.onChange} 
          className='w-full'
          minDate={tripStartDate}
          />
  
        )}
        
        />
        <Controller
          name='endDate'
          rules={{
            required:{
              value:true,
              message:'Data Final obrigatória!'
            }
          }}
          control={control}
          render={({field})=>(
            <DatePicker 
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message} 
              selected={field.value}
              placeholderText='Data Final' 
              onChange={field.onChange} 
              className='w-full' 
              maxDate={tripEndDate}
              minDate={startDate ?? tripStartDate}
            />
          )}
        
        />

      </div>
      <Input 
        {...register('guest',{
          required:{
            value:true,
            message:'Número de hospedes é obrigatório!'
          },
          max:{
            value:maxGuests,
            message:`Número de hospedes não pode ser maior que ${maxGuests}`
          }
        })} 
        placeholder={`Número de Hóspedes (Máx ${maxGuests})`} 
        className='mt-4' 
        error={!!errors?.guest}
        errorMessage={errors?.guest?.message}
        type='number'
      />
      <div className="flex justify-between mt-3 ">
        <p className='font-medium text-sm text-primaryDarker'>Total</p>
        <p className='font-medium text-sm text-primaryDarker'>
        {startDate && endDate ? `R$${differenceInDays(endDate, startDate) * pricePerDay}` ?? 1 : "R$0"}
        </p>
      </div>
      <div className='w-full border-b border-b-grayLighter pb-10 lg:border-none lg:pb-0'>
        <Button 
        variant='primary' 
        className='mt-3 w-full'
        onClick={()=>handleSubmit(onSubmit)()}
        >
          Reservar Agora
        </Button>
      </div>
      
    </div>
  )
}

export default TripReservations;