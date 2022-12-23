import React, { useState } from "react";
import "./NavList.css";
import { IoMenu, IoMoon } from "react-icons/io5";

export default function NavList({ toggleScrollArrowVisibility }) {
  const [navMenuVisibility, setNavMenuVisibility] = useState("nav-menu hidden");

  function toggleNavMenuVisibility() {
    if (navMenuVisibility === "nav-menu hidden") {
      toggleScrollArrowVisibility();
      setNavMenuVisibility("nav-menu active");
    } else {
      toggleScrollArrowVisibility();
      setNavMenuVisibility("nav-menu hidden");
    }
  }

  return (
    <nav className="navlist">
      <div className="nav-menu-container">
        <ul className={navMenuVisibility}>
          <li>
            <a href="#projects" className="nav-link">
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#about-me" className="nav-link">
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
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
