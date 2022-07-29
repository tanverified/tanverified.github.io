import React from "react";
import Card from "./Card";
import "./styles/projects.scss";
import Tesla from "../Assets/teslaGIF.gif";
import Disney from "../Assets/disney.gif";
import Recipe from "../Assets/recipiGif.gif";
import Other from "../Assets/others.gif";

function Projects() {
  return (
    <div className="ProjectContainer" id="projects">
      <h2>Projects</h2>
      <div className="projectCards">
        <Card
          title="Tesla Clone"
          imgUrl={Tesla}
          description="Tesla.com clone build with React,Redux and styled components."
          demoUrl="https://tesla-clone-tanver.netlify.app/"
          gitRepo="https://github.com/tanverified/tesla-clone"
        />
        <Card
          title="Disney+ Clone"
          imgUrl={Disney}
          description="Disneyplus clone build with React,Redux and styled components."
          demoUrl="https://disneyplus-by-tanveer.netlify.app/"
          gitRepo="https://github.com/tanverified/disney-plus-clone"
        />
        <Card
          title="Recipe Website"
          imgUrl={Recipe}
          description="Recipe website build with Gatsby,React and GraphQL"
          demoUrl="https://recipe-by-tanver.netlify.app/"
          gitRepo="https://github.com/tanverified/simplyrecipes"
        />
        <Card
          title="More Projects..."
          imgUrl={Other}
          description="See other project that I have build in my coding journey.."
          demoUrl="https://www.youtube.com/channel/UC0pOVpujizKgUtV1b2IM4NA/videos"
          gitRepo="https://github.com/tanverified"
        />
      </div>
      <br />
      <br />
    </div>
  );
}

export default Projects;
