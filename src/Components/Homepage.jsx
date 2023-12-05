import React from 'react'
import jmp from './assets/jumpn.mp4'
import tsc from './assets/tsc.mp4'
import vista from './assets/vista.mp4'
import atelier from './assets/atelier.mp4'
import './hpg.css'

export default function Homepage () {

return(
  <>
   <div className='container' >
  <video playsInline autoPlay muted loop id="video-hpg at-vid">
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
   <div className='container' >
      <video playsInline autoPlay muted loop id="video-hpg">
        <source
          src={tsc}
          type="video/mp4"
        />
      </video>
      <div className='media-h1'>
     tsc
      <div className='sub-text'>Trupti Samuel Consultancy, specializes in parental therapy and early childhood counseling. 
         </div>
      </div>
     
</div>
      <video playsInline autoPlay muted loop id="video-hpg">
        <source
          src={vista}
          type="video/mp4"
        />
      </video>
             <div className='caption'>
VISTA
      </div>
  
 <video playsInline autoPlay muted loop id="video-hpg">
        <source
          src={jmp}
          type="video/mp4"
        />
      </video>
               <div className='caption'>
JMPN
      </div>

      </>
)


}

