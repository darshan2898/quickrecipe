import React from "react";
import ad1 from "../../images/ad1.png";
import ad2 from "../../images/ad2.jpg";

const SecondAd = () => {
  return (
    <article
      className="adv"
      style={{
        marginTop: "5em",
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url("${ad2}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "250px",
        display: "grid",
        placeItems: "center",
        padding: "3em",
      }}
    >
      <img src={`${ad1}`} alt="title" />
    </article>
  );
};

export default SecondAd;
