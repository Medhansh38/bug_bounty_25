import React from 'react';
import './Header_footer.css';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faTwitter,
  faRedditAlien,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-t-l-text">
            <h2>Questions?</h2>
            <ul>Contact us through our social media accounts.</ul>
          </div>
        </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/company/edgenits/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-links"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://www.facebook.com/edgenits"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-links"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
          style={{ color: 'white' }}
            href="https://www.instagram.com/edge_nits/"
            target="_blank"
            rel="noopener noreferrer"
            className=""//bug 2-instagram is hidden
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://x.com/edgenits"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-links"
            title="YOUtube"//bug 5- titile different
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.reddit.com/r/gdscnits/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-links"
            title=""//bug 4- no titile
            style={{ color: 'white' }} //bug3-"invisible icon but on hiver visible"
          >
            <FontAwesomeIcon icon={faRedditAlien} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="logo_text">
          <img src={logo} alt="GDGC NITS" className="footer-logo" />
          <ul>Google Developer Group on Campus, NIT Silchar</ul>
        </p>
        <p className="footer-end-right">
          <ul>Google Developer Group on Campus, NITS. All Rights Reserved</ul>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
