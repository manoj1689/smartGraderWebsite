import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Pricing from '../components/home/Pricing';
import Partners from '../components/home/Partners';
import Testimonials from '../components/home/Testimonials';
import Subscribe from '../components/home/Subscribe';
import Footer from '../components/home/Footer';
import PersonaSection from '../components/home/PersonaSection';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <PersonaSection />
      <Pricing />
      <Partners />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default HomePage;
