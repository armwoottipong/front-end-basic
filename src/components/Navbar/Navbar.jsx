import React, { useState } from 'react';
import Logo from '../../assets/img/Logo.svg';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const updateToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-wrapper">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className={`nav-links ${toggle ? 'show' : ''}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Feature</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <ul className={`nav-auth ${toggle ? 'show' : ''}`}>
            <li><a className="login-btn" href="#">Login</a></li>
            <li><a className="signup-btn" href="#">Sign Up</a></li>
          </ul>
          <FaBars onClick={updateToggle} className="nav-toggle" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
