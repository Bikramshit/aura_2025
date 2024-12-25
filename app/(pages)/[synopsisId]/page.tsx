import SingleSynopsis from '@/app/components/SingleSynopsis/SingleSynopsis'
import { db } from '@/prisma'
import React from 'react'

interface Props {
    params:{
        synopsisId:string
    }
}
async function page({params}:Props) {

    const synopsis = await db.synopsis.findUnique({
        where:{
            id:params.synopsisId
        },
        include:{
            members:true
        }
    });


    console.log(synopsis)




  return (
    <>
    
    <SingleSynopsis synopsis={synopsis} />
    
    </>
  )
}

export default page