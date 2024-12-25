"use client";
import React from 'react'
import DashboardComponent from './DashboardComponent'
import { Synopsis } from '@prisma/client'

interface Props {
    synopsis:Synopsis[]
}
 function Dashboard({synopsis}:Props) {
    

   
  return (
    <>
    <DashboardComponent title='Home'>
        <>
        
        </>
    </DashboardComponent>
    </>
  )
}

export default Dashboard