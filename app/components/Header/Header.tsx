
"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { IoReorderThree } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

interface Props {
    onNavigate:any
}

function Header({onNavigate}:Props) {

    const [show, setShow] = useState(false);

  return (
   <>
   
   
   <div className=' px-4 py-4 shadow-md border-b border-[#1f2020] font-merriweather' >   
       <div className='flex justify-between md:justify-around items-center'>

            <Link href={"/"} className='text-[1.8rem] font-bold logo_font '><span className='text-[#FFD700]'>A</span>URA </Link>
            <div className='hidden md:flex items-center gap-12 text-[0.9rem] font-[500]  px-10 py-[0.6rem] rounded-full border-[#242424] border shadow-lg bg-[#020a25]'>
                <button className='hover:underline hover:font-semibold uppercase' onClick={()=>onNavigate("about")}>About</button>
                <button className='hover:underline hover:font-semibold uppercase'  onClick={()=>onNavigate("gallery")}>Gallery</button>
                <button className='hover:underline hover:font-semibold uppercase'  onClick={()=>onNavigate("teams")}>Teams</button>
                <button className='hover:underline hover:font-semibold uppercase'  onClick={()=>onNavigate("contactUS")}>Contact Us</button>
                <button className='hover:underline hover:font-semibold uppercase'  onClick={()=>onNavigate("about")}>FAQ</button>
       
        </div>
        <div>
            <Link className='hidden md:inline text-[0.95rem] py-[0.35rem] px-4 bg-green-600 rounded-full font-semibold text-white' href="/register"> Submit the abstract</Link>
        </div>

        {/* <div className='md:hidden'>
                <button className='text-[1.8rem] bg-[#3b4d5a] p-1 rounded' onClick={()=>setShow(!show)}> 
                {show ? <RxCross2/> : <IoReorderThree/> }
               
                
                </button>
        </div> */}

        {/* {
            show ? 

            <div className='md:hidden h-[100vh] bg-white fixed top-[0] w-full'>

            </div> : <></>
        } */}

       </div>
   </div>
   
   
   
   </>
  )
}

export default Header