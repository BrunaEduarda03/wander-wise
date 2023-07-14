'use client';

import { Prisma } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import UserReservations from './components/UserReservations';
import Button from '@/components/Button';

function Mytrips() {
  const {status,data} = useSession();
  const router = useRouter();
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{
      include: { trip: true };
    }>[]
  >([]);
  
  const fetchReservations = async () => {
    const response = await fetch(`/api/user/${(data?.user as any)?.id}/reservations`);

    const json = await response.json();

    setReservations(json);
  };

  useEffect(() => {
    if(status === 'unauthenticated'){
      router.push('/');
    }
    fetchReservations();
  },[status,router])
  return (
    <div className='container mx-auto p-5'>
      <div className='text-primaryDarker text-xl font-semibold mb-5'>Suas Viagens</div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-14">
        {reservations.length > 0 ? (reservations.map((reservations)=>(
          <UserReservations fetchReservations={fetchReservations}  reservations={reservations} key={reservations.id} />
        ))):(
          <div>
            <p className=' text-primaryDarker mt-5 text-xl '>Você não possui nenhuma reserva!</p>
            <div className="flex flex-col mt-5 ">
              <Button variant='primary' onClick={()=>router.push('/')}>
                Fazer Reserva
              </Button>
            </div>
          </div>
          ) 
        }
      </div>
     
    </div>
  )
}

export default Mytrips;