import GuestsPage from '@/app/components/guests/GuestsPage';
import RegisteredTeam from '@/app/components/RegisteredTeam/RegisteredTeam'
import { myProfile } from '@/lib/profile'
import { db } from '@/prisma';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {

    const profile = await myProfile();


    if(!profile){
        redirect('/');
    }


    const guests = await db.guest.findMany({
        
    });


  return (
    <>

    <GuestsPage guests={guests} />

    
    </>
  )
}

export default page