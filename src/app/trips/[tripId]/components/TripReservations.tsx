'use client'

import Button from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import Input from '@/components/Input'
import { Trip } from '@prisma/client'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

interface TripReservationsProps {
  trip:Trip;
}
interface TripReservationsForm {
  guest:number;
  startDate: Date | null;
  endDate:Date | null;
}

const onSubmit = (data:any) => {
console.log({data});

}

function TripReservations({trip}:TripReservationsProps) {
  const {register,handleSubmit,formState:{errors},control} = useForm<TripReservationsForm>();
  return (
    <div className='flex flex-col px-5'>
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
          className='w-full' />
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
            />
          )}
        
        />

      </div>
      <Input 
        {...register('guest',{
          required:{
            value:true,
            message:'Número de hospedes é obrigatório!'
          }
        })} 
        placeholder={`Número de Hóspedes (Máx ${trip.maxGuests})`} 
        className='mt-4' 
        error={!!errors?.guest}
        errorMessage={errors?.guest?.message}
      />
      <div className="flex justify-between mt-3 ">
        <p className='font-medium text-sm text-primaryDarker'>Total</p>
        <p className='font-medium text-sm text-primaryDarker'>R$ 2500</p>
      </div>
      <div className='w-full border-b border-b-grayLighter pb-10'>
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

export default TripReservations