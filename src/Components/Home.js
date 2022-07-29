import React from "react";
import "./styles/home.scss";
import manOnTable from "../Assets/manOnTable.svg";

function Home() {
  return (
    <div className="home">
      <div className="left">
        <span className="title">Full Stack Developer</span>
        <div className="name_container">
          <p className="name">Hi I'm Tanveer Khan</p>
          <p className="para">
            A passionate developer, I write clean, elegant and efficient code
            and design beautifull UIs.
          </p>
        </div>
      </div>
      <div className="right">
        <img src={manOnTable} alt="avataar" />
      </div>
    </div>
  );
}

export default Home;
