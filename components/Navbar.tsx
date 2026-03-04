import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Links */}
        <div className="navbar-links">
          <a href="#" className="navbar-link">Home</a>
          <a href="#" className="navbar-link">Order</a>
          <a href="#" className="navbar-link">Contact Us</a>
        </div>

        {/* Center Logo */}
        <div className="navbar-logo">
          Logo
        </div>

        {/* Right Icons */}
        <div className="navbar-right">
          <div className="cart-icon-wrapper">
            <ShoppingBag />
            <span className="cart-badge"></span>
          </div>
          
          <button 
            onClick={onMenuClick}
            className="menu-button"
          >
            <span>Menu</span>
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;