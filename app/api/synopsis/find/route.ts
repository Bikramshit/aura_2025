import { db } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";



export const POST = async(req:NextRequest)=>{
    try {
        
        const reqBody =await req.json();

        const {abstractId, mobileNo} = reqBody;

        console.log(abstractId, mobileNo);

        const abstract = await db.synopsis.findFirst({
            where:{
                registrationId:abstractId, 
                approved:true,
                members:{
                    some:{
                        whatsappNo:mobileNo
                    }
                }
            },
            include:{
                members:true
            }
        });


        if(!abstract){
            return NextResponse.json({
                success:false,
                message:"Abstract not found"
            }, {status:404});
        }


        const registration = await db.registration.findFirst({
            where:{
                synopsisId:abstract.id
            }
        });

        let isFound = false;
        if(registration){
            isFound = true;
        }


        return NextResponse.json({
            success:true,
            abstract, 
            isFound:isFound
        }, {status:200});


    } catch (error) {
        
    }

}