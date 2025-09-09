//------BUG=5------

import React from 'react';
import './Header_footer.css';
import gdgcLogo from '../assets/images/logo.png';
import koFiLogo from '../assets/images/ko-fi.png';
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
    // <footer className="footer-main">
    //   <div className="footer-top">
    //     <div className="footer-top-left">
    //       <div className="footer-t-l-text">
    //         <h2>Questions?</h2>
    //         <ul>Contact us through our social media accounts.</ul>
    //       </div>
    //     </div>
    //     <div className="footer-links">
          // <a
          //   href="https://www.linkedin.com/company/edgenits/"
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className="footer-social-links"
          //   title="LinkedIn"
          // >
          //   <FontAwesomeIcon icon={faLinkedinIn} />
          // </a>
          // <a
          //   href="https://www.facebook.com/edgenits"
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className="footer-social-links"
          //   title="Facebook"
          // >
          //   <FontAwesomeIcon icon={faFacebookF} />
          // </a>
          // <a
          // style={{ color: 'white' }}
          //   href="https://www.instagram.com/edge_nits/"
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className=""//bug 2-instagram is hidden
          //   title="Instagram"
          // >
          //   <FontAwesomeIcon icon={faInstagram} />
          // </a>
          // <a
          //   href="https://x.com/edgenits"
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className="footer-social-links"
          //   title="YOUtube"//bug 5- titile different
          // >
          //   <FontAwesomeIcon icon={faTwitter} />
          // </a>
          // <a
          //   href="https://www.reddit.com/r/gdscnits/"
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className="footer-social-links"
          //   title=""//bug 4- no titile
          //   style={{ color: 'white' }} //bug3-"invisible icon but on hiver visible"
          // >
          //   <FontAwesomeIcon icon={faRedditAlien} />
          // </a>
    //     </div>
    //   </div>
    //   <div className="footer-bottom">
    //     <p className="logo_text">
    //       <img src={logo} alt="GDGC NITS" className="footer-logo" />
    //       <ul>Google Developer Group on Campus, NIT Silchar</ul>
    //     </p>
    //     <p className="footer-end-right">
    //       <ul>Google Developer Group on Campus, NITS. All Rights Reserved</ul>
    //     </p>
    //   </div>
    // </footer>
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2>Questions?</h2>
          <p>Contact us through our social media accounts.</p>
          <div className="social-icons">
                        <a
            href="https://x.com/gdgcnits"///bug6-false link
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-links"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://www.facebook.com/share/1Dd1S5jLUp/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-links"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
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
          <p className="email">
            or e-mail us at{" "}
            <a href="mailto:gdsc@nits.ac.in">gdsc@nits.ac.in</a> {/* Fixed email */}
          </p>
        </div>

        <div className="footer-right">
          <div className="join-box">
            <a
              href="https://gdg.community.dev/gdg-on-campus-national-institute-of-technology-silchar-india/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={koFiLogo} alt="Ko-fi" />
            </a>
            <a href="https://ko-fi.com/gdscnits" target="_blank" rel="noopener noreferrer">
              <button className="join-btn">Join our chapter</button>
            </a>
            <p>to stay updated with our events</p>
          </div>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h3>About</h3>
          <ul>
            <li>Vision</li>
            <li>Types of Events</li>
            <li>Google Technologies</li>
          </ul>
        </div>
        <div>
          <h3>Events</h3>
          <ul>
            <li>Upcoming Events</li>
            <li>Previous Events</li>
          </ul>
        </div>
        <div>
          <h3>Projects</h3>
          <ul>
            <li>Attendo</li>
            <li>Sellr</li>
            <li>Efficacy</li>
          </ul>
        </div>
        <div>
          <h3>Team</h3>
          <ul>
            <li>Core Members</li>
            <li>Members</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <img src={gdgcLogo} alt="Logo" />
        <p>Google Developer Group on Campus, NIT Silchar</p>
        <p>Google Developer Group on Campus, NITS. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
