import "./NavBarItem.scss";

import React from "react";

function NavBarItem({ children }) {
  return (
    <div className="menu-item">
      <a href="#">{children}</a>
    </div>
  );
}

export default NavBarItem;
