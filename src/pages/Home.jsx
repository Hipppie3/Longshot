import React from 'react'
import './Home.css'
import vw from '../public/vw.png'
import jewelry from '../public/jewelry.png'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
  <div className='homepage'>
      {/* Section 1: Fullscreen Video */}
      <section className='video_section'>
        <video src='' autoPlay loop muted></video>
      </section>
    <div className="image-container">
      <NavLink to='/image/vw'>
      <div className="image-caption">Volkswagon Vehicle</div>
      <img src={vw} alt="vw" />
      </NavLink>
    </div>
    <div className="image-container2">
      <NavLink to='/image/jewelry'>
      <div className="image-caption">Jewelry</div>
      <img src={jewelry} alt="Jewelry"/>
      </NavLink>
    </div>
    <div className="image-container">
      <div className="image-caption">Volkswagon Vehicle</div>
      <img src={vw} alt="Martha Stewart - Mercedes Benz" />
    </div>
  </div>
  )
}

export default Home
