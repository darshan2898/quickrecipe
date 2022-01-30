import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../../images/bg1.jpg";
import {
  FaUtensils,
  FaRegShareSquare,
  FaRegHeart,
  FaRegCreditCard,
} from "react-icons/fa";

const Header = () => {
  return (
    <header
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),url("${bg1}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero">
        <h1>
          ORGANIC, FAST FOOD, MADE EASY
          <br /> HEALTHY RECIPES
        </h1>
        <div className="search_bar">
          <input type="text" placeholder="eg: milkshake" />
          <button>
            <Link to="/recipes">Search</Link>
          </button>
        </div>
        <div className="icons">
          <span>
            <FaUtensils className="com" />
            Recipes
          </span>
          <span>
            <FaRegShareSquare className="com" />
            Sharable
          </span>
          <span>
            <FaRegHeart className="com" />
            Favorites
          </span>
          <span>
            <FaRegCreditCard className="com" />
            Free
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
