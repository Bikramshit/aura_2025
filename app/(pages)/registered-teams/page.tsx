import RegisteredTeam from '@/app/components/RegisteredTeam/RegisteredTeam'
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

    <RegisteredTeam teams={teams} />
    
    
    </>
  )
}

export default page