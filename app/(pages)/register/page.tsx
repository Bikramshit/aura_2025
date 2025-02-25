"use client";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Home/Footer/Footer";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from 'react-hot-toast';



import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ContactUs from "@/app/components/Home/contactUs/ContactUs";
import { redirect, useRouter } from "next/navigation";


function Register() {

  redirect('/');



  const [groupName, setGroupName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [universityName, setUniveristyName] = useState('Aliah University');
  const [description, setDescription] = useState<null | File>(null);
  const [collegeName, setCollegeName] = useState('');
  const [groupMember, setGroupMember] = useState('1');
  const [loading, setLoading] = useState(false);
  const [memberData, setMemberData] = useState([{name:"", email:"", rollNo:"", dept:"", number:"", file:{}}]);



  const MemberHandler=(fieldValue:string, index:number, value:string | File)=>{
   

    const updatedMembers = [...memberData];
    while (updatedMembers.length <= index) {
      updatedMembers.push({ name: "", email: "", rollNo: "", dept: "", number: "", file: {} });
    }


    
    if(fieldValue==="Name"){
      updatedMembers[index].name = value as string;
    }else if(fieldValue==="Email"){
      updatedMembers[index].email = value as string;
    }else if(fieldValue==="RollNo"){
      updatedMembers[index].rollNo = value as string;
    }else if(fieldValue==="Dept"){
      updatedMembers[index].dept = value as string;
    }else if(fieldValue==="WhatsappNo"){
      updatedMembers[index].number = value as string;
    }else if(fieldValue==="DocumentProof"){
      updatedMembers[index].file = value as File;
    }

    
    setMemberData(updatedMembers);
  }


  const GroupMemberHandler =(value:string)=>{
 
    value = value.replace(/[^0-9]/g, '');
  
    if(parseInt(value)<1){
      setGroupMember('1');
      return 1;
    }else if(parseInt(value)>4){
      setGroupMember('4');
      return 4;
    }else {
      setGroupMember(value);
      return value;
    }
  }




 
  const router = useRouter();


  const handleSubmit = async () => {
    setLoading(true);
    const isValid = groupName && projectName && collegeName && memberData.every((member) =>
      member.name && member.email && member.rollNo && member.dept && member.number && member.file
    );

    if(!isValid){
      toast.error("All the fields are mandatory.");
      setLoading(false);
      return;
    }



    try {
      const formData = new FormData();
      formData.append("groupName", groupName);
      formData.append("projectName", projectName);
      formData.append("university", universityName);
      formData.append("college", collegeName);
      formData.append("memberData", groupMember);
      formData.append("description", description  );

      memberData.forEach((member, index) => {
        formData.append(`members[${index}][name]`, member.name);
        formData.append(`members[${index}][email]`, member.email);
        formData.append(`members[${index}][rollNo]`, member.rollNo);
        formData.append(`members[${index}][dept]`, member.dept);
        formData.append(`members[${index}][number]`, member.number);
        formData.append(`members[${index}][file]`, member.file );
      });

      const res = await axios.post('/api/synopsis/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        }});

        setLoading(false);

      
      if(res.status===200){
      toast.success("Your abstract submitted successfully.");
      router.push('/');
      }else {
        console.log("Error");
      }

      // if (response.ok) {
      //   alert("Registration successful!");
      // } else {
      //   alert("Something went wrong. Please try again.");
      // }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };


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
          Abstract Application Form
        </div>

        <div className="px-4 md:px-[3rem] py-8">
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Team Name</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setGroupName(e.target.value)} />{" "}
            </div>
          </div>

          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Project Name</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setProjectName(e.target.value)} />{" "}
            </div>
          </div>

          

          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">University Name</div>
            <div className="my-2">
              <Select onValueChange={(value)=>setUniveristyName(value)} >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Aliah University">Aliah Univeristy</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="my-4" >
            <div className="text-[0.95rem] font-semibold">
              College&apos;s Name
            </div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>setCollegeName(e.target.value)} />{" "}
            </div>
          </div>

          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">
              Number of Members
            </div>
            <div className="my-2">
              {" "}
              <Input type="text" value={groupMember} onChange={(e)=>GroupMemberHandler(e.target.value)} />{" "}
            </div>
          </div>

         {
            Array.from({length:parseInt(groupMember)}).map((_, index)=>(
              <div key={index}>
 <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Name of Member {index+1}</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>MemberHandler("Name", index,  e.target.value )}  />{" "}
            </div>
          </div>
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Email Id of Member {index+1}</div>
            <div className="my-2">
              {" "}
              <Input type="email" onChange={(e)=>MemberHandler("Email", index,  e.target.value )}  />{" "}
            </div>
          </div>
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Roll No of Member {index+1}</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>MemberHandler("RollNo", index,  e.target.value )} />{" "}
            </div>
          </div>
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Department of Member {index+1}</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>MemberHandler("Dept", index,  e.target.value )}  />{" "}
            </div>
          </div>
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Whatsapp No of Member {index+1}</div>
            <div className="my-2">
              {" "}
              <Input type="text" onChange={(e)=>MemberHandler("WhatsappNo", index,  e.target.value )}  />{" "}
            </div>
          </div>
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">University/ College Enrollment Document of Member {index+1}</div>
            <div className="my-2">
              {" "}
              <Input type="file" onChange={(e)=>MemberHandler("DocumentProof", index,  e.target.files[0] )} accept="application/pdf" />{" "}
            </div>
          </div>
              </div>
            ))
         }
         <div className="my-4">
            <div className="text-[0.95rem] font-semibold">
              Upload Brief Description of the Proposed Hardware Project
            </div>
            <div className="my-2">
              {" "}
              <Input type="file" accept="application/pdf" onChange={(e)=>setDescription(e?.target?.files[0])}  />{" "}
            </div>
          </div>

          <div className="text-[0.95rem] text-yellow-500">
          Please ensure that each file is less than 400KB 
          </div>
         

         <div className="pt-4">

          {
            loading ?  <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-600 flex justify-center gap-2 items-center" disabled> <AiOutlineLoading3Quarters className="animate-spin text-[1.2rem]" />  Please wait </button>
            :
            <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-500 " onClick={handleSubmit}>  Submit Now </button>
          }

        
          {/* {
            universityName==="Aliah University" ? <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-500" onClick={handleSubmit}>  Submit Now </button> : <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-500" onClick={handleSubmit}>Make Paymant (Rs. 1000) & Submit </button>
          } */}
         
         </div>

        </div>
      </div>

<ContactUs />


      <Footer />
    </>
  );
}

export default Register;
