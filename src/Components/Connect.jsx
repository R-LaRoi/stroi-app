import React from 'react'
import Navbar from './Navbar'
import jumpvid from './assets/sjump.mp4'
import './stylesheets/connect.css'

export default function Connect () {
  
return(
<>
<Navbar />
<section className='connect-section'> 

<video playsInline autoPlay muted loop id="">
        <source
          src={jumpvid}
          type="video/mp4"
        />
      </video>

      <div className='media-h1'>
     meet rachel
        <div className='sub-text'>
  As an artist and developer innovation is essential throughout my creative process. While new technologies continue to unfold, I am interested in creating meaningful projects that have a positive impact.
In addition to coding, I am a globetrotting, fit-for-life coach, currently based in New York.
         </div>
      </div>
    
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