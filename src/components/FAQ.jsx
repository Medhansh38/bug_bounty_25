// -----BUG=2(some are hidden and some dont open up)----

import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "What is GDGC?",
    answer: "Google Developer Group on Campus are university-based community groups for students interested in Google developer technologies.",
  },
  {
    question: "Who are the leads of GDGC?",
    answer: "Google Developer Group on Campus Leads are passionate leaders at their universities...",
  },
  {
    question: "What does GDGC do?",
    answer: "GDGC help solve the problems faced by people in everyday lives through the aid of technology...",
  },
  {
    question: "What technologies does GDGC use in its projects?",
    answer: "We use a variety of tech stacks for building our software solutions. For example, the MERN stack...",
  },
  {
    question: "Who are the members of GDGC NITS?",
    answer: "GDGC members are usually sophomore and penultimate year students of the college...",
  },
  {
    question: "Who can be a part of GDGC NIT Silchar?",
    // answer: "GDGC NIT Silchar recruits its junior members from 2nd-year students of NIT Silchar...",
  },
  {
    question: "What are the perks of being in GDGC?",
    // answer: "There are a lot of perks of being in GDGC, you get to be part of a renowned global community...",
  },
];

const FAULTY_BLOCKS = [1, 3]; // These indexes will not open

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (FAULTY_BLOCKS.includes(index)) return; // simulate bug
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-main">
      <div className="faq-head">FAQ</div>
      <div className="accordion-container">
        {faqData.map((item, index) => (
          <div
            className="accordion"
            key={index}
            style={{ backgroundColor: "#838282ff" }}
          >
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              <p>{item.question}</p>
              <span className={`faq-arrow ${activeIndex === index ? 'open' : ''}`}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="23"
                  width="23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z"></path>
                </svg>
              </span>
            </div>

            <div
              className="accordion-content"
              style={{
                height: activeIndex === index ? "auto" : "0px",
                overflow: "hidden",
                transition: "height 0.3s ease",
              }}
            >
              <div className="accordion-content-inner">
                {activeIndex === index && !FAULTY_BLOCKS.includes(index) ? item.answer : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
