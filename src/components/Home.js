import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Hero from '../components/pages/Hero';
import Info from '../components/Info';
import { InfoData } from '../components/Info/InfoData';
import About from '../components/About';
import { AboutData } from '../components/About/AboutData';
// import Team from '../components/pages/Team';
// import Featured from '../components/pages/Featured';
// import Footer from '../components/pages/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Navbar toggle={toggle} />
          <Menu isOpen={isOpen} toggle={toggle} />  
          <Hero />
          <About {...AboutData} />
          <Info {...InfoData} />
        </>
    )
}

export default Home
