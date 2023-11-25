import React {useState, useEffect} from 'react'
import './nav.css'
import logo from './assets/lgstroi.png'


export default function Navbar () {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("white");
  
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return(

<section className='navbar'>
 <ul className='nav-links'   style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s"
        }}>
<li>
  <img src={logo}/>
  </li> 
    
          <li>Project</li>
          <li>Connect </li>
 </ul>

</section>




  )


}