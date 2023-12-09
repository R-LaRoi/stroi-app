import React from 'react'
import atelier from './assets/atelier.mp4'
import './hpg.css'
import Projects from './Projects'

export default function Homepage () 
{

return(  



<div className='container'>
<div id='sunlight'>
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

      </div>
</div>
<Projects/>
</div>

)};