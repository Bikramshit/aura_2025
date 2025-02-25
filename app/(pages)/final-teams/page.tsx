import FinalTeams from '@/app/components/final-teams/FinalTeams';
import { myProfile } from '@/lib/profile'
import { db } from '@/prisma';
import { redirect } from 'next/navigation';
import React from 'react'


async function page() {

const profile = await myProfile();


    if(!profile){
        redirect('/');
    }

     const teams = await db.registration.findMany({
        where:{
            isSelected:true
        },
            include:{
                synopsis:{
                    include:{
                        members:true
                    }
                }
            }
        });


  return (
    <>
    

    <FinalTeams teams={teams}  />
    
    
    
    </>
  )
}

export default page