import Dashboard from '@/app/components/Dashboard/Dashboard'
import { db } from '@/prisma'
import React from 'react'

async function page() {


    const synopsis = await db.synopsis.findMany();


  return (
    <>
    
    <Dashboard synopsis={synopsis} />
    
    </>
  )
}

export default page