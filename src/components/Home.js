import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Hero from '../components/pages/Hero';
import Info from '../components/Info';
import { InfoData } from '../components/Info/InfoData';
import About from '../components/About';
import { AboutData } from '../components/About/AboutData';
import Team from '../components/Team';
import { memberData } from '../components/Team/memberData';
import Contact from '../components/Contact';
import { ContactData } from '../components/Contact/ContactData';
import Stream from '../components/Streams';
import { StreamsData } from '../components/Streams/StreamsData';
import Featured from '../components/Featured';
import FeaturedData from '../components/Featured';
import Footer from '../components/pages/Footer';


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
          <Stream {...StreamsData} />
          <Featured {...FeaturedData} />
          <Team data={memberData} />
          <Contact {...ContactData} />
          <Footer />
        </>
    )
}

export default Home
