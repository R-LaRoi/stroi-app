import React  from 'react'
import projectData from './ProLinkData'

export default function ProjectLink() {

let proLink = projectData.map( (procards, index) => {
   console.log(procards)
return(

<section> 
  <div>
    {procards.title}
  </div>
    <div>
    {procards.text}
  </div>
</section>


)}

)
return(

<section className='two-col'> 
<div className='title'>
PROJECTS
<div className='sub-title'>current projects 
         </div>
         <div className='dash'></div>
  </div>
<div>
  {proLink}
</div>
</section>

)


  }








