'use client';
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div>
      <div className="w-full h-[1px] dark:bg-grayLighter mt-10 mb-3"></div>
        <div className='p-5 flex flex-col justify-center items-center bg-grayLighter dark:bg-darkMode'>
          <Image src='/logo.png' height={23} width={133} alt='logo trips'  />
          <p className='mt-1 font-medium text-sm'>Todos os direitos reservados!</p>
          <p className='mt-1 font-normal text-sm'>Desenvolvido por Bruna Eduarda, 2023</p>
        </div>
      </div>
    )
  
}

export default Footer