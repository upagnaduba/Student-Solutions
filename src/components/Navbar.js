import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item"><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/course-recommendation" className="nav-link" activeClassName="active">Course Recommendation</NavLink></li>
        <li className="nav-item"><NavLink to="/consistency-development" className="nav-link" activeClassName="active">Consistency Development</NavLink></li>
        <li className="nav-item"><NavLink to="/coding-practice" className="nav-link" activeClassName="active">Coding Practice</NavLink></li>
        <li className="nav-item"><NavLink to="/book-sharing" className="nav-link" activeClassName="active">Book Sharing</NavLink></li>
        <li className="nav-item"><NavLink to="/doubt-clearance" className="nav-link" activeClassName="active">Doubt Clearance</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
