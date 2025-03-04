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
  "/assets/winners/DSC_2850 Large.jpeg",
  "/assets/winners/DSC_2863 Large.jpeg",
  "/assets/winners/DSC_2864 Large.jpeg",
  "/assets/winners/DSC_2871 Large.jpeg",
  "/assets/winners/DSC_2875 Large.jpeg",
  "/assets/winners/DSC_2881 Large.jpeg",
  "/assets/winners/DSC_2882 Large.jpeg",
  "/assets/winners/DSC_2887 Large.jpeg",
  "/assets/winners/DSC_2888 Large.jpeg",
  "/assets/winners/DSC_2890 Large.jpeg",
  "/assets/winners/DSC_2894 Large.jpeg",
  "/assets/winners/DSC_2897 Large.jpeg",
  "/assets/winners/DSC_2898 Large.jpeg",
  "/assets/winners/DSC_2901 Large.jpeg",
  "/assets/winners/DSC_2908 Large.jpeg",
  "/assets/winners/DSC_2911 Large.jpeg",
  "/assets/winners/DSC_2912 Large.jpeg",
  "/assets/winners/DSC_2916 Large.jpeg",
  "/assets/winners/DSC_2919 Large.jpeg",
  "/assets/winners/DSC_2922 Large.jpeg",
  "/assets/winners/DSC_2929 Large.jpeg",
  "/assets/winners/DSC_2932 Large.jpeg",
  "/assets/winners/DSC_2934 Large.jpeg",
  "/assets/winners/DSC_2938 Large.jpeg",
  "/assets/winners/DSC_2948 Large.jpeg",
  "/assets/winners/DSC_2953 Large.jpeg",
  "/assets/winners/DSC_2955 Large.jpeg",
  "/assets/winners/DSC_2957 Large.jpeg",
  "/assets/winners/DSC_2969 Large.jpeg",
  "/assets/winners/DSC_3117 Large.jpeg",
  "/assets/winners/DSC_3118 Large.jpeg",
  "/assets/winners/DSC_3146 Large.jpeg",
  "/assets/winners/DSC_3155 Large.jpeg",
  "/assets/winners/DSC_3177 Large.jpeg",
  "/assets/winners/DSC_3181 Large.jpeg",
  "/assets/winners/DSC_3203 Large.jpeg",
  "/assets/winners/DSC_3212 Large.jpeg",
  "/assets/winners/DSC_3233 Large.jpeg",
  "/assets/winners/DSC_3234 Large.jpeg",
  "/assets/winners/DSC_3239 Large.jpeg",
  "/assets/winners/DSC_3248 Large.jpeg",
  "/assets/winners/DSC_3255 Large.jpeg",
  "/assets/winners/DSC_3259 Large.jpeg",
  "/assets/winners/DSC_3263 Large.jpeg",
  "/assets/winners/DSC_3264 Large.jpeg",
  "/assets/winners/DSC_3268 Large.jpeg",
  "/assets/winners/DSC_3271 Large.jpeg",
  "/assets/winners/DSC_3373 Large.jpeg",
  "/assets/winners/DSC_3404 Large.jpeg",
  "/assets/winners/DSC_3406 Large.jpeg",
  "/assets/winners/DSC_3433 Large.jpeg",
  "/assets/winners/DSC_3530 Large.jpeg",
  "/assets/winners/c2/DSC_0005 Large.jpeg",
  "/assets/winners/c2/DSC_0018 Large.jpeg",
  "/assets/winners/c2/DSC_0024 Large.jpeg",
  "/assets/winners/c2/DSC_0025 Large.jpeg",
  "/assets/winners/c2/DSC_0028 Large.jpeg",
  "/assets/winners/c2/DSC_0031 Large.jpeg",
  "/assets/winners/c2/DSC_0035 Large.jpeg",
  "/assets/winners/c2/DSC_0037 Large.jpeg",
  "/assets/winners/c2/DSC_0038 Large.jpeg",
  "/assets/winners/c2/DSC_0042 Large.jpeg",
  "/assets/winners/c2/DSC_0072 Large.jpeg",
  "/assets/winners/c2/DSC_0082 Large.jpeg",
  "/assets/winners/c2/DSC_0089 Large.jpeg",
  "/assets/winners/c2/DSC_0090 Large.jpeg",
  "/assets/winners/c2/DSC_0093 Large.jpeg",
  "/assets/winners/c2/DSC_0094 Large.jpeg",
  "/assets/winners/c2/DSC_0095 Large.jpeg",
  "/assets/winners/c2/DSC_0096 Large.jpeg",
  "/assets/winners/c2/DSC_0098 Large.jpeg",
  "/assets/winners/c2/DSC_0100 Large.jpeg",
  "/assets/winners/c2/DSC_0111 Large.jpeg",
  "/assets/winners/c2/DSC_0113 Large.jpeg",
  "/assets/winners/c2/DSC_0114 Large.jpeg",
  "/assets/winners/c2/DSC_0124 Large.jpeg",
  "/assets/winners/c2/DSC_0132 Large.jpeg",
  "/assets/winners/c2/DSC_0135 Large.jpeg",
  "/assets/winners/c2/DSC_0148 Large.jpeg",
  "/assets/winners/c2/DSC_0156 Large.jpeg",
  "/assets/winners/c2/DSC_0157 Large.jpeg",
  "/assets/winners/c2/DSC_0170 Large.jpeg",
  "/assets/winners/c2/DSC_0171 Large.jpeg",
  "/assets/winners/c2/DSC_0175 Large.jpeg",
  "/assets/winners/c2/DSC_0177 Large.jpeg",
  "/assets/winners/c2/DSC_0181 Large.jpeg",
  "/assets/winners/c2/DSC_0183 Large.jpeg",
  "/assets/winners/c2/DSC_0184 Large.jpeg",
  "/assets/winners/c2/DSC_0191 Large.jpeg",
  "/assets/winners/c2/DSC_0203 Large.jpeg",
  "/assets/winners/c2/DSC_0204 Large.jpeg",
  "/assets/winners/c2/DSC_0212 Large.jpeg",
  "/assets/winners/c3/DSC_0084.JPG",
  "/assets/winners/c2/DSC_0228 Large.jpeg",
  "/assets/winners/c2/DSC_0229 Large.jpeg",
  "/assets/winners/c2/DSC_0230 Large.jpeg",
  "/assets/winners/c2/DSC_0232 Large.jpeg",
  "/assets/winners/c2/DSC_0238 Large.jpeg",
  "/assets/winners/c2/DSC_0242 Large.jpeg",
  "/assets/winners/c2/DSC_0251 Large.jpeg",
  "/assets/winners/c2/DSC_0255 Large.jpeg",
  "/assets/winners/c2/DSC_0256 Large.jpeg",
  "/assets/winners/c2/DSC_0260 Large.jpeg",
  "/assets/winners/c2/DSC_0261 Large.jpeg",
  "/assets/winners/c2/DSC_0263 Large.jpeg",
  "/assets/winners/c2/DSC_0265 Large.jpeg",
  "/assets/winners/c2/DSC_0311 Large.jpeg",
  "/assets/winners/c2/DSC_0327 Large.jpeg",
  "/assets/winners/c2/DSC_0363 Large.jpeg",
  "/assets/winners/c2/DSC_0384 Large.jpeg",
  "/assets/winners/c2/DSC_0393 Large.jpeg",
  "/assets/winners/c2/DSC_0396 Large.jpeg",
  "/assets/winners/c2/DSC_0399 Large.jpeg",
  "/assets/winners/c2/DSC_0402 Large.jpeg",
  "/assets/winners/c2/DSC_0406 Large.jpeg",
  "/assets/winners/c2/DSC_0413 Large.jpeg",
  "/assets/winners/c2/DSC_0418 Large.jpeg",
  "/assets/winners/c2/DSC_0423 Large.jpeg",
  "/assets/winners/c2/DSC_0425 Large.jpeg",
  "/assets/winners/c2/DSC_0429 Large.jpeg",
  "/assets/winners/c2/DSC_0427 Large.jpeg",
  "/assets/winners/c2/DSC_0432 Large.jpeg",
  "/assets/winners/c2/DSC_0429 Large.jpeg",
  "/assets/winners/c2/DSC_0439 Large.jpeg",
  "/assets/winners/c2/DSC_0443 Large.jpeg",
  "/assets/winners/c2/DSC_0463 Large.jpeg",
  "/assets/winners/c2/DSC_0470 Large.jpeg",
  "/assets/winners/c2/DSC_0478 Large.jpeg",
  "/assets/winners/c2/DSC_0482 Large.jpeg",
  "/assets/winners/c2/DSC_0486 Large.jpeg",
  "/assets/winners/c2/DSC_0492 Large.jpeg",
  "/assets/winners/c2/DSC_0495 Large.jpeg",
  "/assets/winners/c3/IMG_3627.JPG",
  "/assets/winners/c2/DSC_0499 Large.jpeg",
  "/assets/winners/c2/DSC_0512 Large.jpeg",
  "/assets/winners/c2/DSC_0513 Large.jpeg",
  "/assets/winners/c2/DSC_0518 Large.jpeg",
  "/assets/winners/c2/DSC_0523 Large.jpeg",
  "/assets/winners/c2/DSC_0527 Large.jpeg",
  // "/assets/winners/c2/DSC_0Large5jpegJPG",
  "/assets/winners/c2/DSC_0532 Large.jpeg",
  "/assets/winners/c2/IMG_3434 Large.jpeg",
  "/assets/winners/c2/IMG_3442 Large.jpeg",
  "/assets/winners/c2/IMG_3621 Large.jpeg",
  "/assets/winners/c2/IMG_3631 Large.jpeg",
  "/assets/winners/c2/IMG_3641 Large.jpeg",
  "/assets/winners/c2/IMG_3635 Large.jpeg",
  "/assets/winners/c2/IMG_3644 Large.jpeg",
  "/assets/winners/c2/IMG_3648 Large.jpeg",
  "/assets/winners/c2/IMG_3651 Large.jpeg",
  "/assets/winners/c2/IMG_3658 Large.jpeg",
  "/assets/winners/c2/IMG_3664 Large.jpeg",
  "/assets/winners/c2/IMG_3692 Large.jpeg",
  "/assets/winners/c2/IMG_3698 Large.jpeg",
  "/assets/winners/c2/IMG_3693 Large.jpeg",
  "/assets/winners/c2/IMG_3699 Large.jpeg",
  "/assets/winners/c2/IMG_3704 Large.jpeg",
  "/assets/winners/c2/IMG_3732 Large.jpeg",
  "/assets/winners/c2/IMG_3733 Large.jpeg",
  "/assets/winners/c2/IMG_3745 Large.jpeg",
  "/assets/winners/c2/IMG_3746 Large.jpeg",
  "/assets/winners/c2/IMG_3748 Large.jpeg",
  "/assets/winners/c2/IMG_3749 Large.jpeg",
  "/assets/winners/c2/IMG_3778 Large.jpeg",
  "/assets/winners/c2/IMG_3780 Large.jpeg",
  "/assets/winners/c2/IMG_3782 Large.jpeg",
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
