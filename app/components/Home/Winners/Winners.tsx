import Image from 'next/image'
import React from 'react'
import { FaAward } from 'react-icons/fa6'

const winners = [
    {
      position: 1,
      teamName: "Team Alpha",
      members: ["Alice", "Bob", "Charlie"],
      image: "https://via.placeholder.com/150",
    },
    {
      position: 2,
      teamName: "Team Beta",
      members: ["David", "Eve"],
      image: "https://via.placeholder.com/150",
    },
    {
      position: 3,
      teamName: "Team Gamma",
      members: ["Frank"],
      image: "https://via.placeholder.com/150",
    },
  ];

function Winners() {
  return (
    <>
    
    <div className="mx-4 md:mx-16 my-8 p-6 md:p-12 winner_bg shadow-lg border border-gray-700 rounded-lg">
                {/* Title */}
                <div className="text-center text-2xl md:text-3xl font-bold font-merriweather bg-gradient-to-r from-[#fca452] to-[#fbe924] bg-clip-text  relative mb-4 flex items-center justify-center gap-2 text-yellow-500">
                  <span className='text-yellow-500'> <FaAward/></span> Winners <span className='text-yellow-500'><FaAward/></span>
                </div>
                <p className="text-center text-[#fa8e6d] mb-6 font-semibold">
                    Congratulations to the Teams for winning the AURA 2025! 🎉
                </p>
    
                <div className="flex items-end justify-center gap-4 p-8 relative">
                    <div className="flex flex-col items-center gap-4">
                        <div className='flex flex-col items-center justify-center bg-white p-4'>
                            <Image width={100} height={100} src={winners[0].image} alt={winners[0].teamName} className="rounded-full border-4 border-gray-300 mb-2" />
                            <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg font-bold">1st - {winners[0].teamName}</div>
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <div className='flex flex-col items-center bg-white p-4'>
                                <Image width={100} height={100} src={winners[1].image} alt={winners[1].teamName} className="rounded-full border-4 border-gray-300 mb-2" />
                                <div className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg font-bold">2nd - {winners[1].teamName}</div>
                            </div>
                            <div className='flex flex-col items-center bg-white p-4'>
                                <Image width={100} height={100} src={winners[2].image} alt={winners[2].teamName} className="rounded-full border-4 border-gray-300 mb-2" />
                                <div className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg font-bold">3rd - {winners[2].teamName}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default Winners
