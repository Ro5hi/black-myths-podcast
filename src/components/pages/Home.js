import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
// import Hero from './Hero';
// import Info from './Info';
// import About from './About';
// import Team from './Team';
// import Featured from './Featured';
// import Footer from './Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Navbar toggle={toggle} />
          <Menu isOpen={isOpen} toggle={toggle} />  
        </>
    )
}

export default Home
