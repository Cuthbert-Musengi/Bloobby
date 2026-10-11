import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Careers from './pages/Careers';
import Reservations from './pages/Reservations';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Analytics />
    </Router>
  );
};

export default App;
