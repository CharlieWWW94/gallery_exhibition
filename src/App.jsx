import './App.css';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './Layout';
import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route }  from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>


  );
}

export default App;
