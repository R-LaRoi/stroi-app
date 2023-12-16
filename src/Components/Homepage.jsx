import React from 'react'
import atelier from './assets/atelier.mp4'
  import atmobile from './assets/atemobile.mp4'
import './stylesheets/hpg.css'
import Projects from './HpgProjects'
import logob from './assets/ologo.svg'
import Footer from './Footer'
import './stylesheets/nav.css'
// import { useEffect, useState } from 'react'
import Header from './Header'

const timer = ''
export default function Homepage () 
{   


return(  
<>
<Header />
<div className=''>
<div id='sunlight'>
    <video playsInline autoPlay muted loop className ='hero-vid dsk-vid' id="at-vid">
        <source
          src={atelier}
          type="video/mp4"
        />
      </video>

<video playsInline autoPlay muted loop  
className ='mobile-vid' id="at-vid">
        <source
          src={atmobile}
          type="video/mp4"
        />
      </video>

      <div className='ate-h1' id='ate-text'>
        atelier 718
        <div className='sub-text'>Fresh out of Booklyn, New York Atelier 718 was founded by three friends committed to creating a brand that embodies their personal style. They have a story to tell and they're excited to share it with you. 
  
         </div>
  <div className='txt-dash'></div>
      </div>
            <div className='caption'>
      <div className='sm-header'>projects</div>
      </div>
</div>
<Projects/>

<section className='dev-profile'>
  <div>
    <div className='dev-title'>  </div>

    <div className='dev-title'><img className="logob" src={logob} alt="" width={130}/>
    <div>meet</div>
       <div className='rachel'> Rachel.</div>
      Let's connect and explore how we can build together.
      
      <ul className='hp-ul'>
        <li>github</li>
      <li>link</li>
      <li>art</li></ul>
    </div>
  </div>


</section>
<Footer />
</div>
</>

)};