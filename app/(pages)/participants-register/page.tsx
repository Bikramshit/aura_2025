"use client";

import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Home/Footer/Footer";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from 'react-hot-toast';
import ContactUs from "@/app/components/Home/contactUs/ContactUs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { Synopsis } from "@prisma/client";


function Participants() {
    const [abstractId, setAbstractId] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [abstract, setAbstract] = useState<Synopsis | null>(null)
    const [loading, setLoading] = useState(false);


    const onSubmit =async()=>{
        try {
            
        } catch (error) {
            
        }
    }


    const handleSubmit = async()=>{
        try {
            if(abstractId=="" || mobileNo==""){
                toast.error("Please fill all the fields");
                return;
            }
            setLoading(true);
            
            const res = await axios.post('/api/synopsis/find', {abstractId:abstractId, mobileNo});

            if(res.status===200){
                setAbstract(res.data.abstract);
            }
            setLoading(false);


        } catch (error) {
            setLoading(false);
            
        }
    }




  return (
    <>

<Header />

<div className="mx-4 md:mx-16 lg:mx-[12rem] bg-[#1e1e1f] my-8 md:my-[4rem] rounded-md md:rounded-lg shadow-md shadow-gray-900 pb-12">
  <div className="px-4 md:px-8 pt-8 text-center text-[1.5rem] md:text-[2rem] font-semibold relative">
    <span className="relative">
      
    </span>
  </div>

  <div className="text-center text-[1.3rem] md:text-[1.6rem] font-semibold mt-2 text-yellow-500 font-merriweather ">
  Selected Team Registration Form
  </div>

 <div className="px-4 md:px-[3rem] py-8">
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Abstract Id</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setAbstractId(e.target.value)} disabled={abstract!==null} />{" "}
            </div>
          </div>
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Mobile No (Any of your team member)</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setMobileNo(e.target.value)} disabled={abstract!==null}  />{" "}
            </div>
          </div>


            {
                abstract && (
                    <div className="bg-[#222222] p-4 rounded-md border border-gray-500 shadow">
                    <div className="flex items-center gap-4">
                    <div className="text-[0.95rem] font-semibold">Team Name:</div>
                    <div className="my-2 text-yellow-500 font-semibold">
                      {abstract.groupName}
                    </div>
                    </div>
                    <div className="flex items-center gap-4">
                    <div className="text-[0.95rem] font-semibold">Project Name:</div>
                    <div className="my-2 text-yellow-500 font-semibold">
                      {abstract.projectName}
                    </div>
                    </div>
                    <div className="flex items-center gap-4">
                    <div className="text-[0.95rem] font-semibold">College/ University Name:</div>
                    <div className="my-2 text-yellow-500 font-semibold">
                      
                      {abstract.college}
                    </div>
                    </div>
                    <div className="flex items-center gap-4">
                    <div className="text-[0.95rem] font-semibold">No of Member:</div>
                    <div className="my-2 text-yellow-500 font-semibold">
                      
                      {abstract.memberCount}
                    </div>
                    </div>

                    {
                        abstract.members.map((member, index)=>(
                            <div className="flex items-center gap-4" key={index}>
                            <div className="text-[0.95rem] font-semibold">Member {index+1}:</div>
                            <div className="my-2 text-yellow-500 font-semibold">
                              
                              {member.name} ({member.rollNo})
                            </div>
                            </div>
                        ))
                      }
                    </div>
                )
            }



          <div className="pt-4">
          
          {
            loading ?  <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-600 flex justify-center gap-2 items-center" disabled> <AiOutlineLoading3Quarters className="animate-spin text-[1.2rem]" />  Please wait </button>
            :
            <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-500 " onClick={handleSubmit}>  Next </button>
          }

        
        <div>
            
        </div>
         
         </div>
          </div>

          
           
     
  
</div>

<ContactUs />


<Footer />
    
    
    
    
    </>
  )
}

export default Participants;