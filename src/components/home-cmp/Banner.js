import React from "react";
import { Link } from "react-router-dom";
import bg2 from "../../images/bg2.jpg";

const Banner = () => {
  return (
    <section
      className="img_banner"
      style={{
        width: "100%",
        height: "350px",
        display: "grid",
        placeItems: "center",
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url("${bg2}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h1>save more and create more</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button>
          <Link to="/favorites">Favorites</Link>
        </button>
      </div>
    </section>
  );
};

export default Banner;
