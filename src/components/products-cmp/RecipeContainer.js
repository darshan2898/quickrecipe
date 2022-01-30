import React from "react";
import { FaExpand } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

const RecipeContainer = () => {
  const { currentStateValue } = useGlobalContext();
  const { allRecipes } = currentStateValue;

  const showData = () => {
    return allRecipes.map((item) => {
      const newData = {
        id: item.idMeal,
        title: item.strMeal,
        pic: item.strMealThumb,
      };

      const { id, title, pic } = newData;

      return (
        <Link to={`recipe/${id}`} key={id}>
          <article>
            <img src={pic} alt={title} />
            <div className="info">
              <h2>{title}</h2>
            </div>
            <div className="hover_eff">
              <FaExpand />
            </div>
          </article>
        </Link>
      );
    });
  };

  return <>{showData()}</>;
};

export default RecipeContainer;
