import React from 'react'
import logo from './assets/lgstroi.png'
import './nav.css'



  window.onscroll = function() { 
        scrollFunction() 
    }; 
          
    function scrollFunction() { 
        if (document.body.scrollTop > 90 || 
            document.documentElement.scrollTop > 90) 
        { 
            document.getElementById("nav-items") 
                        .style.height = "10%"; 
            document.getElementById("logo") 
                    .style.width = "5rem"; 
                     document.getElementById("nav-items") 
                    .style.backgroundColor= "transparent"; 
                    document.getElementById('nav-items').style.color = "white"
                    document.getElementById("a-nav").style.color = "white"; 
                    
                 
        } else {
 
          document.getElementById("nav-items") 
                    .style.height = "100%"; 
                        document.getElementById("nav-items") 
                    .style.backgroundColor= "white";
          document.getElementById("logo") 
                    .style.width = "35rem"; 
                    document.getElementById("a-nav") 
                    .style.color= "black"; 
                     document.getElementById("nav-items") 
                    .style.color = "black"; 
        }
        
    } 



export default function Nav() {


  return (
    <>
 
      <div className='nav-items' id="nav-items" >
            <div>
          <img className='logo' src={logo} alt="" id="logo"/>
   </div>
      <div className='sb-txt' id="sb-txt"> 
          create. design. develop.
</div>
          <div className='nav-container'> 
          <ul className='nav-ul'>

<li>projects</li>
<li>connect</li>
</ul>
     

       </div>
      </div>
    
     </>
  )
}
