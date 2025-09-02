import React from 'react';
import Hero from '../components/Hero';
import HeroAno from '../components/HeroAno';
import AboutUs from '../components/AboutUs';
import CoreValues from '../components/CoreValues';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Create from '../components/Create';

const HomePage = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Hero />
      </div>
      <div className="block lg:hidden">
        <HeroAno />
      </div>

      <AboutUs />
      <CoreValues />
      <CaseStudies />
      <Testimonials />
      <Create />
    </div>
  );
};

export default HomePage;
