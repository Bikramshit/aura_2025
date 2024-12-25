import DashboardComponent from '@/app/components/Dashboard/DashboardComponent'
import SelectedSynopsis from '@/app/components/SelectedSynopsis/SelectedSynopsis';
import { db } from '@/prisma'
import { Synopsis } from '@prisma/client'
import React from 'react'


async function page() {


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