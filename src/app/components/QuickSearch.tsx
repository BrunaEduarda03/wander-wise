import Image from "next/image";
import React from "react";

const QuickSearch = () =>{
  return(
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className=" px-5 font-medium text-grayLighter  whitespace-nowrap ">Pesquisa Rápida</h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex w-full justify-between mt-5">
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src='/Hotel.png' alt='hotel' />
          <p className="text-grayLighter">Hotel</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src='/Farm.png' alt='hotel' />
          <p className="text-grayLighter">Fazenda</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src='/Cabin.png' alt='hotel' />
          <p className="text-grayLighter">Chalé</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src='/pousada.png' alt='hotel' />
          <p className="text-grayLighter">Pousada</p>
        </div>
        
      </div>



    </div>
  )
}

export default QuickSearch;
