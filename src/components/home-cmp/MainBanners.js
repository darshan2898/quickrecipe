import React from "react";

const MainBanners = ({ item }) => {
  const { title, icon } = item;
  return (
    <article>
      <div className="top">{icon}</div>
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi id
        laudantium voluptas, nisi.
      </p>
    </article>
  );
};

export default MainBanners;
