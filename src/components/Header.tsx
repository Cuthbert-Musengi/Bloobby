import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-6 py-3 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/logo.jpg" alt="BLOO LOUNGE Logo" className="h-12 mr-4" />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="nav-link font-semibold text-cyan-400">HOME</a>
          <a href="/about" className="nav-link font-semibold">ABOUT</a>
          <a href="/menu" className="nav-link font-semibold">MENU</a>
          <a href="/careers" className="nav-link font-semibold">CAREERS</a>
          <a href="/reservations" className="bg-transparent neon-border text-white font-semibold py-2 px-6">RESERVATIONS</a>
        </nav>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
