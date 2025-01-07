import AdminLogin from '@/app/components/admin/Login/AdminLogin';
import { myProfile } from '@/lib/profile';
import React from 'react'
import { useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth";// Import your NextAuth options
import { redirect } from "next/navigation"; // To redirect if no session
import { getUserSesssion } from '@/app/api/auth/[...nextauth]/session';



type Props = {
  userId: string | null;
};


async function Page() {



  const session = await getUserSesssion();



  if(session){
    redirect('/dashboard');
  }


  return (
    <>
    
    <AdminLogin />
    
    </>
  )
}



export default Page;