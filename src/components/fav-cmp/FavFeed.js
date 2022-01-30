import React from "react";
import FavCard from "./FavCard";
import { useGlobalContext } from "../../context/context";

const FavFeed = () => {
  const { currentStateValue } = useGlobalContext();

  if (currentStateValue.favRecipesList.length === 0) {
    return (
      <div className="empty_txt">
        <h1>There's Nothing In Favorites Try To Add Some From Recipes</h1>
      </div>
    );
  }

  return (
    <section className="fav_feed_sec">
      <div className="container fav_feed_cont">
        <div className="fav_cards">
          <FavCard />
        </div>
      </div>
    </section>
  );
};

export default FavFeed;
