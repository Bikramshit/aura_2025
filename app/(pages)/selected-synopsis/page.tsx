import DashboardComponent from '@/app/components/Dashboard/DashboardComponent'
import SelectedSynopsis from '@/app/components/SelectedSynopsis/SelectedSynopsis';
import { myProfile } from '@/lib/profile';
import { db } from '@/prisma'
import { Synopsis } from '@prisma/client'
import { redirect } from 'next/navigation';
import React from 'react'


async function page() {

const profile =await myProfile();
      
        if(!profile){
          redirect('/');
        }
    const synopsis = await db.synopsis.findMany({
        where:{
            approved:true
        }
    });



  return (
    <>

    <SelectedSynopsis synopsis={synopsis} />
    
   
    </>
  )
}

export default page