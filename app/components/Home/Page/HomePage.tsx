
"use client";

import React from 'react';
import Header from '../../Header/Header';
import LandingPage from '../Hero/Hero';
import SecondHero from '../secondHero/SecondHero';
import SelectedTeams from '../SelectedTeams/SelectedTeams';
import PreviousGlimpses from '../previousGlimpses/PreviousGlimpses';
import EventSchedule from '../EventSchedule/EventSchedule';
import Reward from '../Reward/Reward';
import Team from '../Team/Team';
import ContactUs from '../contactUs/ContactUs';
import Footer from '../Footer/Footer';
import { Registration } from '@prisma/client';


function HomePage() {

    const handleNavigate = (id:string) => {
        if (typeof window !== 'undefined') {
          const section = document.getElementById(id);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

  return (
   <>

<div className='hero_background'>
   <Header onNavigate={handleNavigate} />
   <LandingPage onNavigate={handleNavigate} />
   <div id='about'>
   <SecondHero />
   </div>
  
   <div id='selectedTeam'>
   <SelectedTeams  />
   </div>

   <div id='gallery'>
   <PreviousGlimpses />
   </div>

   

   <div id='eventSchedule'>
   <EventSchedule />
   </div>
   <div>
    <Reward />
   </div>
   {/* <Sponsored /> */}

<div id='teams'>
<Team />

</div>

<div id='contactUS'>
<ContactUs />
</div>

<div id='footer'>
<Footer />

</div>


   </div>

   

   </>
  )
}

export default HomePage