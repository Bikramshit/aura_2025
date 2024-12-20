import Image from 'next/image'
import React from 'react'

function SecondHero() {
  return (
    <div className='pb-[5rem] mt-8'>

        <div className='mx-4 md:mx-[10rem] bg-[#07090F] p-4 pt-8 md:p-12 rounded-md shadow-md shadow-black border border-[#202020]'>
            <div className=' font-semibold  text-yellow-500 '>
              
              <span className='relative text-[1.1rem]'>
              <span className='absolute left-0 top-[-0.5rem] right-0 bg-yellow-500  h-1 uppercase'></span>
                ABOUT THE EVENT</span>

                <div className='grid grid-cols-1 gap-6 md:gap-0 lg:grid-cols-2 '>
                  <div className='mt-4 md:mt-8 text-white'>
                    <div>Aura is Aliah University’s flagship technical festival that celebates innovation, creativity and collaboration among students and researchers. started in 2024, AURA has become a hub for technical excellence, inspiring young minds to push boundaries in hardware innovations.</div>
                    <div className='mt-4'>
                      Mission is to provide a platform for showcasting technical prowess, promoting knowledge exchange, and nururing future leaders in technology.
                    </div>
                    <div className='mt-4'>
                    <span className='font-bold text-yellow-500'>Venue[In-Person]:</span> Aliah University (Newtown Campus)
                    <div><span className='font-bold text-yellow-500'>Dates:</span>25<sup>th</sup>, 27<sup>th</sup> February, 2024</div>

                    </div>
                    
                    </div>
                  <div className='w-full px-[1rem] md:px-[3rem]'>
                    <Image src={"https://foxcolab.s3.ap-south-1.amazonaws.com/isometric-set-server-equipment-computer-storage-farming-workstation-datacenter-storage-room-objects-blockchain-server-concept-vector-illustration_561158-2089-removebg-preview.png"} alt='' className='w-full h-auto' height={100} unoptimized width={100} />
                  </div>
                </div>
              
              </div>
        </div>

    </div>
  )
}

export default SecondHero