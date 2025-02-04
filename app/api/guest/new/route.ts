import { db } from "@/prisma";
import { UploadFile } from "@/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";



export const POST = async(req:NextRequest)=>{

  const formData =await req.formData();

  const name = formData.get('name');
  const email = formData.get('email');
  const phoneNo = formData.get('phoneNo');
  const affiliation = formData.get('affiliation');
  const designation = formData.get('designation');
  const paymentId = formData.get('paymentId');
  const paymentProof = formData.get('file');

  

  const paymentUrl =await UploadFile(paymentProof as File);


  const guest = await db.guest.create({
    data:{
        name:name as string,
        email:email as string,
        phoneNo: phoneNo as string,
        affiliation: affiliation as string,
        designation: designation as string,
        paymentId: paymentId as string,
        paymentProof: paymentUrl as string,
        
    }
  });


   


  return NextResponse.json(
          {
            success: true,
            // guest
          },
          { status: 200 }
        );
  


}