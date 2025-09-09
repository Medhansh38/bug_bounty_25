// Headerr.jsx - Fixed version
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Header_footer.css';

const links = [
  { name: 'Home', path: '/home', class: 'blog' },
  { name: 'Projects', path: '/projects', class: 'projects' },
  { name: 'Events', path: '/events', class: 'events' },
  { name: 'Team', path: '/team', class: 'team' },
];

const Headerr = () => {
  return (
    <div className="header">
      <div>
        <a href="https://www.nits.ac.in/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" className="gdgcname" />
        </a>
      </div>

      <ul className="pages">
        {links.map((link, index) => (
          <li key={index} className={`nav-button ${link.class}`}>
            <Link className="nav-link" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Headerr;