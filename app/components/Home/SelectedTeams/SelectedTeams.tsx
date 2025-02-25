

import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


const Items = [
    {
        "Abstract_Id":"AURA2025001", 
        "GroupName":"STERNRTTERS",
        "Photo":"/assets/top_12/sterntritters.jpg"
    },
    {
        "Abstract_Id":"AURA2025008", 
        "GroupName":"THE MOTION MINDS",
        "Photo":"/assets/top_12/theMotoinMinds.jpg"
    },
    {
        "Abstract_Id":"AURA2025010", 
        "GroupName":"AquaSuraksha Pro",
        "Photo":"/assets/top_12/aqua.jpg"
    },
    {
        "Abstract_Id":"AURA2025011", 
        "GroupName":"THE TINKER TURTLE",
        "Photo":"/assets/top_12/theTinkerTurtle.jpeg"
    },
    {
        "Abstract_Id":"AURA2025012", 
        "GroupName":"Beyond Infinity",
        "Photo":"/assets/top_12/beyond_infinity.jpg"
    },
    {
        "Abstract_Id":"AURA2025014", 
        "GroupName":"TECH AVENGERS",
        "Photo":"/assets/top_12/techAvengers.jpg"
    },
    {
        "Abstract_Id":"AURA2025015", 
        "GroupName":"AlgoDrive",
        "Photo":"/assets/top_12/algo_drive.jpg"
    },
    {
        "Abstract_Id":"AURA2025016", 
        "GroupName":"SURETRICAL",
        "Photo":"/assets/top_12/surelectrical.jpg"
    },
    {
        "Abstract_Id":"AURA2025018", 
        "GroupName":"MindZed",
        "Photo":"/assets/top_12/mindzed.jpg"
    },
    {
        "Abstract_Id":"AURA2025037", 
        "GroupName":"THE DEFENDERS",
        "Photo":"/assets/top_12/theDefenders.jpg"
    },
    {
        "Abstract_Id":"AURA2025042", 
        "GroupName":"Tech Tribe",
        "Photo":"/assets/top_12/techTribe.jpg"
    },
    {
        "Abstract_Id":"AURA2025048", 
        "GroupName":"TechCrest",
        "Photo":"/assets/top_12/techCrest.jpg"
    }
    
    

]

function SelectedTeams() {
    return (
        <div className="mx-4 md:mx-16 my-8 p-6 md:p-12 selected_bg shadow-lg border border-gray-700 rounded-lg">
            {/* Title */}
            <div className="text-center text-2xl md:text-3xl font-bold font-merriweather bg-gradient-to-r from-[#fca452] to-[#fbe924] bg-clip-text text-transparent relative mb-4">
                Selected Teams for Final Day
            </div>
            <p className="text-center text-gray-200 mb-6">
                Congratulations to the teams selected for the Final Day! 🎉
            </p>

            {/* Teams Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Items.map((team, i) => (

                <div key={i}>
<div className="container noselect">
  <div className="canvas">
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div id="card">
      <div className="card-content">
        <div className="card-glare"></div>
        <div className="cyber-lines">
          <span></span><span></span><span></span><span></span>
        </div>
        {/* <p id="prompt">HOVER ME</p>
        <div className="title">CYBER<br />CARD</div> */}
        <div className="glowing-elements">
          <div className="glow-1"></div>
          <div className="glow-2"></div>
          <div className="glow-3"></div>
        </div>
        <div className='p-4'>
        <Image 
                            src={team.Photo} 
                            alt={team.GroupName} 
                            width={300} 
                            height={200} 
                            className="w-full h-48 object-cover rounded-md"
                            unoptimized
                        />
            {/* <Image src={team.Photo} alt='' height={100} width={100} className='w-full  rounded-md shadow-md' unoptimized /> */}
        </div>
        <div className="subtitle flex items-center  px-4">
          <div>Abstract Id</div>
          <span className="highlight">{team.Abstract_Id}</span>
        </div>
        <div className="subtitle flex items-center  px-4">
          <div>Team Name</div>
          <span className="highlight">{team.GroupName}</span>
        </div>
        {/* <div className="subtitle flex items-center px-4">
          <div>Abstract Id</div>
          <span className="highlight">{team.synopsis.registrationId}</span>
        </div> */}
        <div className="card-particles">
          <span></span><span></span><span></span> <span></span><span></span><span></span>
        </div>
        <div className="corner-elements">
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="scan-line"></div>
      </div>
    </div>
  </div>
</div>
                </div>
                    // <div key={i} className="bg-gray-800 p-4 rounded-lg shadow-md">
                    //     <Image 
                    //         src={team.Photo} 
                    //         alt={team.GroupName} 
                    //         width={300} 
                    //         height={200} 
                    //         className="w-full h-48 object-cover rounded-md"
                    //         unoptimized
                    //     />
                    //     <div className="text-white mt-3">
                    //         <p className="font-semibold text-lg">{team.GroupName}</p>
                    //         <p className="text-gray-400">Abstract ID: <span className="text-yellow-400">{team.Abstract_Id}</span></p>
                    //     </div>
                    // </div>
                ))}
            </div>
        </div>
    );
}

export default SelectedTeams;




// import { Registration, Synopsis } from '@prisma/client'
// import { ShieldCheck } from 'lucide-react'
// import Image from 'next/image'
// import React from 'react'

// const Items = [
//     {
//         "Abstract_Id":"AURA2025001", 
//         "GroupName":"STERNRTTERS",
//         "Photo":"/assets/top_12/sterntritters.jpg"
//     },
//     {
//         "Abstract_Id":"AURA2025008", 
//         "GroupName":"THE MOTION MINDS",
//         "Photo":"/assets/top_12/theMotoinMinds.jpg"
//     },
//     {
//         "Abstract_Id":"AURA2025010", 
//         "GroupName":"AquaSuraksha Pro",
//         "Photo":"/assets/top_12/aqua.jpg"
//     },
//     {
//         "Abstract_Id":"AURA2025011", 
//         "GroupName":"THE TINKER TURTLE",
//         "Photo":"/assets/top_12/theTinkerTurtle.jpeg"
//     },
//     {
//         "Abstract_Id":"AURA2025012", 
//         "GroupName":"Beyond Infinity",
//         "Photo":"/assets/top_12/beyond_infinity.jpg"
//     },
//     {
//         "Abstract_Id":"AURA2025014", 
//         "GroupName":"TECH AVENGERS",
//         "Photo":"/assets/top_12/techAvengers.jpg"
//     },
//     {
//         "Abstract_Id":"AURA2025015", 
//         "GroupName":"AlgoDrive",
//         "Photo":"/assets/top_12/algo_drive.jpg"
//     },
//     {
//         "Abstract_Id":"AURA2025016", 
//         "GroupName":"SURETRICAL",
//         "Photo":"/assets/top_12/surelectrical.jpg"
//     },
//     {
//         "Abstract_Id":"AURA2025018", 
//         "GroupName":"MindZed",
//         "Photo":"/assets/top_12/mindzed.jpg"
//     },
//     {
//         "Abstract_Id":"AURA2025037", 
//         "GroupName":"THE DEFENDERS",
//         "Photo":"/assets/top_12/theDefenders.jpg"
//     },
//     {
//         "Abstract_Id":"AURA2025042", 
//         "GroupName":"Tech Tribe",
//         "Photo":"/assets/top_12/techTribe.jpg"
//     },
//     {
//         "Abstract_Id":"AURA2025048", 
//         "GroupName":"TechCrest",
//         "Photo":"/assets/top_12/techCrest.jpg"
//     }
    
    

// ]

// function SelectedTeams() {
//   return (
//     <>
    
//     <div className='mx-[1rem] md:mx-[10rem] my-8 md:my-[3rem] rounded-lg p-4 md:p-12 selected_bg shadow-xl border border-slate-600 relative overflow-hidden'>
//         <div className='w-[100px] h-[100px] absolute left-[-1rem] top-[-0.5rem] bg-[#0e2054] rounded-full shadow-2xl'>

//         </div>
//         <div className='text-[1.3rem] md:text-[2rem] font-bold  text-center px-4 pt-4 font-merriweather bg-gradient-to-r from-[#fca452] to-[#fbe924] bg-clip-text text-transparent relative'>
       
//          <span> Selected Teams for Final Day 
//          {/* <span className='absolute h-4 left-0 right-0 bottom-2 bg-[#42484b] z-1'></span> */}

//         </span>

        
//         </div>

//         <div className='text-center font-semibold mb-4 z-[10] relative text-[0.9rem]'>
//             Congratulations to the team selecting for the Final Day 🎉
//         </div>

//         <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>

//         {
//             Items && Items.map((team, i)=>(
//                 <div key={i}>
// <div className="container noselect">
//   <div className="canvas">
//     <div className="tracker tr-1"></div>
//     <div className="tracker tr-2"></div>
//     <div className="tracker tr-3"></div>
//     <div className="tracker tr-4"></div>
//     <div className="tracker tr-5"></div>
//     <div className="tracker tr-6"></div>
//     <div className="tracker tr-7"></div>
//     <div className="tracker tr-8"></div>
//     <div className="tracker tr-9"></div>
//     <div id="card">
//       <div className="card-content">
//         <div className="card-glare"></div>
//         <div className="cyber-lines">
//           <span></span><span></span><span></span><span></span>
//         </div>
//         {/* <p id="prompt">HOVER ME</p>
//         <div className="title">CYBER<br />CARD</div> */}
//         <div className="glowing-elements">
//           <div className="glow-1"></div>
//           <div className="glow-2"></div>
//           <div className="glow-3"></div>
//         </div>
//         <div className='p-4'>
//             <Image src={team.Photo} alt='' height={100} width={100} className='w-full  rounded-md shadow-md' unoptimized />
//         </div>
//         <div className="subtitle flex items-center  px-4">
//           <div>Abstract Id</div>
//           <span className="highlight">{team.Abstract_Id}</span>
//         </div>
//         <div className="subtitle flex items-center  px-4">
//           <div>Team Name</div>
//           <span className="highlight">{team.GroupName}</span>
//         </div>
//         {/* <div className="subtitle flex items-center px-4">
//           <div>Abstract Id</div>
//           <span className="highlight">{team.synopsis.registrationId}</span>
//         </div> */}
//         <div className="card-particles">
//           <span></span><span></span><span></span> <span></span><span></span><span></span>
//         </div>
//         <div className="corner-elements">
//           <span></span><span></span><span></span><span></span>
//         </div>
//         <div className="scan-line"></div>
//       </div>
//     </div>
//   </div>
// </div>
//                 </div>
//             ))
//         }



        

// {/* {
//                 teams && teams.map((team, i)=>(
//                     <div key={i} className='font-merriweather  selected_item_bg p-4 rounded-md border border-[#23262c] shadow-lg'>
//                         <div className=' '>
//                         <Image src={"/assets/previous/aura24/DSC01060.JPG"} height={100} width={100} alt='' unoptimized className=' w-auto rounded-t-md' />
//                         </div>
//                         <div className=' p-4 rounded-md'>
                        
//                         <div>
//                            <span className='selected_title'> Team Name:</span> <span className='selected_value'>{team.synopsis.groupName}</span>
//                         </div>
//                         <div>
//                         <span className='selected_title'>Project Name:</span> <span className='selected_value'>{team.synopsis.projectName}</span>
//                         </div>
//                         <div className='bg-yellow-500 font-bold font-inter  text-center flex items-center justify-center mt-2 p-2 rounded-md gap-1'>
//                         <ShieldCheck size={24}/>
//                         {team.synopsis.registrationId}
//                         </div>
//                         </div>
                        
                        


//                     </div>
//                 ))
//             }
//             {
//                 teams && teams.map((team, i)=>(
//                     <div key={i} className='font-merriweather  selected_item_bg p-4 rounded-md border border-[#23262c] shadow-lg'>
//                         <div className=' '>
//                         <Image src={"/assets/previous/aura24/DSC01060.JPG"} height={100} width={100} alt='' unoptimized className=' w-auto rounded-t-md' />
//                         </div>
//                         <div className=' p-4 rounded-md'>
                        
//                         <div>
//                            <span className='selected_title'> Team Name:</span> <span className='selected_value'>{team.synopsis.groupName}</span>
//                         </div>
//                         <div>
//                         <span className='selected_title'>Project Name:</span> <span className='selected_value'>{team.synopsis.projectName}</span>
//                         </div>
//                         <div className='bg-yellow-500 font-bold font-inter  text-center flex items-center justify-center mt-2 p-2 rounded-md gap-1'>
//                         <ShieldCheck size={24}/>
//                         {team.synopsis.registrationId}
//                         </div>
//                         </div>
                        
                        


//                     </div>
//                 ))
//             }
//             {
//                 teams && teams.map((team, i)=>(
//                     <div key={i} className='font-merriweather  selected_item_bg p-4 rounded-md border border-[#23262c] shadow-lg'>
//                         <div className=' '>
//                         <Image src={"/assets/previous/aura24/DSC01060.JPG"} height={100} width={100} alt='' unoptimized className=' w-auto rounded-t-md' />
//                         </div>
//                         <div className=' p-4 rounded-md'>
                        
//                         <div>
//                            <span className='selected_title'> Team Name:</span> <span className='selected_value'>{team.synopsis.groupName}</span>
//                         </div>
//                         <div>
//                         <span className='selected_title'>Project Name:</span> <span className='selected_value'>{team.synopsis.projectName}</span>
//                         </div>
//                         <div className='bg-yellow-500 font-bold font-inter  text-center flex items-center justify-center mt-2 p-2 rounded-md gap-1'>
//                         <ShieldCheck size={24}/>
//                         {team.synopsis.registrationId}
//                         </div>
//                         </div>
                        
                        


//                     </div>
//                 ))
//             }
//             {
//                 teams && teams.map((team, i)=>(
//                     <div key={i} className='font-merriweather  selected_item_bg p-4 rounded-md border border-[#23262c] shadow-lg'>
//                         <div className=' '>
//                         <Image src={"/assets/previous/aura24/DSC01060.JPG"} height={100} width={100} alt='' unoptimized className=' w-auto rounded-t-md' />
//                         </div>
//                         <div className=' p-4 rounded-md'>
                        
//                         <div>
//                            <span className='selected_title'> Team Name:</span> <span className='selected_value'>{team.synopsis.groupName}</span>
//                         </div>
//                         <div>
//                         <span className='selected_title'>Project Name:</span> <span className='selected_value'>{team.synopsis.projectName}</span>
//                         </div>
//                         <div className='bg-yellow-500 font-bold font-inter  text-center flex items-center justify-center mt-2 p-2 rounded-md gap-1'>
//                         <ShieldCheck size={24}/>
//                         {team.synopsis.registrationId}
//                         </div>
//                         </div>
                        
                        


//                     </div>
//                 ))
//             } */}

//         </div>


//         {/* <div className='text-center text-[1.0rem] font-semibold my-2 font-merriweather'>Experience AURA: where innovation thrives, ideas ignite, and brilliance shines. <span className='hidden md:inline'><br /></span> Join us to shape the future of technology</div> */}

       

//         {/* <div className='grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center justify-center mt-4'>
//             {
//                 teams.map((team, i)=>(
//                     <div key={i} className='h-[9rem] w-[9rem] md:h-[12rem] md:w-[12rem] rounded-full flex items-center justify-center reward_text reward_item font-bold text-[1.1rem] md:text-[1.2rem] p-4 text-center shadow-lg font-merriweather border border-slate-900'>
//                     </div>
//                 ))
//             }

//         </div> */}

      


//     </div>
        
    
//     </>
//   )
// }

// export default SelectedTeams