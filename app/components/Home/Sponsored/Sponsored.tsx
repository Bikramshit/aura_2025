import Link from 'next/link'
import React from 'react'


const Items = [
    "MongoDB",
    "MongoDB",
    "MongoDB",
    "MongoDB",
    "MongoDB",
    "MongoDB",
    "MongoDB",
    "MongoDB",
    "MongoDB",
    "MongoDB",
    "MongoDB",
    "MongoDB",
]
function Sponsored() {
  return (
    <>
    
    
    <div className='mx-4 md:mx-8 lg:mx-[10rem] bg-[#1A1A1D] px-4 md:px-[3rem] py-[1rem] rounded-md shadow-lg border border-[#2d2d2d] relative'>
        <div className='text-center text-[1.5rem] md:text-[2rem] font-semibold my-8 logo_font'>Our <span className='text-yellow-500 relative'><span className='absolute left-0 right-0 bottom-0 h-2 bg-[#373737] z-1'></span> <span className='relative z-10'>Sponsors</span></span></div>

        <div className='absolute h-[6rem] w-[6rem] rounded-full bg-[#37b7e6] right-[1rem] top-[5rem] z-1'></div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10'>
            {
                Items.map((item, i)=>(
                    <div key={i} className='bg-white h-[6rem] md:h-[8rem] rounded-md hover:bg-[#e8f6f9] hover:shadow-lg hover:cursor-pointer'>
                        
                    </div>
                ))
            }
        </div>

        <div className='flex justify-center items-center mt-12 mb-8'>
            <Link href={"mailto:aura@aliah.ac.in"} className='px-6 py-[0.3rem] rounded-full bg-green-500 font-[900] text-[1.0rem] font-merriweather flex items-center justify-center gap-2'>Call for Sponsorship</Link>
        </div>
    </div>
    
    
    
    
    </>
  )
}

export default Sponsored