// import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './stylesheets/nav.css'
import initial from './assets/ologo.svg'

export default function Navbar () {
  
  // const [navSize, setnavSize] = useState("1rem");
  // const [navColor, setnavColor] = useState("transparent");
  
  // const listenScrollEvent = () => {
  //   window.scrollY > 10 ? setnavColor("transparent") : setnavColor("transparent");
  //   window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", listenScrollEvent);
  //   };
  // }, []);
  return(

<section className='' id=''>
 <div className=''>
       <ul className='nav-items'>
        <li className="nav-links">
          <NavLink to="/projects">projects</NavLink>
          </li>
        <li className="nav-links"><NavLink to='/main'> <img src={initial} className='logo'/></NavLink></li>
        <li className="nav-links"><NavLink to="/connect">connect</NavLink></li>
      </ul>
     </div>
 

 {/* <ul className='nav-links'  style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}>
  <li>
      <Link to="/projects" >projects</Link>
      </li>
    <li>
  <Link to="/main"> 
  <img src={initial} className='logo'/>
  </Link>
  </li> 
    <li><Link to="/connect">connect</Link></li> 
 </ul> */}
</section>
  )


}