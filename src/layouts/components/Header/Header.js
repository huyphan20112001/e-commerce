import React, { useState } from "react";
import images from "../../../asssets/image";
import Image from "../../../components/Image/Image";
import NavBarItem from "../../../components/NavBarItem/NavBarItem";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import "./Header.scss";

function Header({ theme }) {
  const [active, setActive] = useState(1);

  const handleActive = (id) => {
    setActive(id);
  };

  const navbarItems = [
    {
      id: 1,
      name: "HOME",
      link: "#",
    },
    {
      id: 2,
      name: "SPACES",
      link: "#feature",
    },
    {
      id: 3,
      name: "PRODUCTS & SERVICES",
      link: "#product",
    },
    {
      id: 4,
      name: "SHOWROOMS",
      link: "#reason",
    },
    {
      id: 5,
      name: "COMPANY",
      link: "#project",
    },
    {
      id: 6,
      name: "MEDIA",
      link: "#media",
    },
    {
      id: 7,
      name: "CONTACT",
      link: "#footer",
    },
  ];

  return (
    <>
      <div className="background">
        <Image
          src={
            theme === "light" ? images.backgroundHeader : images.backgroundWhite
          }
          alt="bgHeader"
        />
      </div>
      <header className="header" id="header">
        <div id="logo">
          <h1>Logo</h1>
        </div>
        <NavBar>
          {navbarItems.map((navbarItem) => (
            <NavBarItem
              link={navbarItem.link}
              id={navbarItem.id}
              active={active}
              key={navbarItem.id}
              onClick={() => handleActive(navbarItem.id)}
            >
              {navbarItem.name}
            </NavBarItem>
          ))}
        </NavBar>
      </header>
      <Banner />
    </>
  );
}

export default Header;
