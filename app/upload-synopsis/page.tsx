"use client";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Home/Footer/Footer";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



function UploadSynopsis() {
  const [groupName, setGroupName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [universityName, setUniveristyName] = useState('Aliah University');
  const [collegeName, setCollegeName] = useState('');
  const [groupMember, setGroupMember] = useState('1');
  const [memberData, setMemberData] = useState([{name:"", email:"", rollNo:"", dept:"", number:"", file:""}]);


  const MemberHandler=(fieldValue:string, index:number, value:string)=>{
    if(fieldValue==="Name"){
      
    }else if(fieldValue==="Email"){

    }else if(fieldValue==="RollNo"){

    }else if(fieldValue==="Dept"){

    }else if(fieldValue==="WhatsappNo"){

    }else if(fieldValue==="DocumentProof"){

    }else {

    }

  }

  const GroupMemberHandler =(value:string)=>{
    // if(value==""){
    //   setGroupMember('1');
    //   return 1;
    // }
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

  return (
    <>
      <Header />

      <div className="mx-[12rem] bg-[#1e1e1f] my-[4rem] rounded-lg shadow-md shadow-gray-900 pb-12">
        <div className="px-8 pt-8 text-center text-[2rem] font-semibold relative">
          <span className="relative">
            <span className="absolute left-0 right-0 bottom-[0rem] h-4 bg-[#484848] px-4"></span>
            <span className="relative z-10 px-4">
              <span className="logo_font text-yellow-500 ">AURA</span> - 2025
            </span>
          </span>
        </div>

        <div className="text-center text-[1.6rem] font-semibold mt-2 text-[#2aa1f5] font-merriweather">
          Synopsis Registration Form
        </div>

        <div className="px-[3rem] py-8">
          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">Group Name</div>
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
            <div className="text-[0.95rem] font-semibold">
              Upload Brief Description
            </div>
            <div className="my-2">
              {" "}
              <Input type="file" accept="application/pdf" />{" "}
            </div>
          </div>

          <div className="my-4">
            <div className="text-[0.95rem] font-semibold">University Name</div>
            <div className="my-2">
              <Select onValueChange={(value)=>setUniveristyName(value)}>
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
              Number of Group Members
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
              <Input type="file" onChange={(e)=>MemberHandler("DocumentProof", index,  e.target.value )} accept="application/pdf" />{" "}
            </div>
          </div>
              </div>
            ))
         }

         

         <div className="pt-4">
          {
            universityName==="Aliah University" ? <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-500"> Submit Now </button> : <button className="text-[1.0rem] font-semibold w-full px-4 py-[0.45rem] rounded-md bg-green-500">Make Paymant (Rs. 1000) & Submit </button>
          }
         
         </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default UploadSynopsis;
