import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      &copy; {new Date().getFullYear()} Laiba Azhar. All rights reserved.
    </footer>
  );
}

export default Footer;
