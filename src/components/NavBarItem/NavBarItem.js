import "./NavBarItem.scss";

import React from "react";

function NavBarItem({ children, onClick, id, active, link }) {
  console.log(link);
  return (
    <div
      className={`menu-item ${id === active ? "active" : ""}`}
      onClick={onClick}
    >
      <a href={link}>{children}</a>
    </div>
  );
}

export default NavBarItem;
