import { db } from "@/prisma";
import { UploadFile } from "@/utils/cloudinary";
import { sendMail } from "@/utils/sendMail";
import { NextRequest, NextResponse } from "next/server";

interface Member {
  name: string;
  email: string;
  rollNo: string;
  dept: string;
  number: string;
  file: string;
}

// export const POST = async (req: NextRequest) => {
//   try {
//     console.log("EXECUTING POST REQUEST");

//     // Parse request body
//     const reqBody = await req.json();
//     console.log("REQ BODY");
    
//     const { groupName, projectName, description, university, college, memberData, members } = reqBody;

//     console.log("Input Data:", { groupName, projectName, description, university, college, memberData, members });

//     // Validate required fields
//     if (!groupName || !projectName || !description || !university || !college || !memberData) {
//       return NextResponse.json(
//         { success: false, message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     console.log(members);
    
//     // Upload description file
//     const descriptionUrl = await UploadFile(description);
//     console.log("DESCRIPTION URL:::", descriptionUrl);
    
//     // Upload member files concurrently
//     const membersData = await Promise.all(
//         members.map(async (member: Member) => ({
//         name: member.name,
//         email: member.email,
//         rollNo: member.rollNo,
//         dept: member.dept,
//         number: member.number,
//         file: await UploadFile(member.file), // Upload each member's file
//       }))
//     );

//     // Create the synopsis and associated members
//     const synopsis = await db.synopsis.create({
//       data: {
//         groupName,
//         projectName,
//         description: descriptionUrl as string,
//         university,
//         college,
//         members: {
//           create: membersData, // Use pre-processed members data
//         },
//       },
//     });

//     console.log("Synopsis created successfully:", synopsis);

//     // Send success response
//     return NextResponse.json(
//       {
//         success: true,
//         synopsis,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error in POST request:", error);

//     // Send error response
//     return NextResponse.json(
//       { success: false, message: "Internal Server Error", error: error.message },
//       { status: 500 }
//     );
//   }
// };


function generateAutoRegistrationId(prefix:string, count:string) {
  // Pad the count to always have 3 digits
  let paddedCount = String(count).padStart(3, '0');
  return `${prefix}${paddedCount}`;
}


export const POST = async(req:NextRequest)=>{

  const formData =await req.formData();

  const groupName = formData.get('groupName');
  const projectName = formData.get('projectName');
  const description = formData.get('description');
  const university = formData.get('university');
  const college = formData.get('college');
  const memberData = formData.get('memberData');
  const members = formData.get('members');

  

  const descriptionUrl =await UploadFile(description as File);

  
    // const allMembers = await Promise.all(
    //   members?.map(async (member: Member) => ({
    //     name: member.name,
    //     email: member.email,
    //     rollNo: member.rollNo,
    //     dept: member.dept,
    //     number: member.number,
    //     file: await UploadFile(member.file), // Upload each member's file
    //   }))
    // );
  const allMembers = [];
    for(let index=0; index<parseInt(memberData as string); index++){
      
      allMembers.push({
        name:formData.get(`members[${index}][name]`),
        email: formData.get(`members[${index}][email]`),
        rollNo: formData.get(`members[${index}][rollNo]`),
        department: formData.get(`members[${index}][dept]`),
        whatsappNo: formData.get(`members[${index}][number]`),
        documentId: await UploadFile(formData.get(`members[${index}][file]`) as File), // Upload each member's file
      });

    }


    const totalCount = await db.synopsis.findMany({

    });

    let prefix = "AURA2025";
    let len = totalCount.length + 1
    let registrationId = generateAutoRegistrationId(prefix, len.toString());

    console.log("Generated Registration ID:", registrationId);

  

     let synopsis = await db.synopsis.create({
      data: {
        groupName:groupName as string,
        projectName:projectName as string,
        description: descriptionUrl as string,
        university:university as string,
        college:college as string,
        memberCount:memberData as string,
        registrationId:registrationId

        // members: {
        //   create: allMembers, // Use pre-processed members data
        // },
      },
    });

    for(let i=0; i<allMembers.length; i++){
       await db.member.create({
        data:{
          synopsisId:synopsis.id,
          name:allMembers[i].name as string, 
          email:allMembers[i].email as string, 
          rollNo:allMembers[i].rollNo as string, 
          department:allMembers[i].department as string, 
          whatsappNo:allMembers[i].whatsappNo as string, 
          documentId:allMembers[i].documentId as string, 

        }
      })
    }




    for(let i=0; i<allMembers.length; i++){
      SendMail(allMembers[i].email as string, synopsis.groupName, synopsis.projectName, registrationId, memberData as string);
    }
    


  return NextResponse.json(
          {
            success: true,
          },
          { status: 200 }
        );
  


}





const SendMail = (to:string, groupName:string, projectName:string, regId:string, groupMember:string)=>{

    const subject = "Your application for AURA 2025 has been successfully submitted";
  const message = `
  
  <!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
</head>

<body>

  <b>🎉 Abstract Submitted Successful! 🎉</b>
  <p>Thank you for registering for AURA 2025 Tech Fest! 🚀</p>
  <p>Abstract Id: <b>${regId}</b></p>
  <p>Team Name: <b>${groupName}</b></p>
  <p>Project Name: <b>${projectName}</b></p>
  <p>Team Member: <b>${groupMember}</b></p>

  <p>Stay tuned for more updates and prepare for an incredible journey of innovation and technology! If you have any questions, feel free to contact us at <b> aura@aliah.ac.in </b>.
  <p>Let’s make this event unforgettable!</p>
  <p>Best regards, <br> Team AURA 2025 🌟</p>

</body>

</html>
  `;

  sendMail(to, subject, message);

}


export default POST;