import React from 'react'
import './Home.css'
import vw from '../public/vw.png'
import jewelry from '../public/jewelry.png'
import color from '../public/color.png'
import cars from '../public/carVideo.mp4'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
  <div className='homepage'>
      {/* Section 1: Fullscreen Video */}
      <section className='video_section'>
        <video src={cars} autoPlay loop muted></video>
      </section>
    <section className="featured-projects">
  <h2>Featured Work</h2>
  <div className="project-grid">
    <div className="project-card">
      <NavLink to="/image/jewelry" className="project-link">
        <img src={jewelry} alt="Jewelry Shoot" />
        <div className="project-info">
          <h3>Jewelry Shoot</h3>
        </div>
      </NavLink>
    </div>

    <div className="project-card">
      <NavLink to="/image/vw" className="project-link">
        <img src={vw} alt="Volkswagen Promo" />
        <div className="project-info">
          <h3>Automobile Promo</h3>
        </div>
      </NavLink>
    </div>

    <div className="project-card">
          <NavLink to="/image/color" className="project-link">
      <img src={color} alt="Lifestyle Setup" className="shift-down" />
      <div className="project-info">
        <h3>Sofa Scene</h3>
      </div>
      </NavLink>
    </div>
  </div>
</section>

  </div>
  )
}

export default Home
