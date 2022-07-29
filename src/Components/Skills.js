import React from "react";
import "./styles/skills.scss";
import SkillCard from "./SkillCard";
import Gatsby from "../Assets/gatsby.svg";
import ReactLogo from "../Assets/reactLogo.svg";
import CSS from "../Assets/css-3.svg";
import JavaScriptL from "../Assets/javascript-1.svg";
import HTML from "../Assets/html-1.svg";
import NextJS from "../Assets/next-js.svg";
import NodeJSLogo from "../Assets/nodejs-icon.svg";
import tailwindCSS from "../Assets/tailwindcss.svg";
import reduxLogo from "../Assets/redux.svg";
import materialIcon from '../Assets/material-ui.svg'
import BootstrapL from '../Assets/bootstrap-4.svg'
import GitLogo from '../Assets/Git-Icon-1788C.png';
import firebaseLogo from '../Assets/Firebase_Logo_Logomark.svg';
import StyledLogo from '../Assets/styled.png';
import ExpressLogo from '../Assets/expressjs-icon.svg';


function Skills() {
  return (
    <div className="container" id="skills">
      <h2>Tech Stack</h2>
      <div className="skillsContainer">
        <SkillCard imgUrl={ReactLogo} name="React" />
        <SkillCard imgUrl={reduxLogo} name="Redux" />
        <SkillCard imgUrl={JavaScriptL} name="Javascript" />
        <SkillCard imgUrl={Gatsby} name="Gatsby" />
        <SkillCard imgUrl={NextJS} name="Nextjs" />
        <SkillCard imgUrl={NodeJSLogo} name="NodeJS" />
        <SkillCard imgUrl={ExpressLogo} name="ExpressJS" />
        <SkillCard imgUrl={HTML} name="HTML" />
        <SkillCard imgUrl={CSS} name="CSS" />
        <SkillCard imgUrl={BootstrapL} name="Bootstrap" />
        <SkillCard imgUrl={tailwindCSS} name="Tailwind" />
      </div>
      <h2>Tools</h2>
      <div className="skillsContainer">
          <SkillCard imgUrl={materialIcon} name='Material UI'/>
          <SkillCard imgUrl={GitLogo} name='Git'/>
          <SkillCard imgUrl={StyledLogo} name='Styled Components'/>
          <SkillCard imgUrl={firebaseLogo} name='Firebase'/>
      </div>
    </div>
  );
}

export default Skills;
