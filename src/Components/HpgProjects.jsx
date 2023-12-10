import React from 'react'
import './stylesheets/hpg.css'
import data from './hpgData'

export default function HpgProjects() {

let projectCards = data.map( (project, index) => {
  
return(
  <>

  <section className='two-col'> 

<div className='title'>

{project.header}
<div className='sub-title' >{project.subtext}
         </div>
         <div className='dash'></div>
  </div>
<div>
 <video playsInline autoPlay muted loop id="tsc-vid" >
        <source
          src={project.mediaSource}
          type="video/mp4"
        />
      </video>
      
</div>
</section>
</>
)

})



return(

<section className='hpg-project-sec'>

<div> {projectCards}</div>
</section>

)


}
