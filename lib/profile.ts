
"use server";
import { getUserSesssion } from "@/app/api/auth/[...nextauth]/session";
import { db } from "@/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { decode } from "next-auth/jwt";


// export const getUserIDFromToken = async(token:any)=>{
//     try {
//         const decodeToken:any =await jwt.verify(token, process.env.JWT_SECRET!);
//         return decodeToken.id;
//     } catch (error:any) {
//         console.log(error);
//         return NextResponse.json({message:"You are not athorized"}, {status:400});
//         // throw new Error(error.message);
//     }
// }



// export const myProfile = async()=>{
//     try {
       
//         const cookieStore =await cookies();
//         const token = cookieStore.get('token')?.value || '';
//         // const googleToken = cookieStore.get('next-auth.csrf-token')?.value || '';
        
//         const googleToken = cookieStore.get('next-auth.session-token')?.value || '';
//         const googleServerToken = cookieStore.get('__Secure-next-auth.session-token')?.value || '';


//         let userId = ''
//         if(token!=='' && token!==null){
//             userId =await getUserIDFromToken(token);
//        }
//        else if((googleToken!==null && googleToken!=='') || (googleServerToken!==null && googleServerToken!=='')){
//             const session =await getUserSesssion();
            
//             if(session===undefined) return;
//             userId = session.id;
//        }

//        if(userId===''){return}
       

//         const user = await db.user.findUnique({
//             where:{
//                 id:userId 
//             }
//         });
//         return user;
               
//     } catch (error) {
//         console.log(error);
        
//     }
  
// }


export const myProfile = async () => {
    try {

      const cookieStore = await cookies();
      const sessionToken = cookieStore.get('next-auth.session-token')?.value;
  
      console.log('Raw Session Token:', sessionToken);
  
      if (!sessionToken) {
        console.log('No session token found.');
        return null;
      }
  
      try {
        const secret = process.env.NEXTAUTH_SECRET;
        console.log("SEcret",secret);
        // const decodedToken = await decode({ token: sessionToken , secret });
        const decodedToken =  await decode({token:sessionToken, secret});

console.log("Deocde:",decodedToken);
  if (decodedToken && decodedToken.id) {
    return decodedToken.id; // Extract userId from the token
  }

  // return null;

      } catch (verifyError) {
        console.log('Error verifying token:', verifyError);
        return { error: 'Token verification failed' };
      }
  
    } catch (error: any) {
      console.error('Error in myProfile function:', error);
      return { error: 'An error occurred while processing the token' };
    }
  };