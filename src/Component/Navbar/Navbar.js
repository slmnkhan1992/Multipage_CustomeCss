import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
        <a href="#">Muhammad Salman</a>
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" key="home">
            Home
          </Link>
        </li>

        <li>
          <Link to="/product" key="product">
            Products
          </Link>
        </li>

        <li>
          <Link to="/contact" key="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

