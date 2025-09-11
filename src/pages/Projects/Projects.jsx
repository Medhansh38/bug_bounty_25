import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Header from '../../components/Headerr';
import Footer from '../../components/Footer';


const projectData = [
  {
    title: 'Sellr',
    status: 'Live',
    details: 'Sellr App is a platform that allows students to buy, rent, sell, or borrow accessories and materials at reasonable prices within the campus. It is a convenient way for students to exchange goods with each other.',
    statusLink: '#',
    viewLink: 'https://gdscnits.in/projects/1',
    // bug1:false link
  },
  {
    title: 'Attendo',
    status: 'Live',
    details: 'Manage your minimum attendance criteria (75%) with the help of Attendo. With a friendly UI, managing attendance is simple as it can be. Also get reminders for classes and never miss them. With Attendo, keep a check on your attendance status.',
    statusLink: '#',
    viewLink: 'https://gdscnits.in/projects/0',
        // bug2:false link

  },
  {
    title: 'Code Share',
    status: 'Under Development',
    details: 'Sending codes over messengers removes the indentations and it is also difficult to identify keywords. Well here is a chat based website which enables users to share their code, snippets and functions as well with super ease.',
    statusLink: '#',
    viewLink: '#',    // bug3:no link

  },
  {
    title: 'NITS Result Portal',
    status: 'Live',
    details: 'Announcement of results becomes a hectic process. Finding your name in the pdf and checking each subject\'s marks is not an easy task. Well here is a result portal for the Institute where the provisional results of all the semesters of a user can be accessed with a well organized visual representation.',
    statusLink: '#',
    viewLink: 'https://gdscnits.in/projects/3',
  },
  {
    title: 'Alumni Tracking',
    status: 'Under Development',
    details: 'Acts as an interaction bridge between Alumni and the present students of NIT Silchar. It is basically a multi-portal application consisting of the Admin and Alumni Section.',
    statusLink: '#',
    viewLink: 'https://gdscnits.in/projects/4',
  },
  {
    title: 'Medical Record Management',
    status: 'Under Development',
    details: 'A medical records management portal where users can upload and access their medical records.',
    statusLink: '#',
    viewLink: 'https://gdscnits.in/projects/5',
  },
  {
    title: 'Efficacy',
    status: 'Live',
    details: 'Efficacy is a club event management app that allows club coordinators to schedule their events without collisions with previously scheduled ones. Efficacy 2.0 is already in the works.',
    statusLink: '#',
    viewLink: 'https://gdscnits.in/projects/0',
  },
  {
    title: 'Grafiny',
    status: 'Under Development',
    details: 'Grafiny allows you to share/view notes, assignments, lab works and other resources published by user. The resources can be upvoted/downvoted and also bookmarked.',
    statusLink: '#',
    viewLink: 'https://gdscnits.in/projects/7',
  },
  {
    title: 'Guidance Grid',
    status: 'Under Development',
    details: 'As the name speaks for itself, it is a platform that will enable you to seek assistance and guidance from your peers and seniors. It allows you to upvote, downvote, and bookmark the content of your choice and comes with a trending article section displaying posts based on public reception.',
    statusLink: '#',
    viewLink: 'https://leetcode.com/problems/reverse-linked-list/submissions/1766717153/',
  },
  {
    title: 'Mess Management',
    status: 'Under Development',
    details: 'One-stop solution to all your queries regarding the mess, the menu, the timings, and all. It will allow the users to interact with the mess remotely. A platform to manage the functioning of the hostel mess and ensure that the management is not messy.',
    statusLink: '#',
    viewLink: 'https://www.nits.ac.in/', // bug4:false link

  },
];

const Projects = () => {
  return (
    <>
    <div className="projects-page">
       <Header />
      {/* <header className="header-placeholder"></header> */}

<a href="https://wvw-fmovies.com/" style={{ textDecoration: 'none' }}>
  <h1 className="projects-heading">OUR PROJECTS</h1>
</a>

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

       <footer className="footer-placeholder"></footer> 
    </div>
       <Footer /> 
    </>
  );
};

export default Projects;
