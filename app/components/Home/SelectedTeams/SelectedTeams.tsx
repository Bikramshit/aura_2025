

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
                   
                ))}
            </div>
        </div>
    );
}

export default SelectedTeams;


