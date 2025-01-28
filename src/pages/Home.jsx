import React from 'react'
import './Home.css'
import vw from '../../public/vw.png'

function Home() {
  return (
    <div className='homepage'>
      {/* Section 1: Fullscreen Video */}
      <section className='video_section'>
        <video src='' autoPlay loop muted></video>
      </section>

      {/* Section 2: Work (150vh)*/}
      <section className='work_section'>
        <div className='work_top'>FEATURED WORK</div>

        <div className='work_middle'>
          <div className='work_item'>Work 1</div>
          <div className='work_item'>Work 2</div>
          <div className='work_item'>Work 3</div>
          <div className='work_item'>Work 4</div>
        </div>

        <div className='work_bottom'>Bottom Section</div>
      </section>

      {/* Section 3: Fixed Height (240px) */}
      <section className="info_section">
        <div className="info_content">CLIENTS</div>
      </section>

      {/* Section 4: Footer (80px) */}
      <section className="footer_section">
        <div className="footer_content">Footer Section</div>
      </section>
    </div>
  )
}

export default Home
