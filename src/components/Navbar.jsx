import React, {useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const [menu, setMenu] = useState(true);
  const location = useLocation();
 const isBlackBackground = location.pathname === '/work' || location.pathname.startsWith('/image/') || location.pathname === '/contact';

  const handleMenuToggle = () => {
    setMenu((prevClick) => !prevClick)
    console.log(menu)
  }
  return (
    <div className={`navbar_container ${isBlackBackground ? 'black-bg' : ''}`}>
      <NavLink to='/' className='longshot'>
      LONGSHOT 
      </NavLink>

     <div className={`navbar_links ${menu ? '' : 'open'}`}>
        <ul>
          <li>
            <NavLink to='/work'  onClick={() => setMenu(true)}
  className={({ isActive }) => isActive ? 'active_link' : 'inactive_link'}>
              WORK
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' c onClick={() => setMenu(true)}
  className={({ isActive }) => isActive ? 'active_link' : 'inactive_link'}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'  onClick={() => setMenu(true)}
  className={({ isActive }) => isActive ? 'active_link' : 'inactive_link'}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>

              <button onClick={handleMenuToggle} className={menu ? "menuOpen" : "menuClose"}><FontAwesomeIcon icon={faBars} size="2x" color="black" />
          </button>
    </div>
  )
}

export default Navbar
