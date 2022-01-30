import React from "react";
import MainBanners from "./MainBanners";
import { FaRegPlusSquare, FaBookReader, FaRegBookmark } from "react-icons/fa";

const localData = [
  {
    id: 1,
    title: "Choose A Recipe",
    icon: <FaRegPlusSquare />,
  },
  {
    id: 2,
    title: "Read A Recipe",
    icon: <FaBookReader />,
  },
  {
    id: 3,
    title: "Add To Favorites",
    icon: <FaRegBookmark />,
  },
];

const Main = () => {
  return (
    <section className="main">
      <main className="container">
        <h1>How It Works</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="banner">
          {localData.map((item) => {
            return <MainBanners key={item.id} item={item} />;
          })}
        </div>
      </main>
    </section>
  );
};

export default Main;
