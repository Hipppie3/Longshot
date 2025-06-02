import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Longshot Media. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
