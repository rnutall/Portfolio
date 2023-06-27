import React, { useState } from "react";
import weatherz from  '../../../assets/weatherz.png'
import Quickdecks from '../../../assets/quickdecks.png'
import BabyNameapp from '../../../assets/babyNameapp.png'
import "./portfolio.css";

export default function PortfolioContainer() {
  return (
    <div className="projectContainer">
      <div className="card">
        <div>
          <img className="Project-1 portfolioImg" src={weatherz} alt=""/>
        </div>
        <div className="buttonContainer">
          <button type="button"><a href="https://github.com/rnutall/Weatherz">Weatherz</a></button>
          <button type="button"><a href=" https://rnutall.github.io/Weatherz/">Deployed Site</a></button>
        </div>
      </div>

      <div className="card">
        <div>
          <img className="project-2 portfolioImg" src={BabyNameapp} alt=""/>
        </div>
        <div className="buttonContainer">
          <button type="button"><a href="https://github.com/xybai0103/babyNameApp">BabyNameApp</a></button>
          <button type="button"><a href="https://xybai0103.github.io/babyNameApp/">deployed site</a></button>
        </div>
      </div>

      <div className="card">
        <div>
          <img className="project-3 portfolioImg" src='https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg'  alt=""/>
        </div>
        <div className="buttonContainer">
          <button type="button"><a href="https://github.com/rnutall/Book_Search_Engine-MERN">Book Search Engine MERN</a></button>
          <button type="button"><a href="#">deployed site</a></button>
        </div>
      </div>

      <div className="card">
        <div>
          <img className="project-4 portfolioImg" src='https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg'  alt=""/>
        </div>
        <div className="buttonContainer">
          <button type="button"><a href="https://github.com/rnutall/back-end_E-Commerce">back-end_E-Commerce</a></button>
          <button type="button"><a href="#">backend work</a></button>
        </div>
      </div>

      <div className="card">
        <div>
          <img className="project-5 portfolioImg" src= {Quickdecks} alt=""/>;
        <div className="buttonContainer">
          <button type="button"><a href="https://github.com/stephen-castillo/Project2">Quickdecks</a></button>
          <button type="button"><a href="https://quickdecks.herokuapp.com/">deployed site</a></button>
        </div>
      </div>

    </div>
      <div className="card">
        <div>
          <img className="project-6 portfolioImg" src='https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg'  alt=""/>
        </div>
        <div className="buttonContainer">
          <button type="button"><a href="https://github.com/rnutall/Security-Lock">Security-lock</a></button>
          <button type="button"><a href="https://rnutall.github.io/Security-Lock/">deployed site</a></button>
        </div>
      </div>
    </div>
  );
};
