// MainContent.js
import React from "react";

const MainContent = () => {
  return (
    <div className="main-content">
      <h2>Mercedez-Benz </h2>
      <img id="product-img" src="assets/car.png"></img>
      <p>
        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <button>Learn More</button>
      <ul>
        <li>Features</li>
        <li>Features</li>
        <li>Features</li>
      </ul>
    </div>
  );
};

export default MainContent;
