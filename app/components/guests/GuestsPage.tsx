"use client";

import React, { useState } from "react";
import DashboardComponent from "../Dashboard/DashboardComponent";
import { Guest, Registration, Synopsis } from "@prisma/client";
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
    guests:Guest[]
}
function GuestsPage({guests}:Props) {
  return (
    <>
     <DashboardComponent title="Registered Team">
        <>
          {guests.length == 0 ? (
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
                    <TableHead className="text-center">Name</TableHead>
                    <TableHead className="text-center">Email</TableHead>
                    <TableHead className="text-center">Phone No</TableHead>
                    <TableHead className="text-center">Affiliation</TableHead>
                    <TableHead className="text-center">Designation</TableHead>
                   
                    <TableHead className="text-center">Transaction Id</TableHead>
                    <TableHead className="text-center">Proof</TableHead>
                    <TableHead className="text-center">Verified</TableHead>
                    <TableHead className="text-center">Operation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="overflow-scroll">
                  {guests.map((team, i) => (
                    <TableRow key={i} className="cursor-pointer">
                      <TableCell className="text-center">{i + 1}</TableCell>
                      <TableCell className="text-center">
                        {team.name}
                      </TableCell>
                      <TableCell className="text-center">
                        {team.email}
                      </TableCell>
                      <TableCell className="text-center">
                        {team.phoneNo}
                      </TableCell>
                      <TableCell className="text-center">
                        {team.affiliation}
                      </TableCell>
                      <TableCell className="text-center">
                        {team.designation}
                      </TableCell>
                      <TableCell className="text-center">
                        {team.paymentId}
                      </TableCell>
                      <TableCell className="text-center">
                      <Link href={team.paymentProof} target="_blank" className="px-4 py-[0.35rem] bg-green-600 rounded text-white font-semibold">View</Link>
                        
                      </TableCell>
                      {/* <TableCell className='text-center'>{team.transactionFile}</TableCell> */}
                      <TableCell className="text-center">
                        {team?.verified ? "Verified" : "Not Verified"}
                      </TableCell>
                      <TableCell className="text-center flex items-center justify-center" >
                        {/* {
                          loading ? <AiOutlineLoading3Quarters className="animate-spin text-[1.2rem]" />  : !team.verified && <Button onClick={()=>AprovedHandler(team.id)}> Approve</Button>
                        } */}
                        
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
  )
}

export default GuestsPage