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
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Copy } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { useRouter } from "next/navigation";





function Participants() {
    const [abstractId, setAbstractId] = useState('');
    const [transactionid, setTransactionId] = useState('');
    const[file,setfile] = useState(null);
    const [mobileNo, setMobileNo] = useState('');
    const [copied, setCopied] = useState(false);
    const [abstract, setAbstract] = useState<Synopsis | null>(null)
    const [loading, setLoading] = useState(false);
    const [box, setIsChecked] = useState(false);


      const router = useRouter();
    


    const onSubmit =async()=>{
        try {
            if(abstractId==='' || mobileNo==='' || abstract===null || (abstract.university!=="Aliah University" && (transactionid==null || file==null))){
              toast.error("Please enter all the fields");
              return;
            }

          if(box===false){
            toast.error("You must agree to the terms and conditions before proceeding.");
            return;
          }

            setLoading(true);

            const formData = new FormData();
            formData.append("abstractId", abstract.id);
            formData.append("mobileNo", mobileNo);
            formData.append("transactionId", transactionid);
            formData.append("file", file);
            formData.append("university", abstract.university);

            // const res = await axios.post('/api/synopsis/register', {
            //   abstractId:abstractId,
            //   mobileNo:mobileNo,
            //   transactionid:transactionid, 
            //   file:file
            // });
            const res = await axios.post('/api/synopsis/register', formData, {
              headers: {
                'Content-Type': 'multipart/form-data', 
              }});
               if(res.status===200){
                    toast.success("Thank you for registering.");
                    router.push('/');
                    }else {
                      console.log("Error");
                    }
            setLoading(false);
          } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }


    const handleSubmit = async()=>{
        try {
            if(abstractId==="" || mobileNo===""){
                toast.error("Please fill all the fields");
                return;
            }
            setLoading(true);
            
            const res = await axios.post('/api/synopsis/find', {abstractId:abstractId, mobileNo});

            if(res.status===200){
                if(res.data.isFound){
                  toast.error("You have already registered. Thank you.");
                  setLoading(false);
                  return;
                }
                setAbstract(res.data.abstract);
            }else {
              toast.error("Something went wrong");
            }
            setLoading(false);


        } catch (error) {
            toast.error("Something went wrong");
            setLoading(false);
            
        }
    }


    const CopyUPIHandler =async()=>{
      setCopied(true);
      await navigator.clipboard.writeText("1000240220000261.8584853806@idbi");
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
                <>
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

                    {
                      abstract.university!=="Aliah University"  && <>

                      <div className="py-4">

                        



                        <Image src={"/assets/AU_QR.jpeg"} className="h-[25rem] w-auto p-4 bg-white rounded-md" height={100} width={100} unoptimized alt="" />
                        <div className="pt-4">
                        
                        <div className="flex items-center  gap-4">
                        <Link href={"/assets/AU_QR.jpeg"} className="px-4 py-[0.5rem] rounded-md bg-black border-gray-500 text-[0.9rem]" target="_blank">Download the QR</Link>
                        <Button className="flex items-center justify-center" onClick={CopyUPIHandler}> <Copy/> {
                          copied ? "Copied" : "Copy the UPI Id"
                        } </Button>
                        </div>
                        </div>

                        <div className="text-[0.95rem] font-semibold mt-4">
                         <span className="text-yellow-500">Early Bird Registration Fee: </span><span className="line-through text-[0.9rem] text-red-500">₹1000</span> <span className="text-green-500 font-semibold text-[1rem]">₹800</span>

                        </div>
                       
                      </div>
                      <div className="mb-4">
            <div className="text-[0.95rem] font-semibold">Transaction Id / Payment Reference Id:</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setTransactionId(e.target.value)}  />{" "}
            </div>
          </div>

          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Upload Payment Proof (pdf only):</div>
            <div className="my-2">
              {" "}
              <Input type="file" onChange={(e)=>setfile(e.target.files[0])}  accept="application/pdf" />{" "}
            </div>
          </div>

                      </>
                    }







<div className="flex items-start space-x-2 mt-6 mb-4">
      <Checkbox id="terms" className="w-[1.1rem] h-[1.1rem] border-gray-400"    checked={box}
        onCheckedChange={(e)=>{console.log(e);setIsChecked(e)}}  />
      <label
        // htmlFor="terms"
        className=" font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[0.95rem]"
      >
        I confirm that all the details provided are accurate. I understand that any misleading information may result in the rejection of my application.
      </label>
    </div>   
                
                
                
                </>









                )
            }



          <div className="pt-4">
          
          {
            loading ?  <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-600 flex justify-center gap-2 items-center" disabled> <AiOutlineLoading3Quarters className="animate-spin text-[1.2rem]" />  Please wait </button>
            :
            (
              <>
              {
                abstract ? 
                <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-500 " onClick={onSubmit}>  Confirm your Seat </button> :
                <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-500 " onClick={handleSubmit}>  Next </button> 
              }
              
              </>
            )
            
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