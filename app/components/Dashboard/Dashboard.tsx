"use client";
import React from 'react'
import DashboardComponent from './DashboardComponent'
import { Synopsis, Vote } from '@prisma/client'
import { Table } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface Props {
  votes:Vote[]
}
 function Dashboard({votes}:Props) {
    
  const voteCounts = votes.reduce((acc, vote) => {
    acc[vote.abstractId] = (acc[vote.abstractId] || 0) + 1;
    // acc['photo'] = findPhoto(vote.abstractId)
    return acc;
  }, {} as Record<string, number>);

  const sortedGroups = Object.entries(voteCounts).sort((a, b) => b[1] - a[1]);

  const Items = [
    {
        "Abstract_Id":"AURA2025001", 
        "GroupName":"STERNRITTERS",
        "Photo":"/assets/top_12/sterntritters.jpg"
    },
    {
        "Abstract_Id":"AURA2025008", 
        "GroupName":"THE MOTION MINDS",
        "Photo":"/assets/top_12/theMotoinMinds.jpg"
    },
    {
        "Abstract_Id":"AURA2025010", 
        "GroupName":"AquaSuraksha Pro",
        "Photo":"/assets/top_12/aqua.jpg"
    },
    {
        "Abstract_Id":"AURA2025011", 
        "GroupName":"THE TINKER TURTLE",
        "Photo":"/assets/top_12/theTinkerTurtle.jpeg"
    },
    {
        "Abstract_Id":"AURA2025012", 
        "GroupName":"Beyond Infinity",
        "Photo":"/assets/top_12/beyond_infinity.jpg"
    },
    {
        "Abstract_Id":"AURA2025014", 
        "GroupName":"TECH AVENGERS",
        "Photo":"/assets/top_12/techAvengers.jpg"
    },
    {
        "Abstract_Id":"AURA2025015", 
        "GroupName":"AlgoDrive",
        "Photo":"/assets/top_12/algo_drive.jpg"
    },
    {
        "Abstract_Id":"AURA2025016", 
        "GroupName":"SURETRICAL",
        "Photo":"/assets/top_12/surelectrical.jpg"
    },
    {
        "Abstract_Id":"AURA2025018", 
        "GroupName":"MindZed",
        "Photo":"/assets/top_12/mindzed.jpg"
    },
    {
        "Abstract_Id":"AURA2025037", 
        "GroupName":"THE DEFENDERS",
        "Photo":"/assets/top_12/theDefenders.jpg"
    },
    {
        "Abstract_Id":"AURA2025042", 
        "GroupName":"Tech Tribe",
        "Photo":"/assets/top_12/techTribe.jpg"
    },
    {
        "Abstract_Id":"AURA2025048", 
        "GroupName":"TechCrest",
        "Photo":"/assets/top_12/techCrest.jpg"
    }
    
    

]

// print()

console.log(sortedGroups);
   
const findPhoto = (id:string)=>{
  for(var i in Items){
     
      if(Items[i].Abstract_Id==id){
          return Items[i].Photo;
      }
  }
  return '';
}

  return (
    <>
    <DashboardComponent title='Home'>
        <>

        <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center text-[#2aa1f5] my-4">Voting Results</h2>
        

        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
              {sortedGroups.map(([group, count]) => (
                <Card key={group} className="p-4 bg-gray-100 rounded-lg shadow flex gap-2 items-center">
                  {/* <Image src={findPhoto(group.)} /> */}
                  <Image src={findPhoto(group)} alt={group} width={100} height={100} className="rounded-full object-cover h-[5rem] w-[5rem]  border-[#dadada] border-2 shadow-md" unoptimized />
                  <div>
                  <h3 className="text-lg font-semibold">{group}</h3>
                  <p className="text-gray-600">Votes: {count}</p>
                  </div>
                </Card>
              ))}
            </div>
            
            <Table className="w-full text-left border border-gray-300 rounded-md overflow-hidden">
              <thead className="bg-gray-200">
                <tr className='border'>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Abstract Id</th>
                  <th className="p-2 border">Voted Group</th>
                  <th className="p-2 border">Time</th>
                </tr>
              </thead>
              <tbody>
                {votes.map((vote) => (
                  <tr key={vote.id} className="border">
                    <td className="p-2 border">{vote.name}</td>
                    <td className="p-2 border">{vote.email}</td>
                    <td className="p-2 border font-semibold text-blue-600">{vote.abstractId}</td>
                    <td className="p-2 border font-semibold text-blue-600">{vote.synopsis.groupName}</td>
                    <td className="p-2 border text-gray-600">{new Date(vote.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>


        {/* {loading ? (
          <div className="flex justify-center items-center text-lg">
            <AiOutlineLoading3Quarters className="animate-spin text-xl mr-2" /> Loading votes...
          </div>
        ) : (
          
        )} */}
      </div>
        
        </>
    </DashboardComponent>
    </>
  )
}

export default Dashboard