import React from "react";
import pre1 from "../../images/pre1.png";
import pre2 from "../../images/pre2.jpg";

const Advertise = () => {
  return (
    <article
      className="adv"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),url("${pre2}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "500px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <img src={`${pre1}`} alt="recipe" />
    </article>
  );
};

export default Advertise;
