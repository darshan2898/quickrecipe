import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";

const Categorie = () => {
  const { currentStateValue } = useGlobalContext();

  return (
    <>
      {currentStateValue.categoriesList.map((item, index) => {
        const { strCategory } = item;
        return (
          <div className="categorie" key={index}>
            <span>
              <FaRegCheckSquare className="ico" />
            </span>
            <p>{strCategory}</p>
          </div>
        );
      })}
    </>
  );
};

export default Categorie;
