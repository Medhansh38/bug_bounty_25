
import React from 'react'
// import Header from '../../components/Header';
import Header from '../../components/Headerr';
import Footer from '../../components/Footer';
import FAQ from '../../components/FAQ';
import './Home.css';
import DomainsSimple from '../../components/DomainsSimple';

const home = () => {
  return (

    <div className="app-container">
      <Header />
      <div className="home-hero">
        <div className="cover"></div>

        <a className="scroll-gif">
          <img src="" alt="" className="scroll-img" />
          <div className="circle"></div>
        </a>

        <div className="text" >
          <div>
          <div className="title gdsc">
            <span className="gdsc-title-blue">G</span>
            <span className="gdsc-title-yellow">D</span>
            <span className="gdsc-title-red">G</span>
            <span className="gdsc-title-green">C</span>
            {/* <img src="https://example.com/your-image.jpg"alt="GDGC" style={{ width: 400, height: 500, marginLeft: '1rem' }} /> */}
          </div>
          <div className="title nits">NIT Silchar</div>

          <div className="twl">
            <div className="tw">Together we learn</div>
            <div className="learn">{/* bug-Learn will not show as it hides */}
              <span data-testid="react-typed">
                <span>Learn</span>
                <span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span>
              </span>
            </div>
          </div>
          </div>
          
        </div>

        <div className="logo">
          <div className="logo-inner">
            <div className="canvas-wrapper">
              <canvas
                style={{
                  display: 'block',
                  width: '622.5px',
                  height: '844.344px',
                  touchAction: 'auto'
                }}
                data-engine="three.js r161"
                width="1245"
                height="1688"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
      <DomainsSimple />
      <FAQ />
      <Footer />
    </div>
  )
}

export default home