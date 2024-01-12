import React from 'react'
import './stylesheets/hpg.css'
import './stylesheets/prolink.css'
import data from './Data'
import { NavLink } from "react-router-dom";
export default function HpgProjects() {

let projectCards = data.map( (project, index) => {
  if(index < 3) {
  
return(
  <>
<section className="pro-cards"> 
<div className='pro-text'>
   <ul className='pro-ul pro-ul-main' id="pro-ul-main">
   
  <li className='li-title'>
    {project.title}
  </li>
   
    <li className='li-sub-title'>
    {project.text}
  </li>
  <button className='pro-btn'>view</button>
  <div className='dash'></div>
  </ul>
  </div>

<video playsInline autoPlay muted loop id="tsc-vid" >
        <source
          src={project.video}
          type="video/mp4"
        />
      </video>

</section>

</>
)

}})


return(

<section className='hpg-project-sec'>

<div> {projectCards}</div>
<button className='pro-btn-link'>
  < NavLink to="/projects" className="pro-btn-lnk">  view all</NavLink>

  </button>
</section>

)


}
