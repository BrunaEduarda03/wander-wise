'use client'
import CurrencyInput from '@/components/CurrencyInput';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import React from 'react';

function TripSearch() {
  return (
    <div className='container mx-auto p-5'>
      <h1 className='text-2xl text-center text-primaryDarker'>Encontre a sua próxima <span className='text-primary text-2xl font-semibold'>viagem</span></h1>
      <div className='mt-5 flex flex-col gap-4' >
        <Input placeholder='Onde você quer ir?' />
        <div className='flex gap-4' >
          <DatePicker placeholderText='Primeira data' onChange={()=>{}} />
          <CurrencyInput placeholder='Orçamento?' />
        </div>
      </div>
    </div>
  );
}

export default TripSearch;