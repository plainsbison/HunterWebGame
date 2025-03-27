import React from 'react';
import './Header.css';
import NavIcons from './NavIcons';  // Import NavIcons component

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Hunter Simulator</h1>
      <NavIcons />  {/* Add the NavIcons component here */}
    </header>
  );
};

export default Header;
