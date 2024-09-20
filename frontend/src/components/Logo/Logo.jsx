import React from "react";
import { NavLink } from "react-router-dom";
import imgLogo from "/images/logo-pizzaria.png";
import "./logo.css";

const Logo = () => {
  return (
    <picture className="img-logo">
      <NavLink to="/">
        <img src={imgLogo} alt="" />
      </NavLink>
    </picture>
  );
};

export default Logo;
