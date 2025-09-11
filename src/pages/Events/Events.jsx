import React from "react";
import "./Events.css";
import Header from '../../components/Headerr';
import Footer from '../../components/Footer';

import gdscLogo from "../../assets/images/gdsc_logo.jpg";
import androidLogo from "../../assets/images/androidlogo.jpeg";
import exploreLogo from "../../assets/images/explore.svg";
import flutterLogo from "../../assets/images/flutter.png";
import htmlLogo from "../../assets/images/htmllogo.png";
import reactLogo from "../../assets/images/reactjs.jpeg";

const Events = () => {
  return (
    <>
      <Header />
      {/* <header className="navbar">
        <div className="logo">
          <img src="../../assets/images/gdsc_logo.jpg" alt="GDSC Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
      </header> */}

     {/* Filter */}
      <section className="filter">
        <label htmlFor="year">Filter by year</label>
        <select id="year">
          <option value="2024" selected>2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </section>

      {/* Events Section */}
      <section className="eventss">
        {/* Event 1 */}
        <div className="event-card">
        <img src={androidLogo} alt="Android Compose Camp" />
          <p className="date">Jan 30, 2024</p>
          <h3>Android Compose Camp</h3>
          <p className="desc"></p>
        </div>

        {/* Event 2 */}
        <div className="event-card">
          <img src={exploreLogo} alt="Web Blitz" />
          <p className="date">Feb 28, 2024</p>
          <h3>Web Blitz 4.0</h3>
          <p className="desc"></p>
        </div>

        {/* Event 3 */}
        <div className="event-card center-card">
          <p className="date">Feb 28, 2024</p>
          <h3>Prototype Plenary 4.0</h3>
          <p className="desc"></p>
        </div>

        {/* Event 4 */}
        <div className="event-card">
          <img src={flutterLogo} alt="Flutter" />
          <p className="date">Mar 30, 2024</p>
          <h3>Flutter Forward Extended</h3>
          <p className="desc"></p>
        </div>

        {/* Event 5 */}
        <div className="event-card center-card">
          <p className="date">Mar 30, 2024</p>
          <h3>Switch to Backend 2.0</h3>
          <p className="desc"></p>
        </div>

        {/* Event 6 */}
        <div className="event-card">
         <a href="https://ww7.123moviesfree.net/movie/zodiac-7544/"> <img src={htmlLogo} alt="GDSC Explore" /></a>
          <p className="date">Mar 30, 2024</p>
          <h3>GDSC Explore</h3>
          <p className="desc"></p>
        </div>

        {/* Event 7 */}
        <div className="event-card">
          <img src={reactLogo} alt="Kickstart to ReactJs 3.0" />
          <p className="date">Mar 30, 2024</p>
          <h3>Kickstart to ReactJs 3.0</h3>
          <p className="desc"></p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;
