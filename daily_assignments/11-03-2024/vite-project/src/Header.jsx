// Header.js
import React from "react";

const Header = () => {
  return (
    <header>
      <h1>
        <img id="logo" src="./assets/logo.jpg" />
        Cars Shopee
      </h1>
      <nav class="navbar">
        <ul>
          <li>
            <a href="">Search</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
