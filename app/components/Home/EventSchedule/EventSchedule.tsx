import Image from 'next/image'
import React from 'react'

function EventSchedule() {
  return (
    <>
    
    <div className='w-full p-4 md:p-12 pb-12'>
        <div className='flex items-center justify-center flex-col'>
        <div className='text-[1.2rem] md:text-[2rem] font-semibold text-[#2bd3cd] mb-4'><span className=''>EVENT</span> SCHEDULE</div>
        {/* <div className='text-[1.3rem] font-semibold '><span className='logo_font text-yellow-500'>AURA</span> - 2025</div> */}
        <Image src={"/assets/AuraRoadmap.jpg"} alt='' height={100} width={100} className='w-full h-full rounded-lg' unoptimized />
          {/* <Image src={"https://res.cloudinary.com/dhtlzxed4/image/upload/v1733676245/cct14sojqcpjexc5aus3.jpg"} alt='' height={100} width={100} unoptimized className='w-full h-auto' /> */}
        </div>

    </div>
    
    
    
    </>
  )
}

export default EventSchedule