import React from 'react'
import logo from './lgstroi'

export default function Nav() {
  return (
    <>
      <div>
        <img src={logo} alt="" />
       <ul className='nav-items'>
        <li>
          projects
        </li>
        <li>connect</li>
       </ul>
      </div>
    </>
  )
}
