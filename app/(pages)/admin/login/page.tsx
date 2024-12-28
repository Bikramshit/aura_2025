import AdminLogin from '@/app/components/admin/Login/AdminLogin';
import { myProfile } from '@/lib/profile';
import { redirect } from 'next/navigation';
import React from 'react'

async function Page() {

  const profile =await myProfile();

  console.log("Profile:::: ", profile);

  if(profile){
    redirect('/dashboard');
  }
  return (
    <>
    
    <AdminLogin />
    
    </>
  )
}

export default Page;