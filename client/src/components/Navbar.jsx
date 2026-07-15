import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <div className="logo-icon-wrapper">
            <Sparkles className="logo-icon" size={20} />
          </div>
          <span>Aura<span className="text-gradient">Portal</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Overview
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Log In
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Sgin Up
          </NavLink>
          <NavLink to="/submit-form" className="btn btn-primary nav-cta">
            <span>Get Started</span>
            <ArrowRight size={16} />
          </NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button className="nav-mobile-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="nav-mobile-menu glass-panel animate-fade-in">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}
            onClick={() => setIsOpen(false)}
          >
            Overview
          </NavLink>
          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}
            onClick={() => setIsOpen(false)}
          >
            Log In
          </NavLink>
          <NavLink 
            to="/signup" 
            className={({ isActive }) => isActive ? 'nav-mobile-link active' : 'nav-mobile-link'}
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </NavLink>
          <NavLink 
            to="/submit-form" 
            className="btn btn-primary nav-mobile-cta"
            onClick={() => setIsOpen(false)}
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </NavLink>
        </div>
      )}
    </nav>
  );
}
