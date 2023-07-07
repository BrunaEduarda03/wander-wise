'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const {data} = useSession();
  console.log(data);
  
  return (
    <div>
     

      <button onClick={()=>signIn()}>Login</button>
      <button onClick={()=>signOut()}>LogOut</button>
      <h1>Olá {data?.user?.name}</h1>
      <img src={data?.user?.image ?? ''} alt='perfil'  />
    </div>
  )
}