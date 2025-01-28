import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar_container'>
      <NavLink to='/' className='longshot'>
      LONGSHOT 
      </NavLink>
      <div className='navbar_links'>
        <ul>
          <li>
            <NavLink to='/work' className={({ isActive }) => isActive ? 'active_link' : 'inactive_link'}>
              WORK
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'active_link' : 'inactive_link'}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'active_link' : 'inactive_link'}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
