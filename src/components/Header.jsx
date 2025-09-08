import React from 'react';
import logo from '../assets/images/logo.png';
import './Header_footer.css'; 

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="Logo" className="gdgcname" />
      </div>
      <ul className="pages">
        <li className="nav-button projects">
          <a className="nav-link" href="/projects">Projects</a>
        </li>
        <li className="nav-button events">
          <a className="nav-link" href="/events">Events</a>
        </li>
        <li className="nav-button team">
          <a className="nav-link" href="/team">Team</a>
        </li>
        <li className="nav-button blog">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
