import React from "react";
import images from "../../../asssets/image";
import Image from "../../../components/Image/Image";
import NavBarItem from "../../../components/NavBarItem/NavBarItem";
import NavBar from "../NavBar/NavBar";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="background">
          <Image src={images.backgroundHeader} />
        </div>
      </div>
      <div className="container">
        <header className="header" id="header">
          <div id="logo">
            <Image src={images.logo} alt="Logo" />
          </div>
          <NavBar>
            <NavBarItem>HOME</NavBarItem>
            <NavBarItem>SPACES</NavBarItem>
            <NavBarItem>PRODUCTS & SERVICES</NavBarItem>
            <NavBarItem>SHOWROOMS</NavBarItem>
            <NavBarItem>COMPANY</NavBarItem>
            <NavBarItem>MEDIA</NavBarItem>
            <NavBarItem>CONTACT</NavBarItem>
          </NavBar>
        </header>
      </div>
    </>
  );
}

export default Header;
