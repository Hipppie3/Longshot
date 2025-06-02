import React from 'react';
import { NavLink } from 'react-router-dom';
import vw from '../public/vw.png';
import jewelry from '../public/jewelry.png';
import color from '../public/color.png';
import './Work.css';

function Work() {
  return (
    <div className="work-page">
      <h2 className="work-title">Portfolio</h2>
      <div className="work-grid">
        <NavLink to="/image/jewelry" className="work-card">
          <img src={jewelry} alt="Jewelry Shoot" />
          <div className="work-caption">Jewelry</div>
        </NavLink>

        <NavLink to="/image/vw" className="work-card">
          <img src={vw} alt="Automobile Promo" />
          <div className="work-caption">Automobile Promo</div>
        </NavLink>

        <NavLink to="/image/color" className="work-card">
          <img src={color} alt="Sofa Scene" />
          <div className="work-caption">Sofa Scene</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Work;
