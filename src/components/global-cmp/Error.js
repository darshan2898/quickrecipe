import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error_page">
        <h1>404</h1>
        <p>Page Not Found</p>
        <button>
          <Link to="/">Return Home</Link>
        </button>
      </div>
    </>
  );
};

export default Error;
