import Dashboard from '@/app/components/Dashboard/Dashboard'
import { myProfile } from '@/lib/profile';
import { db } from '@/prisma'
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {


      const profile =await myProfile();
    
      if(!profile){
        redirect('/');
      }


    const synopsis = await db.synopsis.findMany();


  return (
    <>
    
    <Dashboard synopsis={synopsis} />
    
    </>
  )
}

export default page