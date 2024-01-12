import React from 'react'

import atelier from './assets/atelier.mp4'
  import atmobile from './assets/atemobile.mp4'
import './stylesheets/hpg.css'
import Projects from './HpgProjects'
import logob from './assets/ologo.svg'
import Footer from './Footer'
import './stylesheets/nav.css'
import circle from './assets/circle.png'
// import { useEffect, useState } from 'react'
import Header from './Header'

const timer = ''
export default function Homepage () 
{   


return(  
<>
<Header />

<div className=''>
{/* <div id=''>
    <div className='ate-h1'>
        atelier 718
        <div className='sub-text'>Fresh out of Booklyn, New York Atelier 718 was founded by three friends committed to creating a brand that embodies their personal style. They have a story to tell and they're excited to share it with you. 
         </div>

      </div>
    <video playsInline autoPlay muted loop className='atelier-vid' id='dsk-vid'>
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

      
           
</div> */}


 <div className='caption'>
      <div className='sm-header'>projects</div>
 
<Projects/>

     </div>


<section className='dev-profile'>
  <div>
    <div className='dev-title'>
      <img className="logob circle" src={circle} alt="" width={120}/>
    <div>meet</div>
      <div className='rachel'> Rachel.</div>
     <div className='r-sub-title'>  Let's connect and explore how we can build together.</div> 
     {/* <small className='connect-subtxt'> </small> */}
      <ul className='hp-ul'>
        <li className='li-ul'> 
        <a href=""></a>
        github
        </li>
      <li className='li-ul'>link
      
      </li>
      <li className='li-ul'>art
      
      </li></ul>
    </div>
    
  </div>
 <div className='dev-col-two'>
<section className='con-form'>
<form>

  <div class="row g-3">

    <div className='dev-title'>
          <small className=''> Say hi! </small>
      </div>
  <div class="col">

    <input type="text" class="form-control" placeholder="Name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Email" aria-label="email"/>
  </div>
    <div class="col">
    <textarea type="input" class="form-control" placeholder="Message" aria-label="email"/>
  </div>
<button className='con-btn'> submit</button>
</div>
</form>
</section>
    </div>

</section>
<Footer />
</div>
</>

)};