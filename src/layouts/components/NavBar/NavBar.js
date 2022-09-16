import React from "react";
import "./NavBar.scss";

function NavBar({ children }) {
  return (
    <div id="menu" className="menu">
      <div className="menu-list">{children}</div>
    </div>
  );
}

export default NavBar;
