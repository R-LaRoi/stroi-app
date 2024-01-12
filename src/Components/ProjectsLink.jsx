import React  from 'react'
import projectData from './Data'
import Navbar from './Navbar'
import './stylesheets/prolink.css'
import atelier from './assets/atelier.mp4'
import atmobile from './assets/atemobile.mp4'


export default function ProjectsLink() {

let proLink = projectData.map( (procards, index) => {
   console.log(procards)
return(

<section className="pro-cards"> 
<ul className='pro-ul' id="project-list">
  <li className='li-title'>
    {procards.title}
  </li>
    <li className='li-sub-title'>
    {procards.text}
  </li>
  <button className='pro-btn'>
    <a href={procards.link} target="blank_" id='btn-link'>
  view
    </a>
  
    
    </button>
  </ul>
<div>
     <a href={procards.link} target='blank_' id='btn-link'>
<video playsInline autoPlay muted loop id="pro-vid" >
     <source
          src={procards.video}
          type="video/mp4"
        />
    
      </video>
    </a>
  </div>

</section>


)}

)
return(
<>
  <Navbar/>
<section className='pro-section'> 
<div className=''>
<div className= 'pro-col-1'>PROJECTS</div>
 <div id=''>
 
    <video playsInline autoPlay muted loop className='atelier-vid' id='dsk-vid'>
        <source
          src={atelier}
          type="video/mp4"
        />
      
      </video>

<video playsInline autoPlay muted loop  
className ='mobile-vid' id="at-vid">
        <source
          src={atmobile}
          type="video/mp4"
        />
      </video>
      
</div> 

</div>

  <div className='pro-col-2'>

 <li id="pro-ul"> {proLink}</li>

</div>
</section>

</>
)


  }








