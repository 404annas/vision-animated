import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Portfolio from './screens/Portfolio';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/portfolio' element={<Portfolio />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
