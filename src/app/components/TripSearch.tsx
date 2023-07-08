'use client'
import Button from '@/components/Button';
import CurrencyInput from '@/components/CurrencyInput';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import React from 'react';

function TripSearch() {
  return (
    <div className='container mx-auto p-5 bg bg-search-background bg-cover bg-center bg-no-repeat'>
      <h1 className='text-2xl text-center text-primaryDarker'>Encontre a sua próxima <span className='text-primary text-2xl font-semibold'>viagem</span>
      </h1>
      <div className='flex flex-col gap-4 mt-5 '>
        <Input placeholder='Onde você quer ir?' />
        <div className='flex gap-4' >
          <DatePicker placeholderText='Primeira data' onChange={()=>{}} />
          <CurrencyInput placeholder='Orçamento?' />
        </div>
        <Button>Pesquisar</Button>
      </div>
    </div>
  );
}

export default TripSearch;