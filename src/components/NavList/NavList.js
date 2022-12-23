import React, { useState } from "react";
import "./NavList.css";
import { IoMenu, IoMoon } from "react-icons/io5";

export default function NavList({ toggleScrollArrowVisibility }) {
  const [navMenuVisibility, setNavMenuVisibility] =
    useState("nav-menu-container");

  function toggleNavMenuVisibility() {
    if (navMenuVisibility === "nav-menu-container") {
      setNavMenuVisibility("nav-menu-container active");
    } else {
      setNavMenuVisibility("nav-menu-container");
    }
  }

  return (
    <nav className="navlist">
      <div className={navMenuVisibility}>
        <ul className="nav-menu">
          <li>
            <a
              href="#projects"
              className="nav-link"
              onClick={toggleNavMenuVisibility}
            >
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              className="nav-link"
              onClick={toggleNavMenuVisibility}
            >
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-link"
              onClick={toggleNavMenuVisibility}
            >
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="dark-mode-toggle toggle">
        <IoMoon />
      </div>
      <div onClick={toggleNavMenuVisibility} className="menu-toggle toggle">
        <IoMenu />
      </div>
    </nav>
  );
}
