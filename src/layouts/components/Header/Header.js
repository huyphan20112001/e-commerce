import React from "react";
import images from "../../../asssets/image";
import Image from "../../../components/Image/Image";
import NavBarItem from "../../../components/NavBarItem/NavBarItem";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import "./Header.scss";

function Header() {
  return (
    <>
      <input id="switch" type="checkbox" />
      <label htmlFor="switch">
        <div className="ball"></div>
      </label>
      {/* <div className="dark-mode active">
          
        </div>
        <div className="light-mode">
          
        </div> */}
      <div className="background">
        <Image src={images.backgroundHeader} alt="bgHeader" />
      </div>
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
      <Banner />
    </>
  );
}

export default Header;
