import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
      <h1>Art Gallery  <i className="fa-brands fa-react"></i> </h1>
      <div className="navItems">
        <Link to ="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  </>
  )
}
