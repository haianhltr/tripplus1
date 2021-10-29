import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutUs from '../AboutUs';
import MainpageLayout_1 from '../MainpageLayout_1';


function Home() {
  return (
    <>
      <HeroSection />
      <MainpageLayout_1 />
   
      <AboutUs />
      <Footer />
      
    </>
  );
}

export default Home;