import React from "react";
import RecipeContainer from "./RecipeContainer";
import { useGlobalContext } from "../../context/context";
import Loading from "../global-cmp/Loading";
import { BiSad } from "react-icons/bi";

const MiddleFeed = () => {
  const { currentStateValue } = useGlobalContext();

  if (!currentStateValue.allRecipes) {
    return (
      <h2
        style={{
          fontSize: "3rem",
          width: "100%",
          textAlign: "center",
          fontWeight: "normal",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "0.5em" }}>
          no such recipe available...
        </span>
        <BiSad style={{ color: "#eb6825", fontSize: "5rem" }} />
      </h2>
    );
  }

  return (
    <div className="middle_feed">
      {currentStateValue.loading ? (
        <Loading />
      ) : (
        <div className="recipes_articles">
          <RecipeContainer />
        </div>
      )}
      {/* <h1>Recipes</h1> */}
    </div>
  );
};

export default MiddleFeed;
