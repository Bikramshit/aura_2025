"use client";

import React, { useState } from "react";
import DashboardComponent from "../Dashboard/DashboardComponent";
import { Registration, Synopsis } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



interface Props {
  teams: Registration &
    {
      synopsis: Synopsis;
    }[];
}

function RegisteredTeam({ teams }: Props) {

  const [loading, setLoading] = useState(false);
  const [registrationId, setRegistrationId] = useState('');
  const [teamName, setName] = useState('');
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const hrefHandler = (id: string) => {
    router.push(`${id}`);
  };

  

  const AprovedHandler = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`/api/top-12`, {
        registrationId: registrationId,
      });
      if(res.status===200){
        setLoading(false);
        router.refresh();
        setOpen(false);
      }
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Use `true` for 12-hour format
    })
      .format(date)
      .replace(" ", " ")
      .replace(",", "");
  };
  

  return (
    <>
      <DashboardComponent title="Registered Team">
        <>
          {teams.length == 0 ? (
            <>
              <div className="h-full mt-[10%] flex items-center justify-center font-semibold">
                No one has registered yet.
              </div>
            </>
          ) : (
            <div className="p-4 h-[calc(100vh - 200px)] overflow-scroll">
              <Table className="border shadow-md ">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center">Sl No</TableHead>
                    <TableHead className="text-center">Id</TableHead>
                    <TableHead className="text-center">Team Name</TableHead>
                    {/* <TableHead className='text-center'>Project Name</TableHead> */}
                    <TableHead className="text-center">
                      university Name
                    </TableHead>
                    <TableHead className="text-center">College Name</TableHead>
                    <TableHead className="text-center">Select for Final</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="overflow-scroll">
                  {teams.map((team, i) => (
                    <TableRow key={i} className="cursor-pointer">
                      <TableCell className="text-center">{i + 1}</TableCell>
                      <TableCell className="text-center">
                        {team.synopsis.registrationId}
                      </TableCell>
                      <TableCell className="text-center">
                        {team.synopsis.groupName}
                      </TableCell>
                      <TableCell className="text-center">
                        {team.synopsis.university}
                      </TableCell>
                      <TableCell className="text-center">
                        {team.synopsis.college}
                      </TableCell>
                      <TableCell className="text-center flex items-center justify-center" >
                        {
                          loading ? <AiOutlineLoading3Quarters className="animate-spin text-[1.2rem]" />  : 
                          
                          <>
                          
                          {

team.isSelected==true ? "" :
<Button onClick={()=>{setOpen(true); setRegistrationId(team?.id);setName(team.synopsis.groupName)}}>
  Select

</Button>
// team.isSelected==true ? "" : 
// <Button onClick={()=>{setOpen(true); setRegistrationId(team?.id);setName(team.synopsis.groupName)}> {team.isSelected==true ? "" : "Select"} </Button> 
}
                          </>
                          


                          // <Button onClick={()=>AprovedHandler(team.id)}> Select </Button>

                        }
                        
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}



<Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-black">
        <DialogHeader>
          <DialogTitle>Confirm your decision</DialogTitle>
          
        </DialogHeader>
        <div className=" py-4">
         Are you sure you want to select the team <b>{teamName}</b> for final round. You can't undo this.
        </div>
        <DialogFooter>
          {
            loading ? <AiOutlineLoading3Quarters className="animate-spin text-[1.2rem]" />  : 

            <>
            <Button type="button" onClick={()=>{setOpen(false); setRegistrationId('')}}>Cancel</Button>
            <Button  onClick={AprovedHandler}>Confirm</Button>
            
            </>
          }
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
        </>
      </DashboardComponent>
    
    </>
  );
}

export default RegisteredTeam;
