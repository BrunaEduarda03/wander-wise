'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import  React, { useEffect, useState } from 'react';
import { AiOutlineMenu} from 'react-icons/ai';
import Link from "next/link";
import { MdLightMode,MdNightlight } from "react-icons/md";
import { useTheme } from "next-themes";

const Header = () =>{
  const {status,data} = useSession();
  const [menuIsOpen,setMenuIsOpen] = React.useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }

  const handleMenu = () => setMenuIsOpen(!menuIsOpen);

  const handleLogIn = () => signIn();

  const handleLogOut = () =>{
    setMenuIsOpen(false);
    signOut();
  }

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className='container mx-auto p-5 py-0 h-[93px] flex justify-between items-center lg:border-b lg:border-grayLighter ' >
      <Link href='/'>
        <div className='relative h-[40px] w-[182px]'>
          <Image src='/logo.png' alt='logo trips' fill />
        </div>
      </Link>
      
     
        
    
      {status === 'unauthenticated' && (
        <div className='flex items-center gap-5 border-grayLighter border border-solid rounded-full p-3 px-4 relative'>
          <button onClick={handleLogIn} className='text-primary text-sm font-semibold'>Login</button>
          <button onClick={handleToggle}>
              {theme === "light" ? <MdNightlight size={18}  /> : <MdLightMode size={18} />}
          </button>
        </div>
      )}

      {status === 'authenticated' && data.user && (
        <div className='flex items-center gap-5 border-grayLighter border border-solid rounded-full p-2 px-3 relative'  >
          <button onClick={handleToggle}>
            {theme === "light" ? <MdNightlight size={18}  /> : <MdLightMode size={18} />}
        </button>
          <AiOutlineMenu className="cursor-pointer" size={18} onClick={()=>handleMenu()}/>
          <Image src={data.user?.image!} alt={data.user?.name!} height={32} width={32} className='rounded-full shadow-md' />
          
      
        
       {menuIsOpen && (
            <div className="z-50 absolute top-14 dark:bg-darkMode dark:p-5 dark:border-2 dark:border-grayLighter left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center gap-2">
              <Link href="/my-trips" onClick={() => setMenuIsOpen(false)}>
                <button className="text-primary pb-2 border-b border-grayLighter border-solid text-sm font-semibold dark:text-white ">Minhas Viagens</button>
              </Link>

              <button className="text-primary pt-2 pb-2 text-sm font-semibold dark:text-white " onClick={handleLogOut} >
                Sair
              </button>
            </div>
          )}
          </div>
      )}
    </div>
    
  )}
export default Header;