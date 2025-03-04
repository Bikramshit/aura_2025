import AllSynopsis from '@/app/components/all-synopsis/AllSynopsis'
import { myProfile } from '@/lib/profile';
import { db } from '@/prisma'
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {

    const profile =await myProfile();
      
        if(!profile){
          redirect('/');
        }

    const synopsis = await db.synopsis.findMany({
      include:{
        members:true
      }
    });
    
  return (
    <>
    
    <AllSynopsis synopsis={synopsis} />
    </>
  )
}

export default page