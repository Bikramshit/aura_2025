
"use server";
import { getUserSesssion } from "@/app/api/auth/[...nextauth]/session";
import { db } from "@/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { useSession } from "next-auth/react";

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


export const myProfile =async()=>{
    try {
        // const { data: session, status } = useSession();

          const session = await getUserSesssion();

          console.log("SEssion",session);

          return session;




  // Check if the session is loading or if there is no session
//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (!session) {
//     return <div>You are not logged in.</div>;
//   }

    } catch(error:any){

    }

}