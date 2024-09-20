import React from "react";
import { NavLink } from "react-router-dom";
import "./navLoginRegister.css";
import "boxicons";

const NavLoginRegister = () => {
  return (
    <nav className="nav-login-register">
      <ul>
        <li>
          <NavLink className="cart" to="/login">
            <i className="bx bxs-cart"></i>
          </NavLink>
        </li>
        <li>
          <NavLink className="login" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="register" to="/register">
            Cadastre-se
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLoginRegister;
