import React from "react";
import "./styles/card.scss";

function Card({ title, imgUrl, description, demoUrl, gitRepo }) {
  return (
    <div className="ProjectCard">
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="btn-container">
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `${demoUrl}`;
          }}
        >
          Demo
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `${gitRepo}`;
          }}
        >
          Github
        </button>
      </div>
    </div>
  );
}

export default Card;
