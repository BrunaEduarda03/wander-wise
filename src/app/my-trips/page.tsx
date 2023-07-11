'use client';

import { TripReservation } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Mytrips() {
  const {status,data} = useSession();
  const router = useRouter();
  const [reservations,setReservations] = useState<TripReservation[]>([]);
 
  
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
    <div>Mytrips</div>
  )
}

export default Mytrips;