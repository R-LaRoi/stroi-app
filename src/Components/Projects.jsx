import React from 'react'
import './hpg.css'
import data from './assets/hpgData'
import jmp from "./assets/jfeet.mp4";
import tsc from "./assets/tsc.mp4";
import vista from "./assets/vista.mp4";

const prj = data 
export default function Projects (data) {

console.log(prj)

return(


  <>

  <section className='two-col'>

  <div className='title'>
    
TSC
<div className='sub-title' >Trupti Samuel Consultancy, specializes in parental therapy and early childhood counseling. 
         </div>
         <div className='dash'></div>
  </div>
<div>
 <video playsInline autoPlay muted loop id="tsc-vid" >
        <source
          src={tsc}
          type="video/mp4"
        />
      </video>
      
</div>
<div className='title'>
Vista
<div className='sub-title' >Chingu Voyage
         </div>
 <div className='dash'></div>
  </div>
<div>
 <video playsInline autoPlay muted loop id="tsc-vid" >
        <source
          src={vista}
          type="video/mp4"
        />
      </video>
</div>
<div className='title'>
WTM
<div className='sub-title'>fitness coach mobile application
         </div>
 <div className='dash'></div>
  </div>
<div>
 <video playsInline autoPlay muted loop id="tsc-vid" >
        <source
          src={jmp}
          type="video/mp4"
        />
      </video>
      

</div>



</section>

{/* {data.map(function (project, index ) {

  return(
<div>
<li>{index}</li>
<div>
  {project.header}
</div>

</div>


  )
}
  
  
  )} */}

</>
)

}