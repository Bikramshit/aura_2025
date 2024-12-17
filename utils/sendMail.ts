import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const sendMail =async(to:string, subject:string, message:string)=>{
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.GMAIL_EMAIL_ADDRESS,
              pass: process.env.GMAIL_APP_PASSWORD,
            },
          });
          const Options = {
            from: process.env.SMTP_USER,
            to:to,
            subject:subject,
            html: message
          }
      
            transporter.sendMail(Options,(err:any, info:any)=>{
              console.log("Errror Message:::", err);
                if (err) {
                    console.log(`Connection refused at ${err.address}`);
                    
                    return NextResponse.json({
                        error:`Connection refused at ${err.address}`
                    }, {status:404});
                  } else {
                    console.log(`Message sent to ${to}`);
                    console.log(info);
                    
            } });
    } catch (error) {
        console.log(error)
    }
}