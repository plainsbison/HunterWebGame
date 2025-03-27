import React from 'react';
import './Footer.css';  // Link to the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} HUNTER SIMULATOR.  All rights reserved.</p>
    </footer>
  );
};

export default Footer;
