import Image from 'next/image';
import React from 'react'

interface TripHighlightProps{
  highlights: string[];
}

function TripHighlights({highlights}:TripHighlightProps) {
  return (
    <div className='flex flex-col p-5 lg:p-0 lg:mt-12'>
      <h2 className='text-primaryDarker font-semibold mb-3 lg:text-xl lg:mb-5'>Destaques</h2>
      <div className='flex flex-wrap gap-y-3 '>
        {highlights.map((highlights,index)=>(
          <div key={highlights} className='flex items-center w-1/2 gap-2 lg:gap-3'>
            <Image src='/check-icon.png' width={15} height={15} alt={highlights} />
            <p className='text-grayPrimary text-base'>{highlights}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TripHighlights