import { db } from "@/prisma";
import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto";


export const POST = async(req:NextRequest)=>{
    try {
        const reqbody = req.json();

        const codes = new Set<string>(); // To ensure uniqueness

        while (codes.size < 50) {
            const code = crypto.randomBytes(8).toString("hex").slice(0, 8).toUpperCase();
            codes.add(code);
        }

        const votingCodesArray = Array.from(codes).map((code) => ({ code }));

        
        console.log(votingCodesArray);

    // Save to MongoDB using Prisma
    await db.votingCode.createMany({
        data: votingCodesArray,
    });

    return NextResponse.json({ success: true, codes:votingCodesArray }, { status: 200 });


        

        // const {synopsisId, abtractId, email, name, rollNo } = reqbody;
        // const synopsis = await db.synopsis.findUnique({where:{id:synopsisId}});

        // if(synopsis)
    } catch (error) {
        console.log(error)
    }
}