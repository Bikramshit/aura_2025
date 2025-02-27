"use client";
import { Synopsis } from '@prisma/client';
import React, { useState } from 'react';
import Footer from '../Home/Footer/Footer';
import ContactUs from '../Home/contactUs/ContactUs';
import Header from '../Header/Header';
import { Input } from '@/components/ui/input';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Image from 'next/image';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Items = [
  {
      "Abstract_Id":"AURA2025001", 
      "GroupName":"STERNRITTERS",
      "Photo":"/assets/top_12/sterntritters.jpg"
  },
  {
      "Abstract_Id":"AURA2025008", 
      "GroupName":"THE MOTION MINDS",
      "Photo":"/assets/top_12/theMotoinMinds.jpg"
  },
  {
      "Abstract_Id":"AURA2025010", 
      "GroupName":"AquaSuraksha Pro",
      "Photo":"/assets/top_12/aqua.jpg"
  },
  {
      "Abstract_Id":"AURA2025011", 
      "GroupName":"THE TINKER TURTLE",
      "Photo":"/assets/top_12/theTinkerTurtle.jpeg"
  },
  {
      "Abstract_Id":"AURA2025012", 
      "GroupName":"Beyond Infinity",
      "Photo":"/assets/top_12/beyond_infinity.jpg"
  },
  {
      "Abstract_Id":"AURA2025014", 
      "GroupName":"TECH AVENGERS",
      "Photo":"/assets/top_12/techAvengers.jpg"
  },
  {
      "Abstract_Id":"AURA2025015", 
      "GroupName":"AlgoDrive",
      "Photo":"/assets/top_12/algo_drive.jpg"
  },
  {
      "Abstract_Id":"AURA2025016", 
      "GroupName":"SURETRICAL",
      "Photo":"/assets/top_12/surelectrical.jpg"
  },
  {
      "Abstract_Id":"AURA2025018", 
      "GroupName":"MindZed",
      "Photo":"/assets/top_12/mindzed.jpg"
  },
  {
      "Abstract_Id":"AURA2025037", 
      "GroupName":"THE DEFENDERS",
      "Photo":"/assets/top_12/theDefenders.jpg"
  },
  {
      "Abstract_Id":"AURA2025042", 
      "GroupName":"Tech Tribe",
      "Photo":"/assets/top_12/techTribe.jpg"
  },
  {
      "Abstract_Id":"AURA2025048", 
      "GroupName":"TechCrest",
      "Photo":"/assets/top_12/techCrest.jpg"
  }
  
  

]



interface Props {
    abstracts: Synopsis[]
}
function Vote({abstracts}:Props) {
      const [groupName, setGroupName] = useState('');
      const [abstractId, setAbstractId] = useState('');
      const [synopsisId, setSynopsisId] = useState('');
      const [code, setCode] = useState('')
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [rollNo, setRollNo] = useState('');
      const [loading, setLoading] = useState(false);


    
    const findPhoto = (id:string)=>{
        for(var i in Items){
           
            if(Items[i].Abstract_Id==id){
                return Items[i].Photo;
            }
        }
        return '';
    }

    const router = useRouter();

    const handleSubmit =async()=>{
      try {
        setLoading(true);
        const res  = await axios.post(`/api/vote`, {'name':name, 'email':email, 'rollNo':rollNo, 'code':code, 'abstractId':abstractId, 'synopsisId':synopsisId});

        if(res.status==200){
          setLoading(false);
          router.push('/');
          toast.success(`${res.data.message}`);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      toast.error(`${error.response.data.message}`);
        console.log(false);
      }
    }
  return (
    <>
    
    <Header />


    <div className="mx-4 md:mx-16 lg:mx-[12rem] bg-[#1e1e1f] my-8 md:my-[4rem] rounded-md md:rounded-lg shadow-md shadow-gray-900 pb-12">
        <div className="px-4 md:px-8 pt-8 text-center text-[1.5rem] md:text-[2rem] font-semibold relative">
          <span className="relative">
            <span className="absolute left-0 right-0 bottom-[0rem] h-3 md:h-4 bg-[#484848] md:px-4"></span>
            <span className="relative z-10 px-4">
              <span className="logo_font text-yellow-500 ">AURA</span> - 2025
            </span>
          </span>
        </div>

        <div className="text-center text-[1.3rem] md:text-[1.6rem] font-semibold mt-2 text-[#2aa1f5] font-merriweather">
        Vote for Your Favorite
        </div>

        <div className="px-4 md:px-[3rem] py-8">
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold"> Name</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setName(e.target.value)} />{" "}
            </div>
          </div>

          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Email</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setEmail(e.target.value)} />{" "}
            </div>
          </div>
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Roll No (optional)</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setRollNo(e.target.value)} />{" "}
            </div>
          </div>

          

          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Enter your Voting Code</div>

            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setCode(e.target.value)} />{" "}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4 justify-items-center  bg-[#18191e] p-4 rounded-md border border-[#414040] shadow-lg ">
    {abstracts.map((abstract, i) => (
        <button 
            key={i} 
            onClick={() => {setAbstractId(abstract.registrationId);setSynopsisId(abstract.id); console.log()}}
            className={`w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] rounded-full border-2 border-gray-300 cursor-pointer relative flex items-center justify-center text-white font-semibold transition-all duration-300 shadow-lg ${
                synopsisId === abstract.id ? 'ring-4 ring-blue-500' : ''
            }`}
            style={{
                backgroundImage: `url(${findPhoto(abstract.registrationId)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50 rounded-full"></div>

            {/* Responsive Text */}
            <span className="relative z-10 text-center text-xs sm:text-sm md:text-base font-bold px-2 font-merriweather leading-tight drop-shadow-lg text-[#fafafa]">
                {abstract.groupName}
            </span>
        </button>
    ))}
</div>




          {/* <div className="my-4 grid grid-cols-3 gap-4 mb-4">
            {
                abstracts && abstracts.map((abstract, i)=>(
                    <div key={i} onClick={()=>setAbstractId(abstract.id)}className={`flex flex-col items-center p-2 rounded-full border bg-gray-200 ${
                        abstractId === abstract.id ? "bg-blue-500 text-white" : ""
                      }`}>
 <Image
                  src={findPhoto(abstract.registrationId)}
                  alt={abstract.groupName}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
                {abstract.projectName}


                    </div>
                ))
            }
        </div> */}


         <div className="pt-4">

          {
            loading ?  <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-600 flex justify-center gap-2 items-center" disabled> <AiOutlineLoading3Quarters className="animate-spin text-[1.2rem]" />  Please wait </button>
            :
            <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-500 " onClick={handleSubmit}>  Vote Now </button>
          }

       
         
         </div>

        </div>
      </div>

<ContactUs />


      <Footer />
    
    
    </>
  )
}

export default Vote