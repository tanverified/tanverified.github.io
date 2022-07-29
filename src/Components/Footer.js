import React from "react";
import "./styles/footer.scss";
import Social from "./Social";

function Footer() {
  return (
    <div className="footer" id="footer">
      <Social/>
      <div className="copyright">
        <span>© </span> 2022. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
