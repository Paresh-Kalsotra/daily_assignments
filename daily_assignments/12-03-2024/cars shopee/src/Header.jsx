import React from "react";

const Header = () => {
  return (
    <header>
      <h1>
        <img id="logo" src="./assets/logo.png" />
        Cars Shopee
      </h1>
      <nav className="navbar">
        <ul>
          {" "}
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">Store</a>
          </li>
          <li>
            <span className="search">
              <i className="fa-solid fa-magnifying-glass" type="button"></i>
              <input
                id="search-input"
                type="text"
                placeholder="Search Cars"
              ></input>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
