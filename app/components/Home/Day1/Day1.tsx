import Marquee from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';


const Items = [
    "https://foxcolab.s3.ap-south-1.amazonaws.com/DSC01139+(1).jpg",
    "/assets/day_1/IMG_3064.jpg",
    "/assets/day_1/IMG_3072.jpg",
    "/assets/day_1/IMG_3087.jpg",
    "/assets/day_1/IMG_3109.jpg",
    "/assets/day_1/IMG_3144.jpg",
    "/assets/day_1/IMG_3159.jpg",
    "/assets/day_1/IMG_3198.jpg",
    "/assets/day_1/IMG_3240.jpg",
    "/assets/day_1/IMG_3255.jpg",
    "/assets/day_1/IMG_3255.jpg",
    "/assets/day_1/IMG_3259.jpg",
    "/assets/day_1/IMG_3262.jpg",
    "/assets/day_1/IMG_3263.jpg",
    "/assets/day_1/IMG_3266.jpg",
    "/assets/day_1/IMG_3267.jpg",
    "/assets/day_1/IMG_3269.jpg",
    "/assets/day_1/IMG_3271.jpg",
    "/assets/day_1/IMG_3274.jpg",
    "/assets/day_1/IMG_3275.jpg",
    "/assets/day_1/IMG_3279.jpg",
    "/assets/day_1/IMG_3281.jpg",
    "/assets/day_1/IMG_3283.jpg",
    "/assets/day_1/IMG_3285.jpg",
    "/assets/day_1/IMG_3287.jpg",
    "/assets/day_1/IMG_3289.jpg",
    "/assets/day_1/IMG_3291.jpg",
    "/assets/day_1/IMG_3293.jpg",
    "/assets/day_1/IMG_3294.jpg",
    "/assets/day_1/IMG_3296.jpg",
    "/assets/day_1/IMG_3299.jpg",
    "/assets/day_1/IMG_3300.jpg",
    "/assets/day_1/IMG_3252.jpg",
    "/assets/day_1/IMG_3249.jpg",
    "/assets/day_1/IMG_3244.jpg",
    "/assets/day_1/IMG_3242.jpg",
    "/assets/day_1/IMG_3236.jpg",
    "/assets/day_1/IMG_3233.jpg",
    "/assets/day_1/IMG_3222.jpg",
    "/assets/day_1/IMG_32100.jpg",
    "/assets/day_1/IMG_3242.jpg",
    "/assets/day_1/IMG_3219.jpg",
    "/assets/day_1/IMG_3202.jpg",
    "/assets/day_1/IMG_3151.jpg",
    "/assets/day_1/IMG_3134.jpg",
    "/assets/day_1/IMG_3125.jpg",
    "/assets/day_1/IMG_3113.jpg",
    "/assets/day_1/IMG_3105.jpg",
    "/assets/day_1/IMG_3103.jpg",
    "/assets/day_1/IMG_3044.jpg",
    "/assets/day_1/IMG_3005.jpg",
    "/assets/day_1/IMG_2997.jpg",
    "/assets/day_1/IMG_2977.jpg",
    "/assets/day_1/IMG_2993.jpg",
    "/assets/day_1/IMG_31299.jpg",
    "/assets/day_1/IMG_31566.jpg",
    "/assets/day_1/IMG_2982.jpg",
    "/assets/day_1/IMG_2973.jpg",
    "/assets/day_1/IMG_2970.jpg",
    "/assets/day_1/IMG_2966.jpg",
    "/assets/day_1/IMG_2957.jpg",
    "/assets/day_1/mech.jpeg",
    "/assets/day_1/IMG_2956.jpg",
    "/assets/day_1/IMG_2951.jpg",
    "/assets/day_1/IMG_2950.jpg",
    "/assets/day_1/IMG_2947.jpg",
    "/assets/day_1/IMG_5178.jpeg",
    // "/public/assets/day_1/IMG_2947.jpg",
    // "/assets/day_1",
    // "/assets/day_1",
    // "/assets/day_1",
  
  
  
  ]
  



function Day1() {

    const [selectedImage, setSelectedImage] = useState<null | string>(null);



    
  return (
          <div className="mx-0 md:mx-16 my-8 p-4 md:p-12 selected_bg shadow-lg border border-gray-700 rounded-lg">
              {/* Title */}
              <div className="text-center text-2xl md:text-3xl font-bold font-merriweather bg-gradient-to-r from-[#fca452] to-[#fbe924] bg-clip-text text-transparent relative md:mb-4 p-2">
                  Preliminary Round - DAY 1
              </div>
              <p className="text-center text-gray-200 mb-6">
                  (25<sup>th</sup> February, 2025)
              </p>


              <div className='md:px-2 w-full'>
              <Dialog>
              <DialogTrigger className=" text-white p-1 md:p-2 rounded">
              <Image src={"/assets/day_1/main.jpg"} alt='' height={100} width={100} className='w-full rounded-md shadow-lg   border  border-[#cfcfd0]' unoptimized />


              </DialogTrigger>
              <DialogContent className="w-screen h-screen flex flex-col items-center justify-center">
                <Image src={"/assets/day_1/main.jpg"} alt="Selected" width={800} height={600} className="w-full h-full object-contain" />
                <a href={"/assets/day_1/main.jpg"} download className="mt-4">
                  <Button className="bg-green-600 text-white"><Download/></Button>
                </a>
                <DialogClose className="absolute top-4 right-4 bg-[#c5c5c5] text-white p-1 rounded"> <X/> </DialogClose>
              </DialogContent>
            </Dialog>
{/* 
                <Image src={"/assets/day_1/main.jpg"} alt='' height={100} width={100} className='w-full rounded-md shadow-lg   border  border-[#cfcfd0]' unoptimized /> */}
              </div>
  
   <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 mt-2">
   {Items.map((src, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Dialog>
              <DialogTrigger className=" text-white p-1 md:p-2 rounded">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-auto rounded-sm cursor-pointer shadow-md border object-cover"
                  onClick={() => setSelectedImage(src)}
                />
              </DialogTrigger>
              <DialogContent className="w-screen h-screen flex flex-col items-center justify-center">
                <Image src={selectedImage} alt="Selected" width={800} height={600} className="w-full h-full object-contain" />
                <a href={selectedImage} download className="mt-4">
                  <Button className="bg-green-600 text-white"><Download/></Button>
                </a>
                <DialogClose className="absolute top-4 right-4 bg-[#c5c5c5] text-white p-1 rounded"> <X/> </DialogClose>
              </DialogContent>
            </Dialog>

          </motion.div>
        ))}

   {/* {Items.map((src, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Dialog>
              <DialogTrigger>
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-auto rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                />
              </DialogTrigger>
              <DialogContent className="w-screen h-screen flex items-center justify-center">
                <Image src={selectedImage} alt="Selected" width={800} height={600} className="w-full h-full object-contain" />
              </DialogContent>
            </Dialog>
          </motion.div>
        ))} */}


        {/* {Items.map((src, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Dialog>
              <DialogTrigger>
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-auto rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                />
              </DialogTrigger>
              <DialogContent>
                <Image src={selectedImage as  String} alt="Selected" width={800} height={600} className="w-full h-auto" />
              </DialogContent>
            </Dialog>
          </motion.div>
        ))} */}
      </div>
          </div>
      );
}

export default Day1