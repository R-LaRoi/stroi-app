import React from 'react'
import Navbar from './Navbar'
import logo from './assets/stroy.svg'
import './stylesheets/connect.css'

export default function Connect (second) {
  
return(
<>
<Navbar />
<section className='connect-section'> 
<img src={logo} alt="" width={500} /> 
<div className='sb-cn-txt'>
Meet Rachel. 
</div>
<div className='card-connect'>
  <div className='connect-txt'>
    Meet Rachel. A tech-savvy professional, I specialize in designing, developing, and executing responsive websites that elevate user experiences. With a keen focus on enhancing usability and engagement, I bring hands-on experience to create seamless interfaces that captivate and delight.
  </div>

<div className='connect-txt'>
    <ul className='connect-ul'>
  <li className='connect-ul'>github</li>
  <li className='connect-ul'>email</li>
  <li className='connect-ul'>linkedin</li>
  <li className='connect-ul'>art</li>
  </ul>
  </div>
<div className='connect-txt'>
    <ul className='connect-ul'>
  <li className='connect-ul'>github</li>
  <li className='connect-ul'>email</li>
  <li className='connect-ul'>linkedin</li>
  <li className='connect-ul'>art</li>
  </ul>
  </div>


</div>

{/* <h1 className='sub-title connect-subtxt'>
  Meet Rachel. A tech-savvy professional, I specialize in designing, developing, and executing responsive websites that elevate user experiences. With a keen focus on enhancing usability and engagement, I bring hands-on experience to create seamless interfaces that captivate and delight.  <div className='icons'>
  <ul>
  <li>github</li>
  <li>email</li>
  <li>linkedin</li>
  <li>art</li>
  </ul>
</div>

</h1> */}

</section>

</>

)

}