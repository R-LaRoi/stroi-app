import React from 'react'
import Navbar from './Navbar'
import jumpvid from './assets/sjump.mp4'
import jmpmobile from './assets/jmpmobile.mp4'
import stroi from './assets/lgstroi.png'
import './stylesheets/connect.css'

export default function Connect () {
  
return(
<>
<Navbar />
<section className='connect-section'> 

<video playsInline autoPlay muted loop className='atelier-vid' id='dsk-vid'>
        <source
          src={jumpvid}
          type="video/mp4"
        />
      </video>
      <video playsInline autoPlay muted loop className ='mobile-vid' id="at-vid">
        <source
          src={jmpmobile}
          type="video/mp4"
        />
      </video>

      <div className='media-h1'>
    <img className="logob" src={stroi} alt="" width={230}/>
        <div className='con-sub-text'>
  <div></div> As an artist and developer innovation is essential throughout my creative process. While new technologies continue to unfold, I am interested in creating meaningful projects that have a positive impact.
<div>
<div></div>
In addition to coding, I am a globetrotting, fit-for-life coach, currently based in New York.  If you are seeking a visionary web solutions architect who combines technical prowess, creative design, and collaboration to deliver remarkable results, let's connect and explore the ways we can build together.
</div>

         </div>
      </div>
    

</section>





</>

)

}