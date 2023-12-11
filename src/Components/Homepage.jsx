import React from 'react'
import atelier from './assets/atelier.mp4'
import './stylesheets/hpg.css'
import Projects from './HpgProjects'
import Footer from './Footer'
import Navbar from './Navbar'
import initial from './assets/ologo.svg'
import './stylesheets/nav.css'


export default function Homepage () 
{

return(  
<>
<div className='container'>
<div id='sunlight'>
    <div className=''>
       <ul className='nav-items'>
        <li>projects</li>
        <li>  <img src={initial} className='logo'/></li>
        <li>connect</li>
      </ul>
     </div>
  <video playsInline autoPlay muted loop id="">
        <source
          src={atelier}
          type="video/mp4"
        />
      </video>
   
      <div className='media-h1'>
        atelier 718
        <div className='sub-text'>Fresh out of Booklyn, New York Atelier 718 was founded by three friends committed to creating a brand that embodies their personal style. They have a story tp tell and they're excited to share it with you. 
         </div>
      </div>

            <div className='caption'>
      <div className='sm-header'>projects</div>
      </div>
</div>
<Projects/>
<Footer />
</div>
</>

)};