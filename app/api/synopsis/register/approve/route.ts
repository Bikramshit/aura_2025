import { db } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";




export const POST = async(req:NextRequest)=>{
    try {
        const reqBody = await req.json();

        const { registrationId} = reqBody;

        if(!registrationId) return NextResponse.json({
            success:false
        }, {status:409});

        const registation = await db.registration.findUnique({
            where:{
                id:registrationId
            }
        });

        if(!registation){
            return NextResponse.json({
                success:false
            }, {status:409});
        }

         await db.registration.update({
            where:{
                id:registrationId,
            },
            data:{
                verified:true
            }
        })

        return NextResponse.json({
            success:true
        }, {status:200});

    } catch (error) {
        
    }
}