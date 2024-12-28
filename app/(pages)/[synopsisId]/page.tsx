import SingleSynopsis from '@/app/components/SingleSynopsis/SingleSynopsis'
import { myProfile } from '@/lib/profile'
import { db } from '@/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

interface Props {
    params:{
        synopsisId:string
    }
}
async function page({params}:Props) {

      const profile =await myProfile();
        
          if(!profile){
            redirect('/');
          }



    const synopsis = await db.synopsis.findUnique({
        where:{
            id:params.synopsisId
        },
        include:{
            members:true
        }
    });






  return (
    <>
    
    <SingleSynopsis synopsis={synopsis} />
    
    </>
  )
}

export default page