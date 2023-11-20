import React from 'react'
import jmp from './assets/jumpn.mp4'
import tsc from './assets/tsc.mp4'
import vista from './assets/vista.mp4'
import atelier from './assets/atelier.mp4'
import './hpg.css'

export default function Homepage () {

return(
  <>
   <div className='container'>
  <video playsInline autoPlay muted loop id="video-hpg">
        <source
          src={atelier}
          type="video/mp4"
        />
      </video>
      <div className='media-h1'>
        atelier 718
      </div>
            <div className='caption'>
Atelier 718
      </div>

</div>
   <div className='container'>
      <video playsInline autoPlay muted loop id="video-hpg">
        <source
          src={tsc}
          type="video/mp4"
        />
      </video>
      <div className='media-h1'>
     tsc
      </div>
              <div className='caption'>
tsc consultancy
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

