import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import CoreValues from '../components/CoreValues';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Create from '../components/Create';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <CoreValues />
      <CaseStudies />
      <Testimonials />
      <Create />
    </div>
  );
};

export default HomePage;
