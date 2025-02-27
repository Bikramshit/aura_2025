
import { db } from "@/prisma";
import { sendMail } from "@/utils/sendMail";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";





export const POST = async(req:NextRequest)=>{
    try {
        const reqbody =await req.json();

                const { name, email, rollNo, code, abstractId, synopsisId } = reqbody;
                console.log(name, email, rollNo, code, abstractId, synopsisId )
        // Validate input
        if (!name || !email || !code || !abstractId) {
            return NextResponse.json({message:"Missing required fields"}, {status:409});
            // return res.status(400).json({ message: "Missing required fields" });
        }

        // Check if the voting code is valid and not used
        const votingCode = await db.votingCode.findUnique({
            where: { code },
        });

        if (!votingCode) {
            return NextResponse.json({message:"Invalid voting code"}, {status:409});
        }

        if (votingCode.used) {
            return NextResponse.json({message:"Voting code already used"}, {status:409});
            // return res.status(400).json({ message: "Voting code already used" });
        }



        const synopsis = await db.synopsis.findUnique({
            where:{
                id:synopsisId
            }
        });

        if(!synopsis) return NextResponse.json({message:"Synopsis not found"}, {status:409});

        // Save the vote
        const vote = await db.vote.create({
            data: {
                name,
                email,
                rollNo,
                synopsisId:synopsis?.id,
                abstractId,
                codeId:votingCode.id,
            },
        });

        // Mark the voting code as used
        await db.votingCode.update({
            where: { code },
            data: { used: true },
        });
        
        const dt = new Date(vote.createdAt).toLocaleString();
        SendMail(email, name, synopsis.groupName, dt, code);

    
        return NextResponse.json({message:"Vote submitted successfully"}, {status:200});


       
    } catch (error) {
        console.log(error)
    }
}


const SendMail = (to:string, name:string, groupName:string, timestamp:string, code:string)=>{

    const subject = "Your Vote Has Been Successfully Submitted";
  const message = `
  
  <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			font-size: 75%;
			line-height: 0;
		}

		#converted-body .list_block ul,
		#converted-body .list_block ol,
		.body [class~="x_list_block"] ul,
		.body [class~="x_list_block"] ol,
		u+.body .list_block ul,
		u+.body .list_block ol {
			padding-left: 20px;
		}

		@media (max-width:520px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.row-1 .column-2 .block-1.heading_block td.pad {
				padding: 25px 35px 20px 0 !important;
			}

			.row-1 .column-2 .block-1.heading_block h1 {
				font-size: 34px !important;
			}
		}
	</style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>

<body class="body" style="margin: 0; background-color: #ffffff; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-image: none; background-position: top left; background-size: auto; background-repeat: no-repeat;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #ffffff; border-radius: 0; width: 500px; margin: 0 auto;" width="500">
										<tbody>
											<tr>
												<td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center" style="line-height:10px">
																	<div style="max-width: 125px;"><img src="https://4c6c5df001.imgdist.com/pub/bfra/9a9elurz/mc9/64c/ug5/AURA_Logo.png" style="display: block; height: auto; border: 0; width: 100%;" width="125" alt title height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="66.66666666666667%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:20px;padding-right:35px;padding-top:30px;text-align:center;width:100%;">
																<h1 style="margin: 0; color: #000000; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif; font-size: 36px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 43.199999999999996px;"><strong><span class="tinyMce-placeholder" style="word-break: break-word;"><a href="https://www.aura.aliah.ac.in/" target="_blank" style="text-decoration: none; color: #000000;" rel="noopener"><span class="mce-content-body mce-edit-focus" style="word-break: break-word; position: relative;" id="8f263514-911c-4d1f-b711-d9bf5d25c80c" data-position="10-1-0" data-qa="tinyeditor-root-element"><strong><span class="tinyMce-placeholder" style="word-break: break-word;">AURA 2025</span></strong></span></a></span></strong></h1>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #ffffff; width: 500px; margin: 0 auto;" width="500">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#444a5b;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0;">Dear&nbsp;<strong>${name},</strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#000000;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0;">Thank you for casting your vote for <strong>"${groupName}"</strong> in <strong>AURA 2025</strong>! 🎉</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0;">Your support means a lot, and your vote has been successfully recorded.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="list_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; color: #101112; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif; font-size: 16px; font-weight: 400; letter-spacing: 0px; line-height: 120%; text-align: left; mso-line-height-alt: 19.2px;">
														<tr>
															<td class="pad">
																<div style="margin-left:-20px">
																	<ul style="margin-top: 0; margin-bottom: 0; list-style-type: revert;">
																		<li style="Margin: 0 0 0 0;">🔹 <strong>Voted For:${groupName}</strong></li>
																		<li style="Margin: 0 0 0 0;"><strong>🔹Voting Code:</strong> : ${code}</li>
																		<li style="Margin: 0 0 0 0;">🔹 <strong>Date & Time:</strong> ${timestamp}</li>
																	</ul>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0;">Best regards,<br><strong>AURA 2025 Team</strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0;">aura@aliah.ac.in | <a href="https://aura.aliah.ac.in" target="_blank" style="text-decoration: underline; color: #7747FF;" rel="noopener">AURA 2025</a></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#5a5a5a;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:15px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:18px;">
																	<p style="margin: 0;">Connect with us on social media</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="social_block block-8" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table class="social-table" width="184px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
																		<tr>
																			<td style="padding:0 7px 0 7px;"><a href="https://www.facebook.com/profile.php?id=61553964573919" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/facebook@2x.png" width="32" height="auto" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 7px 0 7px;"><a href="https://www.linkedin.com/in/aliah-university-s-research-aspirations-688a0a2a1" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/linkedin@2x.png" width="32" height="auto" alt="Linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 7px 0 7px;"><a href="https://www.instagram.com/https://www.instagram.com/aliah_techfest/profilecard/?igsh=MWI3YXRjcmV6N2pibQ==" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/instagram@2x.png" width="32" height="auto" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 7px 0 7px;"><a href="https://youtube.com/@aura_tech_fest?si=666175_Jh3T6wMh4" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-color/youtube@2x.png" width="32" height="auto" alt="YouTube" title="YouTube" style="display: block; height: auto; border: 0;"></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
  `;

  sendMail(to, subject, message);

}