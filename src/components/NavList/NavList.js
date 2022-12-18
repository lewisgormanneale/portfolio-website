import React from "react";
import "./NavList.css";
import { IoMenu, IoMoon } from "react-icons/io5";

export default function NavList() {
  return (
    <nav className="navlist">
      <div className="dark-mode-toggle toggle">
        <IoMoon />
      </div>
      <div className="menu-toggle toggle">
        <IoMenu />
      </div>
    </nav>
  );
}
