import Image from 'next/image'
import React, { useState } from 'react'
import { FaAward } from 'react-icons/fa6'
import { motion } from "framer-motion";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';
import Link from 'next/link';

const winners = [
  {
    "teamName":"TechCrest", 
    "image":"/assets/winners/top/DSC_3530.jpg"
   },
   {
    "teamName":"MindZed", 
    "image":"/assets/winners/top/DSC_3433.jpg"
   },
   {
    "teamName":"AquaSuraksha Pro", 
    "image":"/assets/winners/top/DSC_3404.jpg"
   },
   {
    "teamName":"STERNRITTERS", 
    "image":"/assets/winners/top/DSC_3373.jpg"
   },
  
   
   
  ];



const Items = [
  "/assets/winners/DSC_2850.jpg",
  "/assets/winners/DSC_2863.jpg",
  "/assets/winners/DSC_2864.jpg",
  "/assets/winners/DSC_2871.jpg",
  "/assets/winners/DSC_2875.jpg",
  "/assets/winners/DSC_2881.jpg",
  "/assets/winners/DSC_2882.jpg",
  "/assets/winners/DSC_2887.jpg",
  "/assets/winners/DSC_2888.jpg",
  "/assets/winners/DSC_2890.jpg",
  "/assets/winners/DSC_2894.jpg",
  "/assets/winners/DSC_2897.jpg",
  "/assets/winners/DSC_2898.jpg",
  "/assets/winners/DSC_2901.jpg",
  "/assets/winners/DSC_2908.jpg",
  "/assets/winners/DSC_2911.jpg",
  "/assets/winners/DSC_2912.jpg",
  "/assets/winners/DSC_2916.jpg",
  "/assets/winners/DSC_2919.jpg",
  "/assets/winners/DSC_2922.jpg",
  "/assets/winners/DSC_2929.jpg",
  "/assets/winners/DSC_2932.jpg",
  "/assets/winners/DSC_2934.jpg",
  "/assets/winners/DSC_2938.jpg",
  "/assets/winners/DSC_2948.jpg",
  "/assets/winners/DSC_2953.jpg",
  "/assets/winners/DSC_2955.jpg",
  "/assets/winners/DSC_2957.jpg",
  "/assets/winners/DSC_2969.jpg",
  "/assets/winners/DSC_3117.jpg",
  "/assets/winners/DSC_3118.jpg",
  "/assets/winners/DSC_3146.jpg",
  "/assets/winners/DSC_3155.jpg",
  "/assets/winners/DSC_3177.jpg",
  "/assets/winners/DSC_3181.jpg",
  "/assets/winners/DSC_3203.jpg",
  "/assets/winners/DSC_3212.jpg",
  "/assets/winners/DSC_3233.jpg",
  "/assets/winners/DSC_3234.jpg",
  "/assets/winners/DSC_3239.jpg",
  "/assets/winners/DSC_3248.jpg",
  "/assets/winners/DSC_3255.jpg",
  "/assets/winners/DSC_3259.jpg",
  "/assets/winners/DSC_3263.jpg",
  "/assets/winners/DSC_3264.jpg",
  "/assets/winners/DSC_3268.jpg",
  "/assets/winners/DSC_3271.jpg",
  "/assets/winners/DSC_3373.jpg",
  "/assets/winners/DSC_3404.jpg",
  "/assets/winners/DSC_3406.jpg",
  "/assets/winners/DSC_3433.jpg",
  "/assets/winners/DSC_3530.jpg",
  "/assets/winners/c2/DSC_0005.JPG",
  "/assets/winners/c2/DSC_0018.JPG",
  "/assets/winners/c2/DSC_0024.JPG",
  "/assets/winners/c2/DSC_0025.JPG",
  "/assets/winners/c2/DSC_0028.JPG",
  "/assets/winners/c2/DSC_0031.JPG",
  "/assets/winners/c2/DSC_0035.JPG",
  "/assets/winners/c2/DSC_0037.JPG",
  "/assets/winners/c2/DSC_0038.JPG",
  "/assets/winners/c2/DSC_0042.JPG",
  "/assets/winners/c2/DSC_0072.JPG",
  "/assets/winners/c2/DSC_0082.JPG",
  "/assets/winners/c2/DSC_0089.JPG",
  "/assets/winners/c2/DSC_0090.JPG",
  "/assets/winners/c2/DSC_0093.JPG",
  "/assets/winners/c2/DSC_0094.JPG",
  "/assets/winners/c2/DSC_0095.JPG",
  "/assets/winners/c2/DSC_0096.JPG",
  "/assets/winners/c2/DSC_0098.JPG",
  "/assets/winners/c2/DSC_0100.JPG",
  "/assets/winners/c2/DSC_0111.JPG",
  "/assets/winners/c2/DSC_0113.JPG",
  "/assets/winners/c2/DSC_0114.JPG",
  "/assets/winners/c2/DSC_0124.JPG",
  "/assets/winners/c2/DSC_0132.JPG",
  "/assets/winners/c2/DSC_0135.JPG",
  "/assets/winners/c2/DSC_0148.JPG",
  "/assets/winners/c2/DSC_0156.JPG",
  "/assets/winners/c2/DSC_0157.JPG",
  "/assets/winners/c2/DSC_0170.JPG",
  "/assets/winners/c2/DSC_0171.JPG",
  "/assets/winners/c2/DSC_0175.JPG",
  "/assets/winners/c2/DSC_0177.JPG",
  "/assets/winners/c2/DSC_0181.JPG",
  "/assets/winners/c2/DSC_0183.JPG",
  "/assets/winners/c2/DSC_0184.JPG",
  "/assets/winners/c2/DSC_0191.JPG",
  "/assets/winners/c2/DSC_0203.JPG",
  "/assets/winners/c2/DSC_0204.JPG",
  "/assets/winners/c2/DSC_0212.JPG",
  "/assets/winners/c3/DSC_0084.JPG",
  "/assets/winners/c2/DSC_0228.JPG",
  "/assets/winners/c2/DSC_0229.JPG",
  "/assets/winners/c2/DSC_0230.JPG",
  "/assets/winners/c2/DSC_0232.JPG",
  "/assets/winners/c2/DSC_0238.JPG",
  "/assets/winners/c2/DSC_0242.JPG",
  "/assets/winners/c2/DSC_0251.JPG",
  "/assets/winners/c2/DSC_0255.JPG",
  "/assets/winners/c2/DSC_0256.JPG",
  "/assets/winners/c2/DSC_0260.JPG",
  "/assets/winners/c2/DSC_0261.JPG",
  "/assets/winners/c2/DSC_0263.JPG",
  "/assets/winners/c2/DSC_0265.JPG",
  "/assets/winners/c2/DSC_0311.JPG",
  "/assets/winners/c2/DSC_0327.JPG",
  "/assets/winners/c2/DSC_0363.JPG",
  "/assets/winners/c2/DSC_0384.JPG",
  "/assets/winners/c2/DSC_0393.JPG",
  "/assets/winners/c2/DSC_0396.JPG",
  "/assets/winners/c2/DSC_0399.JPG",
  "/assets/winners/c2/DSC_0402.JPG",
  "/assets/winners/c2/DSC_0406.JPG",
  "/assets/winners/c2/DSC_0413.JPG",
  "/assets/winners/c2/DSC_0418.JPG",
  "/assets/winners/c2/DSC_0423.JPG",
  "/assets/winners/c2/DSC_0425.JPG",
  "/assets/winners/c2/DSC_0429.JPG",
  "/assets/winners/c2/DSC_0427.JPG",
  "/assets/winners/c2/DSC_0432.JPG",
  "/assets/winners/c2/DSC_0429.JPG",
  "/assets/winners/c2/DSC_0439.JPG",
  "/assets/winners/c2/DSC_0443.JPG",
  "/assets/winners/c2/DSC_0463.JPG",
  "/assets/winners/c2/DSC_0470.JPG",
  "/assets/winners/c2/DSC_0478.JPG",
  "/assets/winners/c2/DSC_0482.JPG",
  "/assets/winners/c2/DSC_0486.JPG",
  "/assets/winners/c2/DSC_0492.JPG",
  "/assets/winners/c2/DSC_0495.JPG",
  "/assets/winners/c3/IMG_3627.JPG",
  "/assets/winners/c2/DSC_0499.JPG",
  "/assets/winners/c2/DSC_0512.JPG",
  "/assets/winners/c2/DSC_0513.JPG",
  "/assets/winners/c2/DSC_0518.JPG",
  "/assets/winners/c2/DSC_0523.JPG",
  "/assets/winners/c2/DSC_0527.JPG",
  // "/assets/winners/c2/DSC_0528.JPG",
  "/assets/winners/c2/DSC_0532.JPG",
  "/assets/winners/c2/IMG_3434.JPG",
  "/assets/winners/c2/IMG_3442.JPG",
  "/assets/winners/c2/IMG_3621.JPG",
  "/assets/winners/c2/IMG_3631.JPG",
  "/assets/winners/c2/IMG_3641.JPG",
  "/assets/winners/c2/IMG_3635.JPG",
  "/assets/winners/c2/IMG_3644.JPG",
  "/assets/winners/c2/IMG_3648.JPG",
  "/assets/winners/c2/IMG_3651.JPG",
  "/assets/winners/c2/IMG_3658.JPG",
  "/assets/winners/c2/IMG_3664.JPG",
  "/assets/winners/c2/IMG_3692.JPG",
  "/assets/winners/c2/IMG_3698.JPG",
  "/assets/winners/c2/IMG_3693.JPG",
  "/assets/winners/c2/IMG_3699.JPG",
  "/assets/winners/c2/IMG_3704.JPG",
  "/assets/winners/c2/IMG_3732.JPG",
  "/assets/winners/c2/IMG_3733.JPG",
  "/assets/winners/c2/IMG_3745.JPG",
  "/assets/winners/c2/IMG_3746.JPG",
  "/assets/winners/c2/IMG_3748.JPG",
  "/assets/winners/c2/IMG_3749.JPG",
  "/assets/winners/c2/IMG_3778.JPG",
  "/assets/winners/c2/IMG_3780.JPG",
  "/assets/winners/c2/IMG_3782.JPG",
  "/assets/winners/c3/IMG_3455.JPG",
  // "/assets/winners/c3/IMG_3496.JPG",

 
]

function Winners() {
      const [selectedImage, setSelectedImage] = useState<null | string>(null);
  

  return (
    <>
    
    <div className="mx-4 md:mx-16 my-8 p-4 md:p-12  shadow-lg border border-gray-700 rounded-lg bg-gradient-to-br from-[#e7824f] to-[#082239]">
      {/* Title */}
      <div className="text-center text-2xl md:text-3xl font-bold font-merriweather bg-gradient-to-r from-[#fca452] to-[#fbe924] bg-clip-text mb-4 flex items-center justify-center gap-2 text-white">
        <FaAward />
        Winners
        <FaAward />
      </div>
      <p className="text-center text-[#6aff8c] mb-6 font-semibold">
        Congratulations to the teams for winning AURA 2025! 🎉
      </p>

      {/* Winners Section - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-8 justify-center">
        {winners.map((winner, index) => {
          const rankColors = ['bg-yellow-500', 'bg-gray-500', 'bg-orange-500', "bg-[#275c48]"];
          const rankEmojis = ['🥇 1st', '🥈 2nd', '🥉 3rd', " 🌟 Most Popular"];

          return (
            <div
              key={index}
              className={`flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border-4 w-full sm:w-[15rem] md:w-[18rem] h-auto relative`}
            >
              {/* Rank Badge */}
              <div
                className={`absolute top-2 right-2 ${rankColors[index]} text-white text-sm font-bold px-3 py-1 rounded-lg shadow-md`}
              >
                {rankEmojis[index]}
              </div>

              {/* Winner Image */}
              <Image
                width={180}
                height={180}
                src={winner.image}
                alt={winner.teamName}
                className="w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] object-cover rounded-md border-4 border-gray-300 mt-6"
                unoptimized
              />

              {/* Winner Name */}
              <div className={`${rankColors[index]} text-white px-4 py-2 rounded-lg shadow-lg font-bold mt-4 text-center`}>
                {winner.teamName}
              </div>
            </div>
          );
        })}
      </div>

      {/* Gallery Grid */}
      {/* <div className="text-center text-lg md:text-4xl font-bold text-white bg-gradient-to-r from-orange-400 to-yellow-300 py-4 rounded-lg shadow-md">
  Glimpses of Final Day
</div> */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-8">
        {Items.map((src, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Dialog>
              <DialogTrigger className="text-white p-1 md:p-2 rounded">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-40 sm:h-48 md:h-52 lg:h-56 rounded-sm cursor-pointer shadow-md border object-cover"
                  unoptimized
                  onClick={() => setSelectedImage(src)}
                />
              </DialogTrigger>
              <DialogContent className="w-screen h-screen flex flex-col items-center justify-center">
                <Image
                  src={selectedImage || ''}
                  alt="Selected"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                  unoptimized
                />
                <Link href={selectedImage} download className="mt-4">
                  <Button className="bg-green-600 text-white">
                    <Download />
                  </Button>
                </Link>
                <DialogClose className="absolute top-4 right-4 bg-[#c5c5c5] text-white p-1 rounded">
                  <X />
                </DialogClose>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default Winners
