import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './stylesheets/nav.css'
// import initial from './assets/ologo.svg'
import logo from './assets/logoblanco.svg'


export default function Navbar () {

    return(

<section>
  
  <div className='nav-container'>
{/* <img className="logo" src={logo} alt="" width={100} />  */}
<div className="btn-group">
  <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
<img className="logo" src={logo} alt="" width={120} /> 
<div className="dropdown-toggle"></div>
  </button>
  <ul className="dropdown-menu">
    <li>< NavLink to="/projects" className="dropdown-item" >Projects</NavLink></li>
    <li><NavLink to="/connect" className="dropdown-item" >Connect</NavLink></li>
     <li><NavLink to="/main" className="dropdown-item" >Main</NavLink></li>
  </ul>
</div>
</div>



</section>
  )

}

