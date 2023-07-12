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
    <div className='container mx-auto p-5 bg bg-search-background bg-cover bg-center bg-no-repeat'>
      <h1 className='text-2xl text-center text-primaryDarker'>Encontre a sua próxima <span className='text-primary text-2xl font-semibold'>viagem</span>
      </h1>
      <div className='flex flex-col gap-4 mt-5 '>
        <Input 
          placeholder='Onde você quer ir?'
          {...register("text",{
            required:{
              value:true,
              message:"texto é obrigatório!",
            }
          }) } 
        />
        <div className='flex gap-4' >
          <Controller
            name='startDate'
            control={control}
            render={({field})=>(
              <DatePicker placeholderText='Data final' onChange={field.onChange} selected={field.value} minDate={new Date()}/>
            )}

          />
          <Controller
            name='budget'
            control={control}
            render={({field})=>(
              <CurrencyInput 
                allowDecimals={false}
                placeholder='Orçamento?' 
                onValueChange={field.onChange as any} 
                value={field.value} 
                onBlur={field.onBlur} />
            )}
          />
        </div>
        <Button variant='primary' onClick={()=>handleSubmit(onSubmit)()}>Pesquisar</Button>
      </div>
    </div>
  );
}

export default TripSearch;