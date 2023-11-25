import React {useState, useEffect} from 'react'
import stroy from './assets/stroy.mp4'
import logo from './assets/lgstroi.png'
import './nav.css'
import Navbar from './Navbar'


  window.onscroll = function() { 
        scrollFunction() 
    }; 
          
    function scrollFunction() { 


        if (document.body.scrollTop > 420 || 
            document.documentElement.scrollTop > 420) 
        { document.getElementById("hero-vid") 
                        .style.display = "none"; 
            // document.getElementById("logo") 
            //         .style.width = "8rem"; 
            //          document.getElementById("nav-items") 
            //         .style.backgroundColor= "transparent"; 
            //         document.getElementById("nav-items") 
            //         .style.height = "20px"; 
            //         document.getElementById('nav-items').style.color = "white"
            //         document.getElementById("a-nav").style.color = "white"; 
            //         document.getElementById("nav-ul").style.display = "inline"; 
                    
                 
        } else {
 document.getElementById("hero-vid") 
                        .style.display = "block"; 
          // document.getElementById("nav-items") 
          //           .style.height = "10%"; 
          //               document.getElementById("nav-items") 
          //           .style.backgroundColor= "white";
          // document.getElementById("logo") 
          //           .style.width = "8rem"; 
          //           document.getElementById("a-nav") 
          //           .style.color= "black"; 
          //            document.getElementById("nav-items") 
          //           .style.color = "black"; 

        }
        
    } 

export default function Nav() {

  return (
    <> 
    <Navbar />  
      <div className='nav-items' id="nav-items" >
         <video playsInline autoPlay muted loop className="hero-vid" id="hero-vid">
        <source
          src={stroy}
          type="video/mp4"
        />
      </video>
          
      </div>

     </>
  )
}
