'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import  React from 'react';
import { AiOutlineMenu} from 'react-icons/ai';
import Link from "next/link";
const Header = () =>{
  const {status,data} = useSession();
  const [menuIsOpen,setMenuIsOpen] = React.useState(false);

  const handleMenu = () => setMenuIsOpen(!menuIsOpen);

  const handleLogIn = () => signIn();

  const handleLogOut = () =>{
    setMenuIsOpen(false);
    signOut();
  }

  return (
    <div className='container mx-auto p-5 py-0 h-[93px] flex justify-between items-center lg:border-b lg:border-grayLighter ' >
      <Link href='/'>
        <div className='relative h-[32px] w-[182px]'>
          <Image src='/Logo.png' alt='logo trips' fill />
        </div>
      </Link>
      
      {status === 'unauthenticated' && (
        <button onClick={handleLogIn} className='text-primary text-sm font-semibold'>Login</button>
      )}

      {status === 'authenticated' && data.user && (
        <div className='flex items-center gap-5 border-grayLighter border border-solid rounded-full p-2 px-3 relative'  >
          <AiOutlineMenu className="cursor-pointer" size={18} onClick={()=>handleMenu()}/>
          <Image src={data.user?.image!} alt={data.user?.name!} height={32} width={32} className='rounded-full shadow-md' />
        
       {menuIsOpen && (
            <div className="z-50 absolute top-14 left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <Link href="/my-trips" onClick={() => setMenuIsOpen(false)}>
                <button className="text-primary pb-2 border-b border-grayLighter border-solid text-sm font-semibold">My Trips</button>
              </Link>

              <button className="text-primary pt-2 text-sm font-semibold" onClick={handleLogOut} >
                Logout
              </button>
            </div>
          )}
          </div>
      )}
    </div>
    
  )}
export default Header;