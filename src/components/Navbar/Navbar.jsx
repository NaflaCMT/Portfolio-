import React, { useState } from "react";
import "./Navbar.css";
import { LuMenuSquare } from "react-icons/lu";
import { FaWindowClose } from "react-icons/fa";
import MobileNav from "./MobileNav/MobileNav";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    console.log("hi");

    setOpenMenu(!openMenu);
  };
  console.log(openMenu);

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="../public/assets/images/logo.png" alt="" />
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Work Experience</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button class="menu-btn" onClick={toggleMenu}>
            <span style={{ fontSize: "1.5rem" }}>
              {openMenu ? <FaWindowClose /> : <LuMenuSquare />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
