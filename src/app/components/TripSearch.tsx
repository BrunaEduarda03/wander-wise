'use client'
import Button from '@/components/Button';
import CurrencyInput from '@/components/CurrencyInput';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

interface TripSearchForm {
  text: string;
  startDate:Date | null;
  budget:string;
}

function TripSearch() {
  const router = useRouter();
  const {handleSubmit,control,register} = useForm<TripSearchForm>();

  const onSubmit = (data: TripSearchForm) => {
    router.push(`/trips/search?text=${data.text}&startDate=${data.startDate?.toISOString()}&budget=${data.budget}`);
  };



  return (
    <div className='container mx-auto p-5 bg bg-search-background bg-cover bg-center bg-no-repeat lg:py-28'>
      <h1 className='font-semibold text-2xl text-center text-primaryDarker lg:text-[2.5rem]'>Encontre a sua próxima <span className='text-primary text-2xl lg:text-[2.5rem] '>viagem</span>
      </h1>
      <div className='flex flex-col dark:bg-transparent  gap-5 mt-5 mb-5 lg:flex-row lg:bg-primary lg:bg-opacity-25 lg:max-w-[950px] lg:mx-auto lg:p-4 lg:rounded-lg lg:mt-10'>
        <Input 
          className='dark:bg-transparent dark:text-white dark:placeholder:text-white'
          placeholder='Onde você quer ir?'
          {...register("text",{
            required:{
              value:true,
              message:"texto é obrigatório!",
            }
          }) } 
        />
        <div className='flex gap-4 lg:w-full'>
          <Controller
            name='startDate'
            control={control}
            render={({field})=>(
              <DatePicker 
              className='w-full dark:bg-transparent dark:text-white dark:placeholder:text-white'  
              placeholderText='Data final' 
              onChange={field.onChange} 
              selected={field.value} 
              minDate={new Date()}/>
            )}

          />
          <Controller
            name='budget'
            control={control}
            render={({field})=>(
              <CurrencyInput 
                className='w-full dark:bg-transparent dark:text-white dark:placeholder:text-white'
                allowDecimals={false}
                placeholder='Orçamento?' 
                onValueChange={field.onChange as any} 
                value={field.value} 
                onBlur={field.onBlur} />
            )}
          />
        </div>
        <Button className='lg:w-1/2' variant='primary' onClick={()=>handleSubmit(onSubmit)()}>Pesquisar</Button>
      </div>
    </div>
  );
}

export default TripSearch;