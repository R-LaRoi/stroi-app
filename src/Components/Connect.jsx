import React from 'react'
import Navbar from './Navbar'
import logo from './assets/lgstroi.png'
import './stylesheets/connect.css'

export default function Connect (second) {
  
return(
<>
<Navbar />
<section className='connect-section'> 
<img src={logo} alt="" width={700} />
<h1 className='sub-title connect-subtxt'>
  Meet Rachel. A tech-savvy professional, I specialize in designing, developing, and executing responsive websites that elevate user experiences. With a keen focus on enhancing usability and engagement, I bring hands-on experience to create seamless interfaces that captivate and delight.  <div className='icons'>
  <ul>
  <li>github</li>
  <li>email</li>
  <li>linkedin</li>
  <li>art</li>
  </ul>
</div>

</h1>

</section>

</>

)

}