import React from "react";
import Navigation from "../Navigation/Navigation";
import NavLoginRegister from "../NavLoginRegister/NavLoginRegister";
import Logo from "../Logo/Logo";
import "./header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header">
        <Logo />
        <Navigation />
        <NavLoginRegister />
      </div>
    </header>
  );
};

export default Header;
