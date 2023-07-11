'use client';

import { Prisma } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import UserReservations from './components/UserReservations';


function Mytrips() {
  const {status,data} = useSession();
  const router = useRouter();
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{
      include: { trip: true };
    }>[]
  >([]);
  
  const fetchReservation = async () =>{
    const response = await fetch(`/api/user/${(data?.user as any).id}/reservations`);
    const json = await response.json();
    setReservations(json);
    
  }

  useEffect(() => {
    if(status === 'unauthenticated' || !data?.user){
      router.push('/');
    }
    fetchReservation();
  },[status,router])
  return (
    <div className='container mx-auto p-5'>
      <div className='text-primaryDarker text-xl font-semibold'>Suas Viagens</div>
      {reservations.map((reservations)=>(
        <UserReservations reservations={reservations} key={reservations.id} />
      ))}
    </div>
  )
}

export default Mytrips;