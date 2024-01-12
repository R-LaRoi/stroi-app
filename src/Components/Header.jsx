import stroy from './assets/stroy.mp4'
import stmobile from './assets/mobilehero.mp4'
import './stylesheets/nav.css'
import Navbar from './Navbar'

//  window.onscroll = function() { 
//         scrollFunction() 
//     }; 
  
//     function scrollFunction() {
//         if (document.body.scrollTop > 400 || 
//             document.documentElement.scrollTop > 410) 
//         { document.getElementById("nav-items") 
//                         .style.display = "none"; 
//             document.getElementById("showNav").style.display = "block"; 
         
//         } else {
//  document.getElementById("nav-items").style.display = "block"; 
//   document.getElementById("showNav").style.display = "none"; 

//         }
        
//     } 

export default function Header() {

  return (
    <>  
      <div className='nav-items' id="nav-items" >
         <video playsInline autoPlay muted loop className='atelier-vid' id='dsk-vid'>
        <source
          src={stroy}
          type="video/mp4"
        />
      </video>


<video playsInline autoPlay muted loop className ='mobile-vid' id="at-vid">
        <source
          src={stmobile}
          type="video/mp4"
        />
      </video>
        </div>
                    <div className='showNav' id="showNav">
<Navbar />
</div>
    

     </>
  )
}
