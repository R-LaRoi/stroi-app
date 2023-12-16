import React from 'react'
import './stylesheets/hpg.css'
import './stylesheets/prolink.css'
import data from './Data'

export default function HpgProjects() {

let projectCards = data.map( (project, index) => {
  if(index < 3) {
  
return(
  <>
<section className="two-col"> 

<video playsInline autoPlay muted loop id="tsc-vid" >
        <source
          src={project.video}
          type="video/mp4"
        />
      </video>

<div className='pro-text'>
   <ul className='pro-ul pro-ul-main' id="pro-ul-main">
  <li className='title'>
    {project.title}
  </li>
    <li className='sub-title'>
    {project.text}
  </li>
  <div className='dash'>view</div>
  </ul>
  </div>
 


</section>

</>
)

}})



return(

<section className='hpg-project-sec'>

<div> {projectCards}</div>
</section>

)


}
