import React from "react";
import "./styles/about.scss";
import Skills from "./Skills";

function About() {
  return (
    <div className="container" id="about">
      <h2>About Me</h2>
      <p>
        I am a Full Stack Developer with a Bachelor's degree in Computer Science
        with knowledge of Modern Front-end and Back-end technologies.I am
        passionate about solving real-world problems in software engineering.
      </p>
      <Skills />
    </div>
  );
}

export default About;
