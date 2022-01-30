import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context/context";

const Notification = () => {
  const { currentStateValue, hideNotification } = useGlobalContext();
  const { notification } = currentStateValue;

  return (
    <div
      className="notification"
      onClick={() => {
        hideNotification();
      }}
    >
      <div className="content">
        <div
          className="icon"
          onClick={() => {
            hideNotification();
          }}
        >
          <FaTimes />
        </div>
        <p>{notification.text}</p>
        <Link to={"/favorites"}>come check here...</Link>
      </div>
    </div>
  );
};

export default Notification;
