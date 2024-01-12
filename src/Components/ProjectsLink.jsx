import React  from 'react'
import projectData from './Data'
import Navbar from './Navbar'
import './stylesheets/prolink.css'
import Footer from './Footer'



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
    <video playsInline autoPlay muted loop id="pro-vid" >
        <source
          src={procards.video}
          type="video/mp4"
        />
      </video>
  </div>

</section>


)}

)
return(
<>
  <Navbar/>
<section className='pro-section'> 
<div className='pro-col-1'>
    <div className='pro-title'>
                      PROJECTS
         
            <div className='dash'></div>
    </div>
</div>

  <div className='pro-col-2'>

 <li id="pro-ul"> {proLink}</li>

</div>
</section>

</>
)


  }








