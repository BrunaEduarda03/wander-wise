import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='p-5 bg-walterWhite flex flex-col justify-center items-center'>
      <Image src='/Logo.png' height={23} width={133} alt='logo trips'  />
      <p className='mt-1 font-medium text-sm'>Todos os direitos reservados!</p>
    </div>
  )
}

export default Footer