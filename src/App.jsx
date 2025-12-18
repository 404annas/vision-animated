import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';

import HomePage from './screens/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Portfolio from './screens/Portfolio';
import FloatingCTA from './components/FloatingCTA';
import ScrollManager from './components/ScrollManager';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
      <ScrollManager />
      <Navbar />

      <FloatingCTA />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
