import React from 'react';
import './DomainsSimple.css';
import gdgclogo from '../assets/images/logo.png';
import uiLogo from '../assets/images/ui.png';
import flutterLogo from '../assets/images/cloud.png';
import cloudLogo from '../assets/images/web.png';
import webLogo from '../assets/images/FL.png';
import andLogo from '../assets/images/6.PNG';
const domains = [
  {
    key: 'gdsc',
    logo: gdgclogo,
    title: 'Google Developer Group on Campus, NIT SILCHAR',
    paragraphs: [
      "Google Developer Group on Campus, NIT Silchar is one of the global part of Google Developer Group on Campus. Our GDGC focuses on solving real-life problems in and around our society by developing meaningful products. Solving such problems brings opportunities for the budding developer communities to showcase their talents and, improve and gain new skillsets.",
      "GDGC NITS is not bounded to NITS itself. Our main aim is to empower developers around North-East India and also to have a national and international presence. There are Web Developers, Android Developers, and Designers who make up our GDGC.",
      "We organize workshops and competitions to further spread the developer environment in general to the aspiring developers around us. So let's DESIGN, DEVELOP and DEPLOY the best ideas for the betterment of our society."
    ]
  },
  {
    key: 'ui-ux',
    logo:uiLogo,

    title: 'UI/UX Domain',
    paragraphs: [
      "Today's user's query is if they like the interface of the product or not. Is it smooth enough? Does it have a good and user friendly interface? UI/UX designers are responsible to answer the queries who are committed to improving the user experience.",
      "While UI focuses on the visual components, interaction elements, colour schemes, typography, photographs, and other aspects that come together to provide an appealing visual description. To promote user-friendliness and ease of use.",
      "UX design, on the other hand, concentrates on the emotions of the user as they engage with the components, starting from landing till the end action of the user. The GDGC Nit Silchar looks forward to exposing new aspirants to the UI/UX area and training them to develop revolutionary innovation and creativity to satisfy the expectations of the expanding design-centric business.",
      "Prototype Planary Workshops are yearly held by GDGC NITS to get people started on UI/UX designing and construct projects for practical learning."
    ]
  },
  {
    key: 'flutter',
    logo: flutterLogo,

    title: 'Flutter Domain',
    paragraphs: [
      "The Flutter Domain of GDGC NIT Silchar caters to all Flutter enthusiasts. Flutter is an open-source UI software development kit created by Google.",
      "The Flutter domain has actively produced mobile applications(both Android and IOS) using Flutter. It has released 'Efficacy,' a club event management app to help users manage and schedule their timetables. The Flutter team has already started working on 'Efficacy 2.0'.",
      "To help acquaint future developers with Flutter, the team has organized the 'Flutter Festival, a week-long event having workshops for each participant."
    ]
  },
  {
    key: 'cloud',
    logo: cloudLogo,

    title: 'Cloud Domain',
    paragraphs: [
      "Cloud mainly focuses on the training and of developers to grow accustomed to the ever increasing dominance and benefits that the advent of cloud technology has brought to the table and ensure applications reach their users by managing their deployment on platforms that power the products of companies like Google, Amazon, Microsoft, Oracle, etc.",
      "DevOps on the other hand makes your life simpler as a team member. It allows you to write code alongside your teammates, as well as be confident that the application remains safe, reliable and scalable according to demand and thus the developers can churn out features one after the another with incredible velocity without worrying about the conventional problems that arise in teams of a considerable size.",
      "DevOps is something that no software development team of more than 1 member can live without."
    ]
  },
  {
    key: 'web',
    logo:webLogo,

    title: 'Web Domain',
    paragraphs: [
      "The Web Domain of GDGC NIT Silchar aims to solve real-life problems with an enriched web experience with the help of our Web Community.",
      "Not only do we introduce unique and innovative projects, but we also conduct rigorous hands-on workshops and sessions to enhance the level of the dev community.",
      "The main advantage the Web brings is the accessibility of the content across gadgets of different specifications and screen sizes.",
      "Web Dev consists of two parts namely Frontend and Backend that enhance both, the creative and the logical thinking within the developer.",
      "Being a part of the Web Domain at GDGC NIT Silchar will open additional paths for you to contribute towards the website for annual events."
    ]
  },
  {
    key: 'android',
    logo: andLogo,

    title: 'Android Domain',
    paragraphs: [
      "The Android domain of GDGC NIT Silchar is tasked with upskilling the android developers' community.",
      "We conduct workshops, boot camps and many more along with innovative solutions and projects for catering to the needs of solving everyday problems society faces.",
      "As mobile and handheld devices make up a considerable percentage of the gadgets most people use, it is essential for most ideas and solutions to be compatible and accessible through mobiles and handheld devices which are taken care of while executing our project ideas in GDGC NIT Silchar."
    ]
  }
];

const DomainsSimple = () => {
return (
  <div className="domains-simple-container">
    <div className="domains-simple-left">
      {domains.map(({ key, title, paragraphs, logo }) => (
        <section key={key} className="domain-section">
          <h2>
            <img src={logo}  className="domain-logo" />
            {title}
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      ))}
    </div>

    <div className="domains-simple-right">
     <a href="https://youtu.be/jP9IIxb8xTA?si=xfanvXyH8v_vCfi-" target="_blank" rel="noopener noreferrer">
  <img
    src="https://hadibuttt.github.io/GDSC-Portfolio-Site/img/main.png"
    alt="All Domains"
    style={{ width: '500px', height: '400px', objectFit: 'contain' }}
  />
</a>

    </div>
  </div>
);
}

export default DomainsSimple;
