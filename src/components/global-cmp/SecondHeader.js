import React from "react";
import SearchBar from "./SeachBar";
import bg1 from "../../images/bg1.jpg";
import bg2 from "../../images/bg2.jpg";
import bg3 from "../../images/bg3.jpg";
import HeaderText from "./HeaderText";
import { useHistory } from "react-router-dom";

const SecondHeader = () => {
  const data = useHistory();

  if (data.location.pathname === "/favorites") {
    return (
      <div className="secondary_header">
        <img src={bg3} alt="" />
        <div className="black">
          <HeaderText />
        </div>
      </div>
    );
  }

  if (data.location.pathname === "/contact") {
    return (
      <div className="secondary_header">
        <img src={bg1} alt="" />
        <div className="black">
          <HeaderText />
        </div>
      </div>
    );
  }

  return (
    <div className="secondary_header">
      <img src={bg2} alt="" />
      <div className="black">
        <SearchBar />
      </div>
    </div>
  );
};

export default SecondHeader;
