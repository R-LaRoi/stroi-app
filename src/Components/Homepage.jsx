import React from 'react'
import atelier from './assets/atelier.mp4'
import './stylesheets/hpg.css'
import Projects from './HpgProjects'
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
    <video playsInline autoPlay muted loop id="at-vid">
        <source
          src={atelier}
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
{/* <Footer /> */}
</div>
</>

)};