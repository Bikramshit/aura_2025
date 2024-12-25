

import { db } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST =async(req:NextRequest)=>{
    try {
        const reqBody =await req.json();
        const {name, password, email } = reqBody;


        if(!name || !password || !email) return NextResponse.json({message:"Enter the fields"}, {status:409});

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);


        const user = await db.user.create({
            data:{
                name, 
                email, 
                password:hashedPassword, 
              
            }
        });

        return NextResponse.json(user, {status:200});
    } catch (error) {
        console.log(error)
    }
}