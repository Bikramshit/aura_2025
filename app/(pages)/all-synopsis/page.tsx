import AllSynopsis from '@/app/components/all-synopsis/AllSynopsis'
import { db } from '@/prisma'
import React from 'react'

async function page() {

    const synopsis = await db.synopsis.findMany();
  return (
    <>
    
    <AllSynopsis synopsis={synopsis} />
    </>
  )
}

export default page