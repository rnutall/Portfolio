import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../Assets/me.png";

const header = () => {
  return (
    <header>
      <div className="container.header_container">
        <h5>Hello I am </h5>
        <h1>Rodney Nutall</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contacts" className="scroll_down"></a>
      </div>
    </header>
  );
};
export default header;
