'use client'
import React from "react";
import { LuArrowDownRight, LuArrowLeft } from 'react-icons/lu';
import { RiHome2Line  } from "react-icons/ri";

import Link from 'next/link';

import { useRouter } from 'next/navigation'


const NotFound = () => {
    const router = useRouter()

  return (
    <div className="bg-background w-full h-[100vh] flex flex-col justify-center items-center ">
      <div className='flex-1/2 bg-primary w-full flex justify-start items-end gap-3'>
      <h1 className='className="text-9l font-bold sm:text-9xl text-light'>Not found Page</h1>
      <LuArrowDownRight className="text-3xl text-light sm:text-5xl" />
      </div>
      <div className='w-full px-5 flex-1/2 flex-col flex justify-center items-center gap-5 xs:flex-row'>
        <div onClick={()=>router.back()} className='w-full border px-10 py-2 rounded-xl text-xl font-semibold cursor-pointer flex justify-center items-center gap-5 hover:bg-primary hover:gap-7 hover:text-light'><LuArrowLeft /><h1>Go Back</h1></div>
        <Link href='/' replace  className='w-full border px-10 py-2 rounded-xl text-xl font-semibold cursor-pointer flex justify-center items-center gap-5 hover:bg-primary hover:gap-7 hover:text-light'><RiHome2Line /><h1>HomePage</h1></Link>
      </div>
    </div>
  );
};

export default NotFound;
