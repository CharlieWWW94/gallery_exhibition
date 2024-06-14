import { Component } from 'react';
import './Navbar.css';

class Navbar extends Component{
  render(){
    return (
      <nav className="Navbar">
        <h1>Navbar  <i className="fa-brands fa-react"></i> </h1>
        <div className="NavItems">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    );
  }
}

export default Navbar
