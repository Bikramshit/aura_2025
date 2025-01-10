
"use server";
import { getUserSesssion } from "@/app/api/auth/[...nextauth]/session";
import { db } from "@/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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
      // Access cookies using `cookies()` from `next/headers` (Next.js App Router)
      const cookieStore = await cookies();
      const sessionToken = cookieStore.get('next-auth.session-token')?.value;
  
      // Log the session token for debugging purposes
      console.log('Raw Session Token:', sessionToken);
  
      // If session token is not available, handle the error
      if (!sessionToken) {
        console.log('No session token found.');
        return { error: 'No session token found' };
      }
  
      // Decode the JWT token (without verification) to extract the payload
      const decodedToken = jwt.decode(sessionToken);
  
      // If decoding fails or token is malformed, log and handle the error
      if (!decodedToken) {
        console.log('Failed to decode token');
        return { error: 'Invalid or malformed token' };
      }
  
      console.log('Decoded Token:', decodedToken); // Check the decoded token
  
      // If you want to verify the JWT (optional but recommended for security)
      try {
        const verifiedToken = jwt.verify(sessionToken, process.env.NEXTAUTH_SECRET!);
        console.log('Verified Token:', verifiedToken); // Check the verified token
  
        // You can now access the user data from the verified token (e.g., `user.id`)
        return { userId: verifiedToken.id }; // Example: return the user ID from token
      } catch (verifyError) {
        console.log('Error verifying token:', verifyError);
        return { error: 'Token verification failed' };
      }
  
    } catch (error: any) {
      console.error('Error in myProfile function:', error);
      return { error: 'An error occurred while processing the token' };
    }
  };