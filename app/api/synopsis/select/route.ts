import { NextRequest, NextResponse } from "next/server";
import { getUserSesssion } from "../../auth/[...nextauth]/session";
import { db } from "@/prisma";



export const POST = async(req:NextRequest)=>{
    try {
         const user =await getUserSesssion();

         if(!user) return NextResponse.json({
            error:"You are not authorized. "
         }, {status:409});

         const reqBody = await req.json();
         const {synopsisId} = reqBody;

         const synopsis = await db.synopsis.update({
            where:{
                id:synopsisId
            }, 
            data:{
                approved:true
            }
         });

        return NextResponse.json({
            success:true
        }, {status:200});



    } catch(error:any) {

    }

}