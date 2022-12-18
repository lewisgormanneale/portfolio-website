import React from "react";
import NavList from "../NavList/NavList";
import { IoChevronDown } from "react-icons/io5";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-wrapper">
      <NavList />
      <header className="header">
        <div className="main-header-content">
          <div className="header-text">
            <h1>
              <span>Hi, I'm Lewis</span> 👋🏻
            </h1>
            <p>
              Full stack <span>developer</span> in training.
            </p>
            <p>
              Graduating from the <span>School of Code</span> in February 2023.
            </p>
          </div>
          <div className="avatar-container">
            <img
              src="images/memoji.jpeg"
              alt="A pixelated avatar of Lewis"
              className="avatar"
            ></img>
          </div>
        </div>
        <p className="scroll-arrow">
          <IoChevronDown />
        </p>
      </header>
    </div>
  );
}
