import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Menu />
      <Navbar />
    </Router>
  );
}

export default App;