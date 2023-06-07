import "./AboutContentStyles.css";
import React from "react";
import Image1 from "../assets/image1.jpeg";
const AboutContent = () => {
  return (
    <div className="main">
      <h1>About Me</h1>
      <div className="about">
        <div className="left">
          <img src={Image1} alt="profile-img"></img>
        </div>
        <div className="right">
          <h3>I am a MERN Stack Developer</h3>
        </div>
      </div>
      <h1>Qualification</h1>
      <div className="edu">
        <div className="edu-card">
          <p>Degree: B.Tech</p>
          <p>Branch: Mechanical Engineering</p>
          <p>
            Institue: Shri Vile Parle Kelavani Mandals Institute of Technology,
            Dhule
          </p>
          <p>CGPA: 8.6 </p>
        </div>
        <div className="edu-card">
          <p>Diploma: Automobile Engineering</p>
          <p>Institue: SSVPS Polytechnic, Dhule</p>
          <p>Score: 62%</p>
        </div>
      </div>
      <h1>Skills</h1>
      <div className="skills">
        <div className="skill-card">
          <li>Python</li>
          <progress max={100} value={80}></progress>
          <li>Java</li>
          <progress max={100} value={60}></progress>
          <li>HTML and CSS</li>
          <progress max={100} value={90}></progress>
          <li>Javascript</li>
          <progress max={100} value={70}></progress>
        </div>
        <div className="skill-card">
          <li>ReactJS</li>
          <progress max={100} value={70}></progress>
          <li>NodeJS</li>
          <progress max={100} value={60}></progress>
          <li>ExpressJS</li>
          <progress max={100} value={65}></progress>
          <li>MongoDB</li>
          <progress max={100} value={75}></progress>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
