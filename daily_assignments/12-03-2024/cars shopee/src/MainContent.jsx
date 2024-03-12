// MainContent.js
import React from "react";

const MainContent = () => {
  return (
    <div className="main-component">
      <div id="main-content">
        <h1>More Than A Car </h1>
        <h5>A Mercedes Benz.</h5>
        <button id="learn">Learn More!</button>
        {/* onclick show desc or something else */}
        <p id="main-desc" style={{ display: "none" }}>
          Our moto: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <img id="main-img" src="assets/car-main.png" alt="mercedes car img"></img>
    </div>
  );
};

export default MainContent;
