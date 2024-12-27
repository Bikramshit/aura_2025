import { CalendarDays, LocateIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';


function LandingPage() {
  return (
    <div className='font-inter  md:pb-[10rem]' >
    
        <div className='mt-16 md:mt-[10rem] flex flex-col items-center  '>
        <div className='text-center text-[2rem] md:text-[2.5rem] font-[700] text-[#dedee0] logo_font'>Aliah University Research Aspirations</div>
        <div className='text-[1rem] md:text-[1.2rem]  text-[#949494] p-4 text-center font-semibold md:mx-[5rem]'>
        <div className='md:w-[730px]'>
        Where Ideas Spark, Innovation Soars, and the Future Begin. Explore cutting-edge advancements, inspiring ideas, and transformative technologies at AURA 
        </div>
        </div>
        {/* <div className='text-[1.2rem] text-[#5b5b5d] font-semibold'>Where Ideas Spark, Innovation Soars, and the Future Begin</div>
        <div className='text-[1.2rem] text-[#5b5b5d] font-semibold relative'>
            <span className='absolute left-0 right-0 bottom-[-0.5rem] border-b border-[#383b3a]'></span>
            Explore cutting-edge advancements, inspiring ideas, and transformative technologies at AURA </div> */}
            <div className='mt-0 md:mt-8 text-center'>
                <div className='py-[0.6rem] px-4  rounded-md flex items-center md:items-center gap-1 md:gap-2 font-[600] font-merriweather  text-[1.0rem] justify-center'><span className='text-[1.2rem] text-yellow-500'><FaLocationDot/></span> <span><span className='text-yellow-500 hidden md:inline'>Venue: </span> Aliah University, Newtown Campus</span> </div>
                <div className='pb-[0.6rem] px-4  rounded-md flex items-center justify-center md:items-center gap-1 md:gap-2 font-[600] font-merriweather'><span className='text-yellow-500 text-[1rem]'><CalendarDays size={20} /></span> <span><span className='text-yellow-500 hidden md:inline'> Event Date: </span> 25<sup>th</sup> & 27<sup>th</sup> February, 2025</span> </div>
            </div>
        <div className='my-4 '>
        <Link className='px-4 py-[0.45rem] rounded-full bg-[#FFD700] font-semibold text-[#1f2020] text-[1.0rem]' href={"/register"}>Submit the abstract</Link>
        </div>
            
        
        </div>
        
       
    </div>
  )
}

export default LandingPage