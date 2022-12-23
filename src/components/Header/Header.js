import React, { useState } from "react";
import NavList from "../NavList/NavList";
import { IoChevronDown } from "react-icons/io5";
import "./Header.css";

export default function Header() {
  const [scrollArrowVisibility, setScrollArrowVisibility] =
    useState("scroll-arrow");

  function toggleScrollArrowVisibility() {
    if (scrollArrowVisibility === "scroll-arrow hidden") {
      setScrollArrowVisibility("scroll-arrow");
    } else {
      setScrollArrowVisibility("scroll-arrow hidden");
    }
  }

  return (
    <div className="header-wrapper">
      <NavList toggleScrollArrowVisibility={toggleScrollArrowVisibility} />
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
        <p className={scrollArrowVisibility}>
          <IoChevronDown />
        </p>
      </header>
    </div>
  );
}
