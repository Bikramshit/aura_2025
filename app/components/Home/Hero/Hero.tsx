import { CalendarDays, LocateIcon, PartyPopper } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaAward, FaLocationDot } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';
import {GiAbstract091} from "react-icons/gi"
import { GoGoal } from "react-icons/go";

function LandingPage({onNavigate}:{onNavigate:any}) {

  const router = useRouter();
  const onHref =()=>{
    router.push('/register');
  }
  return (
    <div className='font-inter  md:pb-[6rem]' >
    
        <div className='mt-16 md:mt-[7rem] flex flex-col items-center  '>
        <div className='text-center text-[2rem] md:text-[2.5rem] font-[700] text-[#dedee0] logo_font'>Aliah University Research Aspirations</div>
        <div className='text-[1rem] md:text-[1.2rem]  text-[#949494] p-4 text-center font-semibold md:mx-[5rem]'>
        <div className='md:w-[730px]'>
        Where Ideas Spark, Innovation Soars, and the Future Begin. Explore cutting-edge advancements, inspiring ideas, and transformative technologies at AURA 
        </div>
        </div>
      
            <div className='mt-0 md:mt-8 text-center'>
                <div className='py-[0.6rem] px-4  rounded-md flex items-center md:items-center gap-1 md:gap-2 font-[600] font-merriweather  text-[1.0rem] justify-center'><span className='text-[1.2rem] text-yellow-500'><FaLocationDot/></span> <span><span className='text-yellow-500 hidden md:inline'>Venue: </span> Aliah University, Newtown Campus</span> </div>
                <div className='pb-[0.6rem] px-4  rounded-md flex items-center justify-center md:items-center gap-1 md:gap-2 font-[600] font-merriweather'>
                  <span className='flex items-center gap-1'>
                  <span className='text-yellow-500 text-[1rem]'><CalendarDays size={20} /></span> <span><span className='text-yellow-500 '> Event Date: </span>
                    </span> 25<sup>th</sup> & 27<sup>th</sup> February, 2025</span> </div>
            </div>
      
       
      
{/*                     
                    <div className="mx-6 text-center  relative    overflow-hidden mt-2  gradient_bg1 px-4 py-[0.4rem] rounded-md text-[#cfdef0] font-semibold border-[#404a4b] shadow-md shadow-[#b1bdb2]" >
     <div className='py-1'>
        <span className='font-merriweather  px-4  rounded-md text-[#cfdef0] font-semibold font-merriweather ' >AURA 2025 is Live</span>
        </div>
    <span className="absolute top-0 left-0 w-[300px] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] translate-x-[-100%] animate-shine"></span>
  </div> */}

  <button className=' hover:font-semibold center' onClick={()=>onNavigate("winners")}>
  <div className='flex items-center gap-0 mt-2 justify-center' >

<span className='text-[#e64bc2] hidden md:inline  '><PartyPopper/></span>
<div className='px-4 font-merriweather  bg-gradient-to-r from-[#e64bc2] to-[#ff8b16] bg-clip-text text-transparent font-bold drop-shadow-lg md:text-[1.15rem]'>
Winners of AURA 2025 
</div>
<span className='text-[#ff8b16]  hidden md:inline '><PartyPopper/></span>
</div>

  <div className='flex items-center gap-0 ' >

<span className='text-[#f8d3eb] hidden md:inline animate-pulse'><FaAward /></span>
<div className='p-4 font-merriweather px-4 animate-pulse bg-gradient-to-r from-[#f8d3eb] to-[#56f76e] bg-clip-text text-transparent font-bold drop-shadow-lg md:text-[1.1rem]'>
The finalist teams have been announced
</div>
<span className='text-[#56f76e]  hidden md:inline animate-pulse'><FaAward/></span>
</div>


  </button>
  {/* <div className='pb-4 mx-4 mt-2'>
  <button className="btn cube cube-hover" type="button" onClick={()=>onNavigate("day1")}>
  <div className="bg-top">
    <div className="bg-inner"></div>
  </div>
  <div className="bg-right">
    <div className="bg-inner"></div>
  </div>
  <div className="bg">
    <div className="bg-inner"></div>
  </div>
  <div className="text">Preliminary Round  (25<sup>th</sup>Feb)</div>
</button>
  </div> */}

  <div className='pb-4 mx-4 mt-2'>
  <button className="btn cube cube-hover" type="button" onClick={()=>onNavigate("winners")}>
  <div className="bg-top">
    <div className="bg-inner"></div>
  </div>
  <div className="bg-right">
    <div className="bg-inner"></div>
  </div>
  <div className="bg">
    <div className="bg-inner"></div>
  </div>
  <div className="text text-[#f8f8f8]">Winners   (Final Day - 27<sup>th</sup>Feb)</div>
</button>
  </div>
  

 
  
        
        </div>
        
       
    </div>
  )
}

export default LandingPage