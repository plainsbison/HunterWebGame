import React from 'react';
import { FaHome, FaGamepad, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './NavIcons.css';  // Import the CSS file for the icons

const NavIcons = () => {
  return (
    <div className="nav-icons">
      <div className="nav-btn-wrapper">
        <Link to="/" className="nav-btn"> {/* Home link */}
          <FaHome size={30} color="white" />
        </Link>
        <span className="tooltip">Home</span>  {/* Tooltip for Home */}
      </div>
      
      <div className="nav-btn-wrapper">
        <Link to="/game" className="nav-btn"> {/* Game link */}
          <FaGamepad size={30} color="white" />
        </Link>
        <span className="tooltip">Game</span>  {/* Tooltip for Game */}
      </div>
      
      <div className="nav-btn-wrapper">
        <Link to="/help" className="nav-btn"> {/* Help link */}
          <FaQuestionCircle size={30} color="white" />
        </Link>
        <span className="tooltip">Help</span>  {/* Tooltip for Help */}
      </div>
    </div>
  );
};

export default NavIcons;
