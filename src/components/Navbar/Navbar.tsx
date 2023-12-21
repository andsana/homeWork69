import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
      <div className="container-fluid">
        <span className="navbar-brand">TV Shows</span>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;