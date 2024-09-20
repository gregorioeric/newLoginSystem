import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pizzas">Nosso Menu</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
