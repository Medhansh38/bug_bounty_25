import React from "react";
import "./Team.css"; // Assume you'll create this CSS similarly

import Header from "../../components/Headerr";
import Footer from "../../components/Footer";

// Import images (adjust paths as per your folder structure)
import gdgcLogo from "../../assets/images/gdgclogo.jpg";
import heroImage from "../../assets/images/image1.png";
import koFiLogo from "../../assets/images/ko-fi.png";

const Team = () => {
  return (
    <>
      <Header />

      {/* Navbar is in Header so skipped here */}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            <span className="our">OUR</span>
            <br />
            <span className="members">MEMBERS</span>
          </h1>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Illustration" />
        </div>
      </section>

      {/* Filters */}
      <section className="filters">
        <div className="filter">
          <label htmlFor="sort">Sort By :</label>
          <select id="sort" name="sort">
            <option value="all">All</option>
            <option value="web">Web</option>
            <option value="flutter">Flutter</option>
            <option value="ui/ux">UI/UX</option> {/* Fixed typo here */}
            <option value="android">Android</option>
            <option value="cloud">Cloud</option>
          </select>
        </div>
        <div className="filter">
          <select id="year" name="year">
            <option value="2024-25">2024–25</option>
            <option value="2023-24">2023–24</option>
            <option value="2022-23">2022–23</option> {/* Fixed duplicate year */}
            <option value="2021-22">2021–22</option>
          </select>
        </div>
      </section>

      {/* Footer */}
     <Footer />

      {/* <Footer /> */}
    </>
  );
};

export default Team;
