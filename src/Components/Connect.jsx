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

<video playsInline autoPlay muted loop id=""
className ='dsk-vid'>
        <source
          src={jumpvid}
          type="video/mp4"
        />
      </video>
      {/* <video playsInline autoPlay muted loop id=""
className ='mobile-vid'>
        <source
          src={jmpmobile}
          type="video/mp4"
        />
      </video> */}

      <div className='media-h1'>
    <img className="logob" src={stroi} alt="" width={230}/>
        <div className='con-sub-text'>
  <div></div> As an artist and developer innovation is essential throughout my creative process. While new technologies continue to unfold, I am interested in creating meaningful projects that have a positive impact.
<div>
<div></div>
In addition to coding, I am a globetrotting, fit-for-life coach, currently based in New York.  If you are seeking a visionary web solutions architect who combines technical prowess, creative design, and collaboration to deliver remarkable results, let's connect and explore how we can build together.
</div>

         </div>
      </div>
    
<section className='con-form'>
<form>

  <div class="row g-3">

    <div className='dev-title'>Let's connect! </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Email" aria-label="email"/>
  </div>
    <div class="col">
    <textarea type="input" class="form-control" placeholder="Message" aria-label="email"/>
  </div>
<button className='dash'> submit</button>
</div>
</form>

<div className="con-col-2">
<div className='dev-title'>
<ul className='hp-ul '>
        <li>github</li>
      <li>linkedin</li>
      <li>art</li></ul>
      </div>
      </div>
</section>


  {/* <div className='icons'>
  <ul>
  <li>github</li>
  <li>email</li>
  <li>linkedin</li>
  <li>art</li>
  </ul>
</div>
 */}


</section>

</>

)

}