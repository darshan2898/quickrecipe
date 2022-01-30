import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { FaHeart } from "react-icons/fa";
import bg2 from "../../images/bg2.jpg";
import { useGlobalContext } from "../../context/context";
import Detail from "./Detail";
import Notification from "../global-cmp/Notification";
import Loading from "../global-cmp/Loading";

const SingleRecipe = () => {
  const {
    currentStateValue,
    singleRecipeData,
    openModal,
    postFavRecipe,
    showNotification,
  } = useGlobalContext();

  // USE_HISTORY HOOK
  const data = useHistory();

  // USE_EFFECT HOOK SHOOT'S SINGLE RECIPE URL ID
  useEffect(() => {
    singleRecipeData(data.location.pathname.substr(8));
  }, []);

  const { singleRecipe, modal, notification } = currentStateValue;

  // CREATED A NEW OBJECT FROM SINGLE RECIPE DATA
  const newRecipe = {
    id: singleRecipe.idMeal,
    title: singleRecipe.strMeal,
    pic: singleRecipe.strMealThumb,
    info: singleRecipe.strInstructions,
    ingredients: [
      singleRecipe.strIngredient1,
      singleRecipe.strIngredient2,
      singleRecipe.strIngredient3,
      singleRecipe.strIngredient4,
      singleRecipe.strIngredient5,
      singleRecipe.strIngredient6,
      singleRecipe.strIngredient7,
      singleRecipe.strIngredient8,
      singleRecipe.strIngredient9,
      singleRecipe.strIngredient10,
      singleRecipe.strIngredient11,
      singleRecipe.strIngredient12,
      singleRecipe.strIngredient13,
      singleRecipe.strIngredient14,
      singleRecipe.strIngredient15,
      singleRecipe.strIngredient16,
      singleRecipe.strIngredient17,
      singleRecipe.strIngredient18,
      singleRecipe.strIngredient19,
      singleRecipe.strIngredient20,
    ],
  };

  // DESTRUCTURED NEW Recipe
  const { id, title, pic, info, ingredients } = newRecipe;
  return (
    <>
      {!id ? (
        <Loading />
      ) : (
        <section
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8)),url("${bg2}")`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100vh",
          }}
          className="single_page_recipe"
        >
          <div className="single_data container">
            <div className="info_single_page">
              <div className="left">
                <img src={`${pic}`} alt={title} />
              </div>
              <div className="right">
                <h2>{title}</h2>
                <ul>
                  {ingredients.map((list, index) => {
                    if (!list) {
                      return false;
                    }
                    return <li key={index}>{list}</li>;
                  })}
                </ul>
                <p>
                  {info.substr(0, 350)}.....
                  <span
                    onClick={() => {
                      openModal();
                    }}
                  >
                    read more
                  </span>
                </p>
                <button
                  onClick={() => {
                    postFavRecipe(newRecipe);
                    showNotification("item added successfully!");
                  }}
                >
                  add to Favorites
                  <span>
                    <FaHeart className="ico" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {modal && <Detail info={info} />}
          {notification.status && <Notification />}
        </section>
      )}
    </>
  );
};

export default SingleRecipe;
