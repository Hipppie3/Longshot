import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const location = useLocation();
    const isBlackBackground = location.pathname === '/work';
  
  return (
    <div className={`navbar_container ${isBlackBackground ? 'black-bg' : ''}`}>
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
