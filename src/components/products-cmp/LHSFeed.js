import React from "react";
import { FaUtensils } from "react-icons/fa";
import Categorie from "./Categorie";

const LHSFeed = () => {
  return (
    <div className="lhs_feed">
      <h1>
        <span>
          <FaUtensils />
        </span>
        Categories
      </h1>
      <div className="categories">
        <Categorie />
      </div>
    </div>
  );
};

export default LHSFeed;
