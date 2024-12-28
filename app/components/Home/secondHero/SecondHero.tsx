import Image from 'next/image'
import React from 'react'

function SecondHero() {
  return (
    <div className='pb-[5rem] mt-10 md:mt-8'>

        <div className='mx-4 md:mx-[10rem] bg-[#07090F] p-4 pt-8 md:p-12 rounded-md shadow-md shadow-black border border-[#202020]'>
            
        <span className='relative text-[1.1rem] text-yellow-500 font-semibold'>
              <span className='absolute left-0 top-[-0.5rem] right-0 bg-yellow-500  h-1 uppercase'></span>
                ABOUT THE UNIVERSITY</span>
            <div className='mt-4 mb-8  font-semibold'>

            Aliah University started its glorious journey from the academic session 2008-09 with great potential and immense visual. It is found that this university is harmonizing our tradition and have emerged as a unique institution for higher education and in research field. As per the Parliament Act, 2007, Section 3 (3), it has conferred the status of a minority educational institution. It is an autonomous body under the Department of Minority Affairs and Madrasah Education, Government of West Bengal. The students belonging to any race, creed, caste or class, this University has played a crucial and leading role in the advancement of higher education in both socially and economically.
            </div>
            
            <div className=' font-semibold  text-yellow-500 '>

              <span className='relative text-[1.1rem]'>
              <span className='absolute left-0 top-[-0.5rem] right-0 bg-yellow-500  h-1 uppercase'></span>
                ABOUT THE EVENT</span>

                <div className='grid grid-cols-1 gap-6 md:gap-0 lg:grid-cols-2 '>
                  
                  <div className='mt-4 md:mt-8 text-white'>
                    <div>AURA is Aliah University’s flagship technical festival that facilitates innovation, creativity and collaboration with students and research scholars. Started in the year 2024, AURA has turn out to be a hub for technical excellence, inspiring young minds to push the boundaries in the field of hardware innovations.
                    </div>
                    <div className='mt-4'>
                    Our Mission is to endow with a platform for showcasing technical prowess, promoting knowledge and encouraging the future leaders in technology.
                    </div>
                    <div className='mt-4'>
                    <span className='font-bold text-yellow-500'>Venue[In-Person]:</span> Aliah University, Newtown Campus
                    <div><span className='font-bold text-yellow-500'>Dates:</span>25<sup>th</sup> & 27<sup>th</sup> February, 2025</div>

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