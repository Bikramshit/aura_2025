import { NextRequest, NextResponse } from "next/server";
import { getUserSesssion } from "../../auth/[...nextauth]/session";
import { db } from "@/prisma";
import { sendMail } from "@/utils/sendMail";



export const PUT = async(req:NextRequest)=>{
    try {
        //  const user =await getUserSesssion();

		const user = await getUserSesssion();

		console.log("user",user);

         if(!user) return NextResponse.json({
            error:"You are not authorized. "
         }, {status:409});

         const reqBody = await req.json();
         const {synopsisId} = reqBody;

         const synopsis = await db.synopsis.update({
            where:{
                id:synopsisId
            }, 
            data:{
                approved:true, 
            }
         });

         const allMembers = await db.member.findMany({
            where:{
                synopsisId:synopsisId
            }
         });

         for(let i=0; i<allMembers.length; i++){
            SendMail(allMembers[i].email as string, synopsis.groupName);
          }


        return NextResponse.json({
            success:true
        }, {status:200});



    } catch(error:any) {

    }

}



const SendMail = (to:string, groupName:string)=>{

    const subject = "Congratulations ! Your AURA 2025 Project is Shortlisted!";
    const message = `<!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
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
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-image: none; background-position: top left; background-size: auto; background-repeat: no-repeat;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #ffffff; border-radius: 0; width: 500px; margin: 0 auto;" width="500">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 125px;"><img alt="" height="auto" src="https://res.cloudinary.com/dbzpzmxpd/image/upload/v1736622588/AURA_Logo_dvvenb.png" style="display: block; height: auto; border: 0; width: 100%;" title="" width="125"/></div>
</div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:20px;padding-right:35px;padding-top:30px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #000000; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif; font-size: 36px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 43.199999999999996px;"><strong><span class="tinyMce-placeholder" style="word-break: break-word;"><a href="https://www.aura.aliah.ac.in/" rel="noopener" style="text-decoration: none; color: #000000;" target="_blank"><span class="mce-content-body mce-edit-focus" data-position="10-1-0" data-qa="tinyeditor-root-element" id="8f263514-911c-4d1f-b711-d9bf5d25c80c" style="word-break: break-word; position: relative;"><strong><span class="tinyMce-placeholder" style="word-break: break-word;">AURA 2025</span></strong></span></a></span></strong></h1>
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
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #ffffff; width: 500px; margin: 0 auto;" width="500">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#444a5b;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
<p style="margin: 0;">Hi Team <strong>${groupName}</strong>,</p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#000000;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
<p style="margin: 0;"><strong>Great news!</strong> Your abstract for the <strong>Aliah University Tech Fest AURA 2025</strong> has been shortlisted! We were really impressed with your hardware project proposal and can't wait to see it come to life.</p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#5427d2;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:21.599999999999998px;">
<p style="margin: 0;"><strong>Here's what you need to know for the next round:</strong></p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="list_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; color: #000000; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; font-size: 16px; font-weight: 400; letter-spacing: 0px; line-height: 120%; text-align: left; mso-line-height-alt: 19.2px;" width="100%">
<tr>
<td class="pad">
<div style="margin-left:-20px">
<ul start="1" style="margin-top: 0; margin-bottom: 0; list-style-type: revert;">
<li style="Margin: 0 0 0 0;"><span style="word-break: break-word; color: #0c1248;"><strong>Confirm your seat:</strong></span> Reserve your seat by filling out the form. <a href="https://www.aura.aliah.ac.in/participants-register" rel="noopener" style="text-decoration: underline; color: #7747ff;" target="_blank">Click here</a> to complete it.</li>
</ul>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="list_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; color: #101218; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; font-size: 16px; font-weight: 400; letter-spacing: 0px; line-height: 120%; text-align: left; mso-line-height-alt: 19.2px;" width="100%">
<tr>
<td class="pad">
<div style="margin-left:-20px">
<ul start="1" style="margin-top: 0; margin-bottom: 0; list-style-type: revert;">
<li style="Margin: 0 0 0 0;"><span style="word-break: break-word; color: #0c1248;"><strong>Get that prototype ready!</strong></span> Ensure you have a fully functional prototype of your hardware project ready and bring it with you on <strong>25th </strong><strong>February 2025.</strong></li>
</ul>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="list_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; color: #101218; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; font-size: 16px; font-weight: 400; letter-spacing: 0px; line-height: 120%; text-align: left; mso-line-height-alt: 19.2px;" width="100%">
<tr>
<td class="pad">
<div style="margin-left:-20px">
<ul start="1" style="margin-top: 0; margin-bottom: 0; list-style-type: revert;">
<li style="Margin: 0 0 0 0;"><span style="word-break: break-word; color: #0c1248;"><strong>Prepare a killer presentation:</strong></span> Put together a 10-15 slide PowerPoint presentation that covers your project's purpose, design, functionality and unique features.</li>
</ul>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="list_block block-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; color: #101218; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; font-size: 16px; font-weight: 400; letter-spacing: 0px; line-height: 120%; text-align: left; mso-line-height-alt: 19.2px;" width="100%">
<tr>
<td class="pad">
<div style="margin-left:-20px">
<ul start="1" style="margin-top: 0; margin-bottom: 0; list-style-type: revert;">
<li style="Margin: 0 0 0 0;"><span style="word-break: break-word; color: #0c1248;"><strong>Poster Design</strong>:</span> Prepare an <strong>A1-sized poster</strong> (841 mm x 594 mm) summarizing your project for display during the event. The poster can be <strong>printed or hand-drawn</strong> and should include the required graphics to effectively showcase the key aspects of your project, including its purpose, technical details and innovative features.</li>
</ul>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="list_block block-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; color: #101218; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; font-size: 16px; font-weight: 400; letter-spacing: 0px; line-height: 120%; text-align: left; mso-line-height-alt: 19.2px;" width="100%">
<tr>
<td class="pad">
<div style="margin-left:-20px">
<ul start="1" style="margin-top: 0; margin-bottom: 0; list-style-type: revert;">
<li style="Margin: 0 0 0 0;"><span style="word-break: break-word; color: #0c1248;"><strong>Practice your pitch!</strong></span> You'll have 15 minutes to present your project and prototype to our expert judges.</li>
</ul>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#5427d2;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:21.599999999999998px;">
<p style="margin: 0;"><strong>Key Dates:</strong></p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="list_block block-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; color: #101218; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; font-size: 16px; font-weight: 400; letter-spacing: 0px; line-height: 120%; text-align: left; mso-line-height-alt: 19.2px;" width="100%">
<tr>
<td class="pad">
<div style="margin-left:-20px">
<ul start="1" style="margin-top: 0; margin-bottom: 0; list-style-type: revert;">
<li style="Margin: 0 0 0 0;"><span style="word-break: break-word; color: #0c1248;"><strong>Preliminary Round:</strong></span>  You'll need a working version of your hardware project on <strong>25th</strong> <strong>February, 2025.</strong></li>
</ul>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="list_block block-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; color: #101218; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; font-size: 16px; font-weight: 400; letter-spacing: 0px; line-height: 120%; text-align: left; mso-line-height-alt: 19.2px;" width="100%">
<tr>
<td class="pad">
<div style="margin-left:-20px">
<ul start="1" style="margin-top: 0; margin-bottom: 0; list-style-type: revert;">
<li style="Margin: 0 0 0 0;"><span style="word-break: break-word; color: #0c1248;"><strong>Presentation Time & Venue:</strong></span> We'll let you know the specifics soon!</li>
</ul>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-12" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#192c61;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
<p style="margin: 0; margin-bottom: 16px;">We're excited to see your hard work pay off at <strong>AURA</strong><strong> 2025</strong>!  If you have any questions or need further assistance, feel free to reach out to us.</p>
<p style="margin: 0;">Best of luck.</p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-13" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#000000;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
<p style="margin: 0; margin-bottom: 16px;"><strong>Best Regards,</strong></p>
<p style="margin: 0;"><strong>AURA 2025</strong></p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-14" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="color:#5a5a5a;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:15px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:18px;">
<p style="margin: 0;">Connect with us on social media</p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="social_block block-15" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="184px">
<tr>
<td style="padding:0 7px 0 7px;"><a href="https://www.facebook.com/profile.php?id=61553964573919" target="_blank"><img alt="Facebook" height="auto" src="https://res.cloudinary.com/dbzpzmxpd/image/upload/v1736622588/facebook2x_ssc2rq.png" style="display: block; height: auto; border: 0;" title="facebook" width="32"/></a></td>
<td style="padding:0 7px 0 7px;"><a href="https://www.linkedin.com/in/aliah-university-s-research-aspirations-688a0a2a1" target="_blank"><img alt="Linkedin" height="auto" src="https://res.cloudinary.com/dbzpzmxpd/image/upload/v1736622588/linkedin2x_reuacj.png" style="display: block; height: auto; border: 0;" title="linkedin" width="32"/></a></td>
<td style="padding:0 7px 0 7px;"><a href="https://www.instagram.com/aliah_techfest/profilecard/?igsh=MWI3YXRjcmV6N2pibQ==" target="_blank"><img alt="Instagram" height="auto" src="https://res.cloudinary.com/dbzpzmxpd/image/upload/v1736622588/instagram2x_dsx5ep.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
<td style="padding:0 7px 0 7px;"><a href="https://youtube.com/@aura_tech_fest?si=666175_Jh3T6wMh4" target="_blank"><img alt="YouTube" height="auto" src="https://res.cloudinary.com/dbzpzmxpd/image/upload/v1736622588/youtube2x_rwp0tb.png" style="display: block; height: auto; border: 0;" title="YouTube" width="32"/></a></td>
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
</html>`;

  sendMail(to, subject, message);

} 

export default PUT;
