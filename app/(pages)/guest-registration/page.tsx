"use client";
import Header from '@/app/components/Header/Header';
import ContactUs from '@/app/components/Home/contactUs/ContactUs';
import Footer from '@/app/components/Home/Footer/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@radix-ui/react-checkbox';
import axios from 'axios';
import { Copy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function GuestRegistration() {
        const [mobileNo, setMobileNo] = useState('');
        const [name, setName] = useState('');
        const [email ,setEmail] = useState('');
        const [affilation, setAffilation] = useState('');
        const [designation, setDesignation] = useState('');

        const[file,setfile] = useState(null);
        
        const [transactionid, setTransactionId] = useState('');
        const [copied, setCopied] = useState(false);
        
        const [loading, setLoading] = useState(false);
        const [box, setIsChecked] = useState(false);

        const router = useRouter();
    


    const onSubmit =async()=>{
        try {
            if(name==='' || mobileNo==='' || email==='' || affilation=='' || designation=='' || transactionid==='' ||  file==null){
              toast.error("Please enter all the fields");
              return;
            }


            setLoading(true);

            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("affiliation", affilation);
            formData.append("designation", designation);
            formData.append("phoneNo", mobileNo);
            formData.append("paymentId", transactionid);
            formData.append("file", file);

            // const res = await axios.post('/api/synopsis/register', {
            //   abstractId:abstractId,
            //   mobileNo:mobileNo,
            //   transactionid:transactionid, 
            //   file:file
            // });
            const res = await axios.post('/api/guest/new', formData, {
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
            // if(abstractId==="" || mobileNo===""){
            //     toast.error("Please fill all the fields");
            //     return;
            // }
            // setLoading(true);
            
            // const res = await axios.post('/api/synopsis/find', {abstractId:abstractId, mobileNo});

            // if(res.status===200){
            //     if(res.data.isFound){
            //       toast.error("You have already registered. Thank you.");
            //       setLoading(false);
            //       return;
            //     }
            //     setAbstract(res.data.abstract);
            // }else {
            //   toast.error("Something went wrong");
            // }
            // setLoading(false);


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
  <div className="px-4 md:px-8  text-center text-[1.5rem] md:text-[2rem] font-semibold relative">
          <span className="relative">
            <span className="absolute left-0 right-0 bottom-[0rem] h-3 md:h-4 bg-[#484848] md:px-4"></span>
            <span className="relative z-10 px-4">
              <span className="logo_font text-yellow-500 ">AURA</span> - 2025
            </span>
          </span>
        </div>

  <div className="text-center text-[1.4rem] md:text-[1.6rem] font-semibold mt-2 text-yellow-500 font-merriweather ">
  Guest Registration 
  </div>

 <div className="px-4 md:px-[3rem] py-8">
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Name</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setName(e.target.value)} />{" "}
            </div>
          </div>
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Mobile No </div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setMobileNo(e.target.value)}   />{" "}
            </div>
          </div>
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Email </div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setEmail(e.target.value)}   />{" "}
            </div>
          </div>
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Affiliation </div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setAffilation(e.target.value)}   />{" "}
            </div>
          </div>
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Designation </div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setDesignation(e.target.value)}   />{" "}
            </div>
          </div>


            

<div className="py-4">

  



  <Image src={"/assets/AU_QR.jpeg"} className="h-[25rem] w-auto mt-4 mb-2 p-4 bg-white rounded-md" height={100} width={100} unoptimized alt="" />
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








                
              










          <div className="pt-4">
          
          {
            loading ?  <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-600 flex justify-center gap-2 items-center" disabled> <AiOutlineLoading3Quarters className="animate-spin text-[1.2rem]" />  Please wait </button>
            :
            <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-500 " onClick={onSubmit}>  Confirm your Seat </button> 
            
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

export default GuestRegistration;