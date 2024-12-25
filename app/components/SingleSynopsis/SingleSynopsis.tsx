"use client";

import { Member, Synopsis } from '@prisma/client';
import React from 'react';
import DashboardComponent from '../Dashboard/DashboardComponent';
import Link from 'next/link';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

interface Props {
    synopsis:Synopsis & {
        members:Member[]
    }
}

function SingleSynopsis({synopsis}:Props) {
  return (
    <>
    <DashboardComponent title={`Team Details: - ${synopsis.groupName}`}>

        <>
        <div className='m-12 border shadow-md p-4 rounded-md'>
            <div className='text-[1.2rem] font-semibold'> {synopsis.groupName}</div>
            <div className='text-[1rem] '>University: <span className='font-semibold'>{synopsis.university}</span></div>
            {
                synopsis.university!=="Aliah University" && <div>College Name:<span className='font-semibold'>{synopsis.college}</span></div>
            }
            
        </div>
        <div className='mx-12 my-4 border shadow-md p-4 rounded-md'>
            <div className='text-[0.85rem] font-semibold uppercase'>Project Details</div>
            <div className='text-[1.2rem] font-semibold'> {synopsis.projectName}</div>
            <div>

            <div className='my-2'>
                <Link href={synopsis.description}  className="bg-green-600 my-4 rounded px-4 py-[0.5rem] text-white text-[0.95rem] font-semibold" target='_blank'> View Abstract </Link>
            </div>


            </div>
        </div>


        <div className='mx-12 my-4 border shadow-md p-4 rounded-md'>
            <div className='text-[0.9rem]'>Team Member: {synopsis.memberCount}</div>


            <div>
                {/* {
                    synopsis.members.map((member, i)=>(
                        <div key={i}>
                            <div className='my-2'>Name: {member.name}</div>
                            <div className='my-2'>Roll No: {member.rollNo}</div>
                            <div className='my-2'>Roll No: {member.rollNo}</div>
                            <div className='my-2'>Roll No: {member.rollNo}</div>
                            <div className='my-2'>Department: {member.department}</div>
                        </div>
                    ))
                } */}

        <Table className='border shadow-md'>
                     <TableRow>
            <TableHead>Sl No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Roll No</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Whatsapp No</TableHead>
            <TableHead>Document</TableHead>
            </TableRow>
        {
            synopsis.members.map((member, i)=>(
<TableRow key={i}>
                <TableCell>{i+1}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.rollNo}</TableCell>
                <TableCell>{member.department}</TableCell>
                <TableCell>{member.whatsappNo}</TableCell>
                <TableCell> <Link href={member.documentId} target='_blank' className='bg-black text-white px-4 py-[0.5rem] rounded text-[0.95rem] font-semibold'>View</Link></TableCell>
            </TableRow>
            ))
        }
            


        </Table>
            </div>
           

        </div>

        </>

    </DashboardComponent>
    
    </>
  )
}

export default SingleSynopsis