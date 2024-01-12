import React from 'react'
import './stylesheets/hpg.css'
import Projects from './HpgProjects'
import Footer from './Footer'
import './stylesheets/nav.css'
import circle from './assets/circle.png'
import Header from './Header'



export default function Homepage () 
{   

return(  
<>
<Header />

<div className=''>
 <div className='caption'>
  <div className='sm-header'>projects</div>
   <Projects/>
     </div>

<section className='dev-profile'>
  <div>
    <div className='dev-title'>
      <img className="logob circle" src={circle} alt="" width={120}/>
       <div>meet</div>
      <div className='rachel'> Rachel.</div>
     <div className='r-sub-title'>  Let's connect and explore how we can build together.</div> 
      <ul className='hp-ul'>
        <li className='li-ul'> 
        <a href="https://github.com/R-LaRoi" target='blank_' id='li-link'>
        github</a>
        </li>
      <li className='li-ul'>
        <a href='https://www.linkedin.com/in/rachel-stroy-978397277/' target='blank_' id='li-link'>linkedin</a>
      
      </li>
      <li className='li-ul'>
        <a href='https://www.rachelstroy.com/' target='blank_' id='li-link'> art</a>
      </li></ul>
    </div>
    
  </div>
 <div className='dev-col-two'>
<section className='con-form'>
<form>

  <div class="row g-3">

    <div className='dev-title'>
          <small className=''> Say hi! </small>
      </div>
  <div class="col">

    <input type="text" class="form-control" placeholder="Name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Email" aria-label="email"/>
  </div>
    <div class="col">
    <textarea type="input" class="form-control" placeholder="Message" aria-label="email"/>
  </div>
<button className='con-btn'> submit</button>
</div>
</form>
</section>
    </div>

</section>
<Footer />
</div>
</>

)};