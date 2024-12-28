import Link from 'next/link'
import React from 'react'
import { FaSquarePhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

function ContactUs() {
  return (
    <>
    
    <div className='mx-4 sm:mx-[5rem] md:mx-[8rem] lg:mx-[15rem]  my-20 pb-12 relative'>

     
            <button className="relative  text-white contactUs text-2xl font-bold tracking-wide  rounded-xl overflow-hidden mt-2 w-full p-8 text-[1.2rem]">
     <div className='py-1'>
       
     <div className='text-center font-inter font-bold text-[2rem] text-yellow-500 uppercase'>Contact Us</div>

     <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-4'>

<div className='flex flex-col items-center my-2'>
   <span className='text-[3.2rem]'> <FaSquarePhone/></span>
    <div className='logo_font  font-bold text-[#f59942]'>Pallav Dutta</div>
    <div className='text-[1rem] font-semibold'>(Convener)</div>
    <div className='text-[1rem] font-semibold text-[#fafafa]'> 9330831425</div>
</div>
<div className='flex flex-col items-center my-2'>
    <span className='text-[3.2rem]'><MdEmail/></span>
    <div className='logo_font'>aura@aliah.ac.in</div>
</div>
<div className='flex flex-col items-center my-2'>
   <span className='text-[3.2rem]'> <FaSquarePhone/></span>
    <div className='logo_font font-bold text-[#f59942]'>Bikram Shit</div>
    <div className='text-[1.0rem] font-semibold m-0'>(Tech Head)</div>
    <div className='text-[1.0rem] font-semibold m-0'>8101562832</div>
</div>
</div>




        </div>
    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] translate-x-[-100%] animate-shine"></span>
  </button>
        {/* <div className='contactUs p-8 rounded-2xl shadow-lg shadow-[#263137] relative'>
            <div>

            
        <span className="absolute top-0   w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] translate-x-[-100%] animate-shine"></span>

            <div className='text-center font-inter font-bold text-[2rem] text-yellow-500 uppercase'>Contact Us</div>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-4'>

                <div className='flex flex-col items-center my-2'>
                   <span className='text-[3.2rem]'> <FaSquarePhone/></span>
                    <div className='logo_font text-[1rem] font-bold text-[#f59942]'>Pallav Dutta</div>
                    <div className='text-[0.9rem] font-semibold'>(Convener)</div>
                    <div className='text-[0.9rem] font-semibold text-[#fafafa]'> 9330831425</div>
                </div>
                <div className='flex flex-col items-center my-2'>
                    <span className='text-[3.2rem]'><MdEmail/></span>
                    <div className='logo_font'>aura@aliah.ac.in</div>
                </div>
                <div className='flex flex-col items-center my-2'>
                   <span className='text-[3.2rem]'> <FaSquarePhone/></span>
                    <div className='logo_font font-bold text-[#f59942]'>Bikram Shit</div>
                    <div className='text-[0.9rem] font-semibold'>(Tech Head)</div>
                    <div className='text-[0.9rem] font-semibold'>8101562832</div>
                </div>

            </div>



        </div></div> */}
    </div>
    
    
    
    </>
  )
}

export default ContactUs