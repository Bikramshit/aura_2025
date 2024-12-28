import { getUserSesssion } from "@/app/api/auth/[...nextauth]/session";
import { db } from "@/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const getUserIDFromToken = (token:any)=>{
    try {
        const decodeToken:any = jwt.verify(token, process.env.JWT_SECRET!);
        return decodeToken.id;
    } catch (error:any) {
        console.log(error);
        return NextResponse.json({message:"You are not athorized"}, {status:400});
        // throw new Error(error.message);
    }
}


export const myProfile = async()=>{
    try {
       
        const session =await getUserSesssion();
        console.log("SESSION:::",session);
        if(session===undefined) return;
        let userId = session.id;
       

        const user = await db.user.findUnique({
            where:{
                id:userId 
            }
        });
        console.log("USER:::",user);
        return user;
               
    } catch (error) {
        console.log(error);
        
    }
  
}