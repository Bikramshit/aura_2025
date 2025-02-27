import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Dashboard from '@/app/components/Dashboard/Dashboard'
import { myProfile } from '@/lib/profile';
import { db } from '@/prisma'
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react'



async function page() {

    const profile = await myProfile();

    console.log("Profile::", profile);

    if(!profile){
      redirect('/');
    }



    const vote = await db.vote.findMany({
      include:{
        synopsis:true
      }
    });




  return (
    <>
    
    <Dashboard votes={vote} />
    
    </>
  )
}






export default page