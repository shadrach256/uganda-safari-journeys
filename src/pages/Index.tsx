
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Safaris from '@/components/Safaris';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { initScrollReveal } from '@/utils/scrollReveal';

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animations
    initScrollReveal();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Safaris />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
