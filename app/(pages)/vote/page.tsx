import Vote from '@/app/components/Vote/Vote'
import { db } from '@/prisma'
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {


    // redirect('/');
  
    const abstractIds = [
        "AURA2025001",
        "AURA2025008",
        "AURA2025010",
        "AURA2025011",
        "AURA2025012",
        "AURA2025014",
        "AURA2025015",
        "AURA2025016",
        "AURA2025018",
        "AURA2025037",
        "AURA2025042",
        "AURA2025048",
    ]

    const abstracts = await db.synopsis.findMany({
        where:{
            registrationId: { in:abstractIds}
        }
    });


  return (
    <>
    
    
    <Vote abstracts={abstracts} />
    
    </>
  )
}

export default page