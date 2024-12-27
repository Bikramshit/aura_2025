
"use client";
import React from 'react'
import Header from './components/Header/Header'
import LandingPage from './components/Home/Hero/Hero'
import SecondHero from './components/Home/secondHero/SecondHero'
import PreviousGlimpses from './components/Home/previousGlimpses/PreviousGlimpses'
import Team from './components/Home/Team/Team'
import Sponsored from './components/Home/Sponsored/Sponsored'
import EventSchedule from './components/Home/EventSchedule/EventSchedule'
import ContactUs from './components/Home/contactUs/ContactUs'
import Footer from './components/Home/Footer/Footer'
import Reward from './components/Home/Reward/Reward';
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
   <LandingPage />
   <div id='about'>
   <SecondHero />
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