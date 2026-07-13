import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Globe, Share2, Link as LinkIcon, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Sparkles className="logo-icon" size={18} />
            <span>Aura<span className="text-gradient">Portal</span></span>
          </Link>
          <p className="footer-description">
            Experience the next generation of cloud interfaces. Secure, swift, and highly customizable dashboard modules.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="GitHub"><Globe size={18} /></a>
            <a href="#" className="social-link" aria-label="Twitter"><Share2 size={18} /></a>
            <a href="#" className="social-link" aria-label="LinkedIn"><LinkIcon size={18} /></a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-links-col">
            <h3>Product</h3>
            <Link to="/">Features</Link>
            <Link to="/">Integrations</Link>
            <Link to="/">Pricing</Link>
          </div>
          <div className="footer-links-col">
            <h3>Resources</h3>
            <Link to="/">Documentation</Link>
            <Link to="/">Guides</Link>
            <Link to="/submit-form">Support</Link>
          </div>
          <div className="footer-links-col">
            <h3>Company</h3>
            <Link to="/">About Us</Link>
            <Link to="/signup">Careers</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AuraPortal. All rights reserved.</p>
        <p className="footer-heart">
          Made with <Heart size={12} className="heart-icon" /> for the modern web.
        </p>
      </div>
    </footer>
  );
}
