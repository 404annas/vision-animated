import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';

import HomePage from './screens/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Portfolio from './screens/Portfolio';

function App() {

  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // speed of the scroll (1.2 is standard)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing function
      smooth: true,
    });

    // 2. Create the scroll loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // 3. Start the loop
    requestAnimationFrame(raf);

    // 4. Cleanup on unmount (optional for root component, but good practice)
    return () => {
      // lenis.destroy(); // Uncomment if you ever unmount the App component
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;