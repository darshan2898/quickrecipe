import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h1>Quick-Recipe</h1>
        </Link>
      </div>
      <div className="nav_items">
        <ul>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
