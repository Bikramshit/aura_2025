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

interface Props {
  teams: Registration &
    {
      synopsis: Synopsis;
    }[];
}

function RegisteredTeam({ teams }: Props) {

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const hrefHandler = (id: string) => {
    router.push(`${id}`);
  };

  

  const AprovedHandler = async (id: string) => {
    try {
      setLoading(true);
      const res = await axios.post(`/api/synopsis/register/approve`, {
        registrationId: id,
      });
      if(res.status===200){
        setLoading(false);
        router.refresh();
      }
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
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
                    <TableHead className="text-center">Transaction Id</TableHead>
                    <TableHead className="text-center">Proof</TableHead>
                    <TableHead className="text-center">Verified</TableHead>
                    <TableHead className="text-center">Operation</TableHead>
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
                      <TableCell className="text-center">
                        {team.transactionId}
                      </TableCell>
                      <TableCell className="text-center">
                        {team.synopsis.university==="other" && <Link href={team.transactionFile}target="_blank" className="px-4 py-[0.35rem] bg-green-600 rounded text-white font-semibold">View</Link>}
                        
                      </TableCell>
                      {/* <TableCell className='text-center'>{team.transactionFile}</TableCell> */}
                      <TableCell className="text-center">
                        {team.verified ? "Verified" : "Not Verified"}
                      </TableCell>
                      <TableCell className="text-center flex items-center justify-center" >
                        {
                          loading ? <AiOutlineLoading3Quarters className="animate-spin text-[1.2rem]" />  : !team.verified && <Button onClick={()=>AprovedHandler(team.id)}> Approve</Button>
                        }
                        
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </>
      </DashboardComponent>
    </>
  );
}

export default RegisteredTeam;
