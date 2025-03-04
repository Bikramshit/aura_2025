"use client";
import React from 'react';
import DashboardComponent from '../Dashboard/DashboardComponent';
import { Synopsis, Member } from '@prisma/client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Props {
  synopsis: (Synopsis & { members: Member[] })[]; // Include members in synopsis type
}

function AllSynopsis({ synopsis }: Props) {
  const router = useRouter();
  const hrefHandler = (id: string) => {
    router.push(`${id}`);
  };

  return (
    <DashboardComponent title="All Synopsis">
      {synopsis.length === 0 ? (
        <div className="h-full mt-[20%] flex items-center justify-center font-semibold">
          No one has submitted yet.
        </div>
      ) : (
        <div className="p-4 ">
          <div className="">
            <Table className="border shadow-md ">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Sl No</TableHead>
                  <TableHead className="text-center">Id</TableHead>
                  <TableHead className="text-center">Team Name</TableHead>
                  <TableHead className="text-center">Project Name</TableHead>
                  <TableHead className="text-center">University Name</TableHead>
                  <TableHead className="text-center">College Name</TableHead>
                  <TableHead className="text-center">Member Count</TableHead>
                  <TableHead className="text-center">Member 1</TableHead>
                  <TableHead className="text-center">Member 2</TableHead>
                  <TableHead className="text-center">Member 3</TableHead>
                  <TableHead className="text-center">Member 4</TableHead>
                  <TableHead className="text-center">Operation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {synopsis.map((synop, i) => (
                  <TableRow key={synop.id} className="cursor-pointer" onClick={() => hrefHandler(synop.id)}>
                    <TableCell className="text-center">{i + 1}</TableCell>
                    <TableCell className="text-center">{synop.registrationId}</TableCell>
                    <TableCell className="text-center">{synop.groupName}</TableCell>
                    <TableCell className="text-center">{synop.projectName}</TableCell>
                    <TableCell className="text-center">{synop.university}</TableCell>
                    <TableCell className="text-center">{synop.college}</TableCell>
                    <TableCell className="text-center">{synop.memberCount}</TableCell>
                    {[0, 1, 2, 3].map(index => (
                      <TableCell key={index} className="text-center">
                        {synop.members[index] ? `${ synop.members[index].name} (${synop.members[index].rollNo})` : "-"}
                      </TableCell>
                    ))}
                    <TableCell className="text-center">
                      <Link href={`${synop.description}`}>Abstract Link</Link>
                      {/* <Button onClick={() => hrefHandler(synop.id)}>Details</Button> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </DashboardComponent>
  );
}

export default AllSynopsis;



// "use client";
// import React from 'react'
// import DashboardComponent from '../Dashboard/DashboardComponent'
// import { Synopsis } from '@prisma/client';
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';



// interface Props {
//   synopsis:Synopsis[]
// }
// function AllSynopsis({synopsis}:Props) {


//   const router = useRouter();
//   const hrefHandler = (id:string)=>{
//     router.push(`${id}`)
//   }
//   return (
//     <>
    
//     <DashboardComponent title='All Synopsis'>
//     <>
    
//     {
//       synopsis.length==0 ? <> 
//       <div className='h-full mt-[20%] flex items-center justify-center font-semibold'>
//       No one has submitted yet.
//       </div>
//        </> :  
       
//      <div className='p-4 h-[calc(100vh - 200px)] overflow-scroll'>
//         <Table className='border shadow-md '>
//       <TableHeader>
//          <TableRow>
//            <TableHead className="text-center">Sl No</TableHead>
//            <TableHead className="text-center">Id</TableHead>
//            <TableHead className='text-center'>Team Name</TableHead>
//            <TableHead className='text-center'>Project Name</TableHead>
//            <TableHead className="text-center">university Name</TableHead>
//            <TableHead className="text-center">College Name</TableHead>
//            <TableHead className="text-center">Member Count</TableHead>
//            <TableHead className="text-center">Operation</TableHead>
//          </TableRow>
//        </TableHeader>
//        <TableBody className='overflow-scroll'>
//         {
//          synopsis.map((synop, i)=>(
//            <TableRow key={i} className='cursor-pointer' onClick={()=>hrefHandler(synop.id)}>
//              <TableCell className='text-center'>{i+1}</TableCell>
//              <TableCell className='text-center'>{synop.registrationId}</TableCell>
//              <TableCell className='text-center'>{synop.groupName}</TableCell>
//              <TableCell className='text-center'>{synop.projectName}</TableCell>
//              <TableCell className='text-center'>{synop.university}</TableCell>
//              <TableCell className='text-center'>{synop.college}</TableCell>
//              <TableCell className='text-center'>{synop.memberCount}</TableCell>
//              <TableCell className='text-center'><Button onClick={()=>hrefHandler(synop.id)}> Details</Button></TableCell>
//            </TableRow>
//          ))
//         }
//        </TableBody>
       
//      </Table>
//      </div>
//     }
   


    
//     </>
//     </DashboardComponent>
    
    
//     </>
//   )
// }

// export default AllSynopsis