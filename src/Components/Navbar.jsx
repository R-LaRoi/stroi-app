import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './stylesheets/nav.css'

import initial from './assets/ologo.svg'

export default function Navbar () {
  const [navSize, setnavSize] = useState("1rem");
  const [navColor, setnavColor] = useState("transparent");
  
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("transparent") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return(

<section className='navbar' id='navbar'>
 <ul className='nav-links'  style={{
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
 </ul>
</section>
  )


}