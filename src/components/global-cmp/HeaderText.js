import React from "react";
import { useHistory } from "react-router-dom";

const HeaderText = () => {
  const data = useHistory();
  const headerText = data.location.pathname.substr(1).toUpperCase();

  return (
    <div className="header_txt">
      <h1>{headerText}</h1>
    </div>
  );
};

export default HeaderText;
