import { db } from "@/prisma";
import { sendMail } from "@/utils/sendMail";
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
            },
            include:{
                synopsis:true
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
                isSelected:true
            }
        })

  
        
                //  for(let i=0; i<allMembers.length; i++){
                //     SendMail(allMembers[i].email as string, registation.synopsis?.groupName as string);
                //   }



        return NextResponse.json({
            success:true
        }, {status:200});

    } catch (error) {
        
    }
}

// const SendMail = (to:string, groupName:string)=>{

//     const subject = "AURA 2025 Registration Confirmation and Next Steps";
//     const message = `<!DOCTYPE html>
// <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

// <head>
// 	<title></title>
// 	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
// 	<style>
// 		* {
// 			box-sizing: border-box;
// 		}

// 		body {
// 			margin: 0;
// 			padding: 0;
// 		}

// 		a[x-apple-data-detectors] {
// 			color: inherit !important;
// 			text-decoration: inherit !important;
// 		}

// 		#MessageViewBody a {
// 			color: inherit;
// 			text-decoration: none;
// 		}

// 		p {
// 			line-height: inherit
// 		}

// 		.desktop_hide,
// 		.desktop_hide table {
// 			mso-hide: all;
// 			display: none;
// 			max-height: 0px;
// 			overflow: hidden;
// 		}

// 		.image_block img+div {
// 			display: none;
// 		}

// 		sup,
// 		sub {
// 			font-size: 75%;
// 			line-height: 0;
// 		}

// 		@media (max-width:520px) {

// 			.desktop_hide table.icons-inner,
// 			.social_block.desktop_hide .social-table {
// 				display: inline-block !important;
// 			}

// 			.icons-inner {
// 				text-align: center;
// 			}

// 			.icons-inner td {
// 				margin: 0 auto;
// 			}

// 			.mobile_hide {
// 				display: none;
// 			}

// 			.row-content {
// 				width: 100% !important;
// 			}

// 			.stack .column {
// 				width: 100%;
// 				display: block;
// 			}

// 			.mobile_hide {
// 				min-height: 0;
// 				max-height: 0;
// 				max-width: 0;
// 				overflow: hidden;
// 				font-size: 0px;
// 			}

// 			.desktop_hide,
// 			.desktop_hide table {
// 				display: table !important;
// 				max-height: none !important;
// 			}

// 			.row-1 .column-2 .block-1.heading_block td.pad {
// 				padding: 25px 35px 20px 0 !important;
// 			}

// 			.row-1 .column-2 .block-1.heading_block h1 {
// 				font-size: 34px !important;
// 			}
// 		}
// 	</style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
// </head>

// <body class="body" style="margin: 0; background-color: #ffffff; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
// 	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-image: none; background-position: top left; background-size: auto; background-repeat: no-repeat;">
// 		<tbody>
// 			<tr>
// 				<td>
// 					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
// 						<tbody>
// 							<tr>
// 								<td>
// 									<table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #ffffff; border-radius: 0; width: 500px; margin: 0 auto;" width="500">
// 										<tbody>
// 											<tr>
// 												<td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
// 													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
// 														<tr>
// 															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
// 																<div class="alignment" align="center" style="line-height:10px">
// 																	<div style="max-width: 125px;"><img src="https://4c6c5df001.imgdist.com/pub/bfra/9a9elurz/mc9/64c/ug5/AURA_Logo.png" style="display: block; height: auto; border: 0; width: 100%;" width="125" alt title height="auto"></div>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 												</td>
// 												<td class="column column-2" width="66.66666666666667%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
// 													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
// 														<tr>
// 															<td class="pad" style="padding-bottom:20px;padding-right:35px;padding-top:30px;text-align:center;width:100%;">
// 																<h1 style="margin: 0; color: #000000; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif; font-size: 36px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 43.199999999999996px;"><strong><span class="tinyMce-placeholder" style="word-break: break-word;"><a href="https://www.aura.aliah.ac.in/" target="_blank" style="text-decoration: none; color: #000000;" rel="noopener"><span class="mce-content-body mce-edit-focus" style="word-break: break-word; position: relative;" id="8f263514-911c-4d1f-b711-d9bf5d25c80c" data-position="10-1-0" data-qa="tinyeditor-root-element"><strong><span class="tinyMce-placeholder" style="word-break: break-word;">AURA 2025</span></strong></span></a></span></strong></h1>
// 															</td>
// 														</tr>
// 													</table>
// 												</td>
// 											</tr>
// 										</tbody>
// 									</table>
// 								</td>
// 							</tr>
// 						</tbody>
// 					</table>
// 					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
// 						<tbody>
// 							<tr>
// 								<td>
// 									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #ffffff; width: 500px; margin: 0 auto;" width="500">
// 										<tbody>
// 											<tr>
// 												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
// 													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#444a5b;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
// 																	<p style="margin: 0;">Hi Team <strong>${groupName}</strong>,</p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#000000;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
// 																	<p style="margin: 0;">This is a follow-up to our previous email. We're elated to confirm that you have successfully registered for&nbsp;<strong>AURA 2025</strong>!&nbsp;&nbsp;Congratulations on making it to this stage of the competition.</p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#101112;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
// 																	<p style="margin: 0;">We're eager to see your innovative hardware project come to life at the event. Here's a reminder of the key things you need to do to prepare:</p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#101112;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
// 																	<p style="margin: 0;"><strong>Prototype:</strong>&nbsp;Make sure your fully functional prototype is ready for the Preliminary Round on&nbsp;<strong>25th February 2025</strong>.</p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="paragraph_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#101112;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
// 																	<p style="margin: 0;">&nbsp;<strong>Presentation:</strong>&nbsp;Finalize your&nbsp;<strong>10-15</strong>&nbsp;slide PowerPoint presentation, highlighting your project's purpose, design, functionality and unique features.</p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="paragraph_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#101112;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
// 																	<p style="margin: 0;"><strong>Poster:</strong>&nbsp;Complete your&nbsp;<strong>A1</strong>-sized poster (841 mm x 594 mm) for display. Remember, it can be printed or hand-drawn [We encourage you to go through the&nbsp;<em>Guidelines for AURA 25</em>&nbsp;for a better understanding of the process and requirements].</p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="paragraph_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#101112;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
// 																	<p style="margin: 0;"><strong>Practice:</strong>&nbsp;Practice your 15-minute presentation to ensure a confident and engaging delivery to our judges.</p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="paragraph_block block-8" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#5427d2;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:21.599999999999998px;">
// 																	<p style="margin: 0;"><strong>Important Information:</strong></p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="paragraph_block block-9" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#101112;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
// 																	<p style="margin: 0;"><strong>Venue:</strong>&nbsp;2nd Floor Seminar Room, Aliah University, Newtown Campus</p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="paragraph_block block-10" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#101112;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
// 																	<p style="margin: 0;"><strong>Reporting Time:</strong>&nbsp;<strong>9:30 AM&nbsp;</strong>sharp on 25th February 2025.</p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="paragraph_block block-11" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#2d3032;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
// 																	<p style="margin: 0; margin-bottom: 16px;">We can't wait to welcome you to AURA 2025!</p>
// 																	<p style="margin: 0;">Best of luck.</p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="paragraph_block block-12" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#000000;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
// 																	<p style="margin: 0; margin-bottom: 16px;"><strong>Best Regards,</strong></p>
// 																	<p style="margin: 0;"><strong>AURA 2025</strong></p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="paragraph_block block-13" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
// 														<tr>
// 															<td class="pad">
// 																<div style="color:#5a5a5a;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:15px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:18px;">
// 																	<p style="margin: 0;">Connect with us on social media</p>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 													<table class="social_block block-14" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
// 														<tr>
// 															<td class="pad">
// 																<div class="alignment" align="center">
// 																	<table class="social-table" width="184px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
// 																		<tr>
// 																			<td style="padding:0 7px 0 7px;"><a href="https://www.facebook.com/profile.php?id=61553964573919" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/facebook@2x.png" width="32" height="auto" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;"></a></td>
// 																			<td style="padding:0 7px 0 7px;"><a href="https://www.linkedin.com/in/aliah-university-s-research-aspirations-688a0a2a1" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/linkedin@2x.png" width="32" height="auto" alt="Linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
// 																			<td style="padding:0 7px 0 7px;"><a href="https://www.instagram.com/https://www.instagram.com/aliah_techfest/profilecard/?igsh=MWI3YXRjcmV6N2pibQ==" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/instagram@2x.png" width="32" height="auto" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;"></a></td>
// 																			<td style="padding:0 7px 0 7px;"><a href="https://youtube.com/@aura_tech_fest?si=666175_Jh3T6wMh4" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/youtube@2x.png" width="32" height="auto" alt="YouTube" title="YouTube" style="display: block; height: auto; border: 0;"></a></td>
// 																		</tr>
// 																	</table>
// 																</div>
// 															</td>
// 														</tr>
// 													</table>
// 												</td>
// 											</tr>
// 										</tbody>
// 									</table>
// 								</td>
// 							</tr>
// 						</tbody>
// 					</table>
					
// 				</td>
// 			</tr>
// 		</tbody>
// 	</table><!-- End -->
// </body>

// </html>`;

//   sendMail(to, subject, message);

// }



