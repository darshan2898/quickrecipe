import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";

const Detail = ({ info }) => {
  const { closeModal } = useGlobalContext();

  return (
    <div
      className="detail_box"
      onClick={() => {
        closeModal();
      }}
    >
      <p>
        {info}
        <FaTimes
          className="close"
          onClick={() => {
            closeModal();
          }}
        />
      </p>
    </div>
  );
};

export default Detail;
