import React from 'react'
// import Map from './Map'
import { SlCalender } from 'react-icons/sl'
import { FaLinkedin, FaLocationDot } from 'react-icons/fa6'
import Link from 'next/link'
import { FaFacebookSquare } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), { ssr: false });



function Footer() {
    const router = useRouter();
    const Location = {
        lat:22.5896348, 
        lng: 88.4864680
    }

    

    const LinkedInHandler =()=>{
        
    }
  return (
    <>
    
    <div className='w-full bg-[#131313] pt-12 pb-4 p-4'>
        <div className='flex flex-col md:flex-row justify-around gap-12  mb-4'>
            <div className='flex items-start  flex-col'>
                <div className='text-[0.9rem] font-semibold w-full'>AURA - 2025</div>
                <div>
                <Image src={"https://res.cloudinary.com/dbzpzmxpd/image/upload/v1734291685/WhatsApp_Image_2024-12-12_at_12.41.32_2_qpwt0i.jpg"} alt='' className='rounded-md' height={100} width={100} unoptimized />
                </div>
                 </div>
            <div>
                <div className='text-[0.9rem] font-semibold w-full'>VENUE</div>
                <div className='w-full'>
                    <Map location={Location}/>
                    <div className=' text-[0.9rem] mt-4 flex items-center gap-2 text-yellow-500 font-merriweather font-semibold' ><SlCalender/> <span>25<sup>th</sup>, 27<sup>th</sup> February, 2025</span></div>
                    <div className='font-merriweather text-[0.9rem] flex items-center gap-2 mt-2 font-semibold'><FaLocationDot/> Aliah University, Newtown Campus</div>
                </div>
            </div>
            <div>
                <div className='text-[0.9rem] font-semibold'>RESOURCES</div>
                <div className='mt-4 flex flex-col'>
                    <Link href={"/AURA_2025_Poster.pdf"} className='hover:underline font-semibold font-merriweather text-yellow-500' target='_blank' rel="noopener noreferrer"> Announcement</Link>
                    <Link href={"/assets/AURA_2025_ROADMAP_v.2.pdf"} className='hover:underline font-semibold font-merriweather text-yellow-500' target='_blank' rel="noopener noreferrer">AURA 2025 RoadMap</Link>
                    <Link href={"/AURA_2025_Guidelines.pdf"} className='hover:underline font-semibold font-merriweather text-yellow-500' target='_blank' rel="noopener noreferrer">Guidelines</Link>
                    <Link href={"/assets/AURA_2025_Brochure_v.2.pdf"} className='hover:underline font-semibold font-merriweather text-yellow-500' target='_blank' rel="noopener noreferrer">AURA 2025 Brochure</Link>
                    <Link href={"/assets/AURA_Sponsorship_Brochure.pdf"} className='hover:underline font-semibold font-merriweather text-yellow-500' target='_blank' rel="noopener noreferrer">Sponsorship Brochure</Link>
                    <Link href={"/assets/SponsorshipForm.pdf"} className='hover:underline font-semibold font-merriweather text-yellow-500' target='_blank' rel="noopener noreferrer">Sponsorship Form</Link>
                </div>
            </div>
            <div>
            <div className='text-[0.9rem] font-semibold'>SOCIAL LINKS</div>
            <div className='flex items-center gap-4 mt-4'>
                <Link href={"https://www.facebook.com/profile.php?id=61553964573919"} className='text-[1.8rem] text-blue-500 ' target='_blank'><FaFacebookSquare/></Link>
                <Link className='text-[1.8rem] text-[#0077B5]' href={"https://www.linkedin.com/in/aliah-university-s-research-aspirations-688a0a2a1"} target='_blank'><FaLinkedin/></Link>
                <Link className='text-[1.8rem] text-red-500' href={"https://youtube.com/@aura_tech_fest?si=666175_Jh3T6wMh4"} target='_blank'><IoLogoYoutube/></Link>
                <Link href={"https://www.instagram.com/aliah_techfest/profilecard/?igsh=MWI3YXRjcmV6N2pibQ=="} target='_blank'><Image src={'https://img.icons8.com/?size=100&id=nj0Uj45LGUYh&format=png&color=000000'} alt='' className='h-[2.2rem] w-[2.2rem]' height={100} width={100} unoptimized /></Link>
            </div>

            </div>
        </div>

        <div className='border-b border-[#363636]'></div>
        <div className='text-center mt-4 text-[0.9rem] logo_font'>Designed by Team AURA</div>
    </div>
    
    
    </>
  )
}

export default Footer