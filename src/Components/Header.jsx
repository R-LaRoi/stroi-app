import stroy from './assets/stroy.mp4'
import './stylesheets/nav.css'
import Navbar from './Navbar'

 window.onscroll = function() { 
        scrollFunction() 
    }; 
  
    function scrollFunction() {
        if (document.body.scrollTop > 420 || 
            document.documentElement.scrollTop > 420) 
        { document.getElementById("hero-vid") 
                        .style.display = "none"; 
            document.getElementById("navbar").style.display = "inline"; 
         
        } else {
 document.getElementById("hero-vid") 
 .style.display = "block"; 

        }
        
    } 

export default function Header() {

  return (
    <>  

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
