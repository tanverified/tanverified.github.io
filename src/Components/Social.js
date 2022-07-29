import React from "react";
import "./styles/social.scss";
import { ImGithub } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

function Social() {
  return (
    <section className="social">
      <div className="social-icons">
        <a
          href="https://github.com/tanverified"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/tanveer-k-7a7538201/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://twitter.com/7anveer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
      </div>
    </section>
  );
}

export default Social;
