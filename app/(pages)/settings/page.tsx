import Settings from '@/app/components/settings/Settings';
import { myProfile } from '@/lib/profile';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {

    const profile =await myProfile();
      
        if(!profile){
          redirect('/');
        }


  return (
    <>
    
    <Settings />
    
    
    </>
  )
}

export default page