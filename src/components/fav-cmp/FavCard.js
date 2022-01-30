import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";
import Notification from "../global-cmp//Notification";

const FavCard = () => {
  const { deleteRecipe, currentStateValue, showNotification } =
    useGlobalContext();

  const { favRecipesList, notification } = currentStateValue;

  return (
    <>
      {favRecipesList.map((item) => {
        const { id, title, pic, info } = item;
        return (
          <article
            key={id}
            className="fav_card"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1em",
            }}
          >
            <div className="left">
              <img
                style={{ width: "350px", height: "250px", objectFit: "cover" }}
                src={pic}
                alt={title}
              />
            </div>
            <div className="mid">
              <h1>{title}</h1>
              <p>
                {info.substr(0, 300)}.....
                <Link to={`/recipe/${id}`}>
                  <span style={{ color: "#eb6825", cursor: "pointer" }}>
                    read more
                  </span>
                </Link>
              </p>
            </div>
            <div className="right">
              <FaTimes
                className="times"
                onClick={() => {
                  showNotification("Item Has Been Deleted SuccessFully");
                  deleteRecipe(id);
                }}
              />
              <p>remove from favorites</p>
            </div>
            {notification.status && <Notification />}
          </article>
        );
      })}
    </>
  );
};

export default FavCard;
