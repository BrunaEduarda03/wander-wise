import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuickSearch = () =>{
  return(
    <div className="container mx-auto p-5 ">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className=" px-5 font-medium text-grayLighter  whitespace-nowrap lg:text-xl">Pesquisa Rápida</h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex w-full justify-between mt-5 lg:mt-10 lg:justify-center lg:gap-40">
        <Link href={`/trips/search?text=hotel`}>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src='/Hotel.png' alt='hotel' />
          <p className="text-grayLighter text-sm lg:text-base">Hotel</p>
        </div>
        </Link>

        <Link href={`/trips/search?text=fazenda`}>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src='/Farm.png' alt='hotel' />
          <p className="text-grayLighter text-sm lg:text-base">Fazenda</p>
        </div>
        </Link>

        <Link href={`/trips/search?text=chalé`}>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src='/Cabin.png' alt='hotel' />
          <p className="text-grayLighter text-sm lg:text-base">Chalé</p>
        </div>
        </Link>

        <Link href={`/trips/search?text=pousada`}>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src='/pousada.png' alt='hotel' />
          <p className="text-grayLighter text-sm lg:text-base">Pousada</p>
        </div>
        </Link>

        <Link href={`/trips/search?text=resorts`}>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src='/Resort.png' alt='hotel' />
          <p className="text-grayLighter text-sm lg:text-base">Resorts</p>
        </div>
        </Link>

        
      </div>



    </div>
  )
}

export default QuickSearch;
