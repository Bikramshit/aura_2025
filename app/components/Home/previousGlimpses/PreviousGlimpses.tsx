import React from 'react'

import Marquee from "@/components/magicui/marquee";
import { cn } from '@/lib/utils';
import Image from 'next/image';


// const Items = [
//   {
//     icon:<GrGamepad/>,
//     name:"Gamers",
//   },
//   {
//     icon:<IoMdRocket/>,
//     name:"Startups",
//   },
//   {
//     icon:<BsBuildingsFill/>,
//     name:"Enterprises",
//   },
//   {
//     icon:<FaUserGraduate/>,
//     name:"Students",
//   },
//   {
//     icon:<FaUserTie/>,
//     name:"Professionals",
//   },
//   {
//     icon:<RxComponent1 />,
//     name:"Designers",
//   },
//   {
//     icon:<MdEngineering/>,
//     name:"Engineers",
//   },
//   {
//     icon:<MdManageAccounts/>,
//     name:"Product Managers",
//   },
//   {
//     icon:<BadgeDollarSign/>,
//     name:"Finance",
//   },
//   {
//     icon:<RiBriefcaseLine/>,
//     name:"Job Portal",
//   },
//   {
//     icon:<IoMdAnalytics/>,
//     name:"Data Analytics",
//   },
//   {
//     icon:<MdPermMedia/>,
//     name:"Media",
//   },
//   {
//     icon:<GrTechnology/>,
//     name:"Technology",
//   },
  
// ]

const Items = [
  "https://foxcolab.s3.ap-south-1.amazonaws.com/DSC01139+(1).jpg",
  "/assets/previous/aura24/DSC00921.JPG",
  "/assets/previous/aura24/DSC00959.JPG",
  "/assets/previous/aura24/DSC00986.JPG",
  "/assets/previous/aura24/DSC01055(1).JPG",
  "/assets/previous/aura24/DSC01058(1).JPG",
  "/assets/previous/aura24/DSC01060.JPG",
  "/assets/previous/aura24/DSC01073.JPG",
  "/assets/previous/aura24/DSC01101.JPG",
  "/assets/previous/aura24/DSC01117.JPG",
  "/assets/previous/aura24/DSC01129.JPG",
  "/assets/previous/aura24/DSC01138.JPG",
  "/assets/previous/aura24/IMG_1450.JPG",
  "/assets/previous/aura24/IMG_1460.JPG",
  "/assets/previous/aura24/IMG_1465.JPG",
  "/assets/previous/aura24/IMG_1611.JPG",
  "/assets/previous/aura24/IMG_1627.JPG",
  "/assets/previous/aura24/IMG_1630.JPG",
  "/assets/previous/aura24/IMG_1633.JPG",
  "/assets/previous/aura24/IMG_1661.JPG",
  "/assets/previous/aura24/IMG_1720.JPG",
  "/assets/previous/aura24/IMG_1731.JPG",
  "/assets/previous/aura24/IMG_1739.JPG",
  "/assets/previous/aura24/IMG_1746.JPG",
  "/assets/previous/aura24/IMG_1747.JPG",
  "/assets/previous/aura24/IMG_1748.JPG",
  "/assets/previous/aura24/IMG_1765.JPG",
  "/assets/previous/aura24/IMG_1783.JPG",
  "/assets/previous/aura24/IMG_1820.JPG",



]
const firstRow = Items
const secondRow = Items.reverse();

const ReviewCard = ({
  url
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  url:string
}) => {
  return (
    <figure
      className={cn(
        "relative   cursor-pointer overflow-hidden rounded-md md:rounded-xl border p-0 md:p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2 justify-center  rounded-lg ">
        
        <Image src={url} alt='' height={100} width={100} className='h-[7rem] md:h-[10rem] w-auto rounded-md md:rounded-md border overflow-hidden' unoptimized />
        {/* <span className=" text-[1.2rem] sm:text-[1.1rem] md:[1.5rem] lg:text-[2rem]">{icon}</span>  <span className="font-semibold text-[1rem] sm:text-[1.2rem] ">{name}</span> */}
              </div>
    </figure>
  );
};

function PreviousGlimpses() {
  return (
    <>
    
<div className='w-full'>
<div className="relative flex  mx-[2rem] flex-col items-center justify-center overflow-hidden rounded-lg py-20   bg-[#0d1316]">

{/* <div className="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.8rem] font-bold pb-4 italic">
  <span>A</span>
  <span className="modern_animation text-[#E04D6C]  word_animation"></span>
  <span>{" "}for</span>
</div> */}

<div className='flex items-center flex-col mb-4'>
    <div className='text-[1.5rem] md:text-[2rem] text-center font-semibold logo_font relative'>
      <span className='absolute h-4 left-0 right-0 bottom-2 bg-[#42484b] z-1'></span>
      <span className='z-50 relative px-2'>Glimpses of <span className='text-yellow-500 logo_font'>AURA</span></span></div>
    <div className='font-semibold text-[1.2rem] text-[#30b6d8] uppercase '>Previous Editions</div>
</div>
  <Marquee pauseOnHover className="[--duration:60s] md:[--duration:60s]">
    {firstRow.map((item, index) => (
      <ReviewCard key={index} url={item} />
    ))}
  </Marquee>
  <Marquee reverse pauseOnHover className="[--duration:60s] md:[--duration:60s]">
    {secondRow.map((item, index) => (
      <ReviewCard key={index} url={item} />
    ))}
  </Marquee>
  {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background hidden md:inline"></div>
  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background hidden md:inline"></div> */}
</div>
</div>
    
    
    
    </>
  )
}

export default PreviousGlimpses