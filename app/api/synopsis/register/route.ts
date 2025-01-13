import { db } from "@/prisma";
import { UploadFile } from "@/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server"



export const POST = async(req:NextRequest)=>{
    try {
        const formData =await req.formData();

        // const {abstractId, mobileNo, transactionId, file, university} = formData;

        const abstractId = formData.get('abstractId');
        const mobileNo = formData.get('mobileNo');
        const transactionId = formData.get('transactionId');
        const file = formData.get('file');
        const university = formData.get('university');

        console.log(abstractId, mobileNo, transactionId, file, university)

        if(!abstractId || !mobileNo  || !university ){
            return NextResponse.json({
                success:false,
                message:'Missing required fields'
            }, {status:400});
        }

        let fileUrl = '';

        console.log("fileee", file);

        if(file!==null && file!=="null"){
            console.log("fining fileee.....")
            fileUrl =await UploadFile(file as File);
        }

        const register = await db.registration.create({
            data:{
                synopsisId:abstractId as string, 
                doneBy:mobileNo as string, 
                transactionId:transactionId as string,
                transactionFile:fileUrl,
                university:university as string
            }
        });

        return NextResponse.json({
            success:true
        }, {status:200});

    } catch (error) {
        console.log(error);
    }
}