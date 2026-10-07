import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto text-center">
        <img src="/images/logo.jpg" alt="BLOO LOUNGE Logo" className="h-20 mx-auto mb-4" />
        <nav className="flex justify-center space-x-8 mb-4">
          <Link to="/" className="nav-link font-semibold">Home</Link>
          <Link to="/about" className="nav-link font-semibold">About</Link>
          <Link to="/menu" className="nav-link font-semibold">Menu</Link>
          <Link to="/reservations" className="nav-link font-semibold">Reservations</Link>
          <Link to="/careers" className="nav-link font-semibold">Careers</Link>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="nav-link font-semibold">Directions</a>
        </nav>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/50/00d1ff/instagram-new.png" alt="Instagram" className="h-6" /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/50/00d1ff/facebook-new.png" alt="Facebook" className="h-6" /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/50/00d1ff/twitterx.png" alt="X" className="h-6" /></a>
        </div>
        <p className="text-sm">&copy; 2026 BLOO LOUNGE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
