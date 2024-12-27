import { AlarmClock } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const Items = [
    "Build a Network",
    "Skill Development",
    "Exciting Prizes",
    "Recognition",
    "Exclusive Perks",
    "& Many more 😄"
]
function Reward() {
  return (
    <>
    
    
    <div className='mx-[1rem] md:mx-[10rem] my-8 md:my-[3rem] rounded-lg p-4 md:p-12 reward_bg shadow-xl border border-slate-600'>

        <div className='text-[1.3rem] md:text-[2rem] font-bold text-yellow-500 text-center p-4'>INNOVATE, COLLABORATE, CONQUER!</div>
        <div className='text-center text-[1.0rem] font-semibold my-2 font-merriweather'>Experience AURA: where innovation thrives, ideas ignite, and brilliance shines. <span className='hidden md:inline'><br /></span> Join us to shape the future of technology</div>

        <div className='text-center font-semibold text-[1.5rem] md:text-[2rem] logo_font py-2 text-[#48ffb9]'>
            What will you get? 🤔
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center justify-center mt-4'>
            {
                Items.map((item, i)=>(
                    <div key={i} className='h-[9rem] w-[9rem] md:h-[12rem] md:w-[12rem] rounded-full flex items-center justify-center reward_text reward_item font-bold text-[1.1rem] md:text-[1.2rem] p-4 text-center shadow-lg font-merriweather border border-slate-900'>
                        {item}
                    </div>
                ))
            }

        </div>

        <div className='text-center font-semibold my-8 text-[1.2rem] flex flex-col items-center justify-center '>
      <span className='flex items-center gap-1 animate-bounce'>  <span className=''><AlarmClock /> </span>Time’s ticking!</span>  <Link href={'/register'} className='bg-yellow-500 px-2 py-[0.3rem] rounded-sm text-black'>Secure your spot now!</Link>
        </div>


    </div>
    
    
    </>
  )
}

export default Reward