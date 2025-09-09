import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Header from '../../components/Headerr';
import Footer from '../../components/Footer';


const projectData = [
  {
    title: 'AI Based Chai Detector',
    status: 'Live',
    details: 'Detects masala chai vs cutting chai using ML. Used steam density & cup color.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Drone Delivery for Momos',
    status: 'Under Development',
    details: 'Automated drone delivery system for late-night momos at NIT Silchar.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Laundry Reminder Bot',
    status: 'Live',
    details: 'A Telegram bot that reminds you when laundry is done. Screams when ignored.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Campus Gossip Analyzer',
    status: 'Under Development',
    details: 'NLP-powered gossip detector that rates gossip truthfulness and sources.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Mess Menu Predictor',
    status: 'Live',
    details: 'Predicts daily mess quality using chef mood and lunar calendar.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'WiFi Rage Controller',
    status: 'Under Development',
    details: 'Cuts off your PC when WiFi drops to save you from rage-quitting.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Sleep Detector for Lectures',
    status: 'Live',
    details: 'Keeps students awake in class using vibration-based alerts on drowsiness.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'College Fest Tracker',
    status: 'Under Development',
    details: 'Tracks events, lineups, and food stalls of every college fest around you.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Fake Notes Identifier',
    status: 'Live',
    details: 'Scans your notes and finds the ones copied from seniors or ChatGPT.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Auto Proxy VPN',
    status: 'Live',
    details: 'Instant VPN switcher for unstable exam-time network drops.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Canteen Line Optimizer',
    status: 'Under Development',
    details: 'Finds the best time to visit the canteen using crowd and hunger analytics.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Friend Availability Radar',
    status: 'Live',
    details: 'Shows when friends are free based on calendar + vibes.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Assignment Auto-Excuse Generator',
    status: 'Under Development',
    details: 'AI that emails your prof with perfect excuses on deadlines.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Group Project Shamer',
    status: 'Live',
    details: 'Analyzes contribution and exposes freeloaders in the group.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Digital Attendance Faker',
    status: 'Under Development',
    details: 'Fakes blinking and nodding on Meet when you’re asleep.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Keyboard Heatmap Visualizer',
    status: 'Live',
    details: 'Analyzes key presses; reveals your dependency on Ctrl+C.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Fan Speed API',
    status: 'Live',
    details: 'Control hostel fan speed using API calls and smart plugs.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Anti-Stress Screamer App',
    status: 'Under Development',
    details: 'Convert your stress screams into relaxing whale sounds.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Zoom Background Faker',
    status: 'Live',
    details: 'Changes background to "studious mode" while you nap.',
    statusLink: '#',
    viewLink: '#',
  },
  {
    title: 'Chair-Occupancy Detector',
    status: 'Under Development',
    details: 'Finds empty library chairs via pressure sensors and app.',
    statusLink: '#',
    viewLink: '#',
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
       <Header />
      <header className="header-placeholder"></header>

      <h1 className="projects-heading">OUR PROJECTS</h1>

      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h2>{proj.title}</h2>
              <a href={proj.statusLink} className={`status ${proj.status === 'Live' ? 'live' : 'dev'}`}>
                {proj.status}
              </a>
            </div>
            <p className="project-details">{proj.details}</p>
            <a href={proj.viewLink} className="view-button">
              View Details
            </a>
          </div>
        ))}
      </div>

       <Footer />
      <footer className="footer-placeholder"></footer>
    </div>
  );
};

export default Projects;
