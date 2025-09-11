import React from 'react';
import './members.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';
const members = () => {
  return (
    <section className="team-section">
      {/* Faculty Advisor */}
      <div className="section">
        <h2>Faculty Advisor</h2>
        <div className="cards">
          <div className="card">
            <div className="visible">
              <div className="avatar">
                <img src="https://gdscnits.in/images/pantha.webp" alt="avatar" />
              </div>
              <div className="info">
                <h3 className="name">Dr. Pantha Kanti Nath</h3>
                <p className="position">Associate Professor</p>
              </div>
            </div>
            <div className="after-hover">
              <p className="domain">Computer Science & Engineering</p>
              <div className="social-media">
                <a href="#!"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#!"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead */}
      <div className="section">
        <h2>Lead</h2>
        <div className="cards">
          <div className="card">
            <div className="visible">
              <div className="avatar">
                <img src="https://res.cloudinary.com/dhry5xscm/image/upload/v1693827549/GDSC%20images/Arunaditya_-_Arunaditya_Dasgupta_gq80ww.jpg" alt="avatar" />
              </div>
              <div className="info">
                <h3 className="name">Arunaditya Dasgupta</h3>
                <p className="position">Lead</p>
              </div>
            </div>
            <div className="after-hover">
              <p className="domain">GDGC, NIT Silchar</p>
              <div className="social-media">
               <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href=""><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Members */}
      <div className="section">
        <h2>Core Members</h2>
        <div className="cards">

          {/* Repeat for each core member */}
          {[
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1693827552/GDSC%20images/Bishal_Paul_Biswas_-_Bishal_Paul_Biswas_zz8l0r.jpg",
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1693827550/GDSC%20images/aryan_-_Aryan_Hazarika_zagedy.jpg",
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1693827561/GDSC%20images/my_photo_-_ECE_025_BARNIL_SARMA_txxw6i.jpg",
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1693827550/GDSC%20images/ArunavBorthakur_-_ECE_031_ARUNAV_BORTHAKUR_krxbfs.jpg",
            "https://res.cloudinary.com/dnuhxx8aa/image/upload/f_auto,q_auto/mpduiisaapnuvvymindp",
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1693827548/GDSC%20images/Arindomsarmah.jpg_-_Arindom_flqufw.jpg",
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1693827551/GDSC%20images/ayush_shahi_-_ME_126_Ayushshahi_SHAHI_ctilns.jpg",
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1693827564/GDSC%20images/my-passport-photo_1_-_CSE_053_DIPTANGSHU_CHAKRABORTY_je8dzy.jpg",
            "https://res.cloudinary.com/dnuhxx8aa/image/upload/f_auto,q_auto/cv2qenyihqktamqy6ynz",
            "https://res.cloudinary.com/dnuhxx8aa/image/upload/f_auto,q_auto/ds8e3ch89sbdhrhvu15r",
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1693827551/GDSC%20images/bedanta_-_EI_018_Bedanta_Kataki_bu2rny.jpg",
            "https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:",
            
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1693827555/GDSC%20images/debashish_buragohain_-_EE_029_DEBASISH_BURAGOHAIN_r2apek.jpg",
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1693827558/GDSC%20images/gaurav_-_EE_027_Gaurav_Bhushan_Kumar_k2djxq.jpg",
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1693827571/GDSC%20images/saptarshi_-_CSE_072_SAPTARSHI_ADHIKARI_out4pi.jpg",
            "https://res.cloudinary.com/dhry5xscm/image/upload/v1693827558/GDSC%20images/IMG-20230801-WA0017_-_CSE_012__Gracie_rvrw39.jpg"
          ].map((url, index) => (
            <div className="card" key={index}>
              <div className="visible">
                <div className="avatar">
                  <img src={url} alt="avatar" />
                </div>
                <div className="info">
                  <h3 className="name">Name</h3>
                  <p className="position">Position</p>
                </div>
              </div>
              <div className="after-hover">
                <p className="domain">Domain</p>
                <div className="social-media">
                  <a href="https://www.reddit.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://chatgpt.com/"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default members;
