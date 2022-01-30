import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";

const SearchBar = () => {
  const { setInput, input } = useGlobalContext();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="secondary_search_bar">
      <form onSubmit={submitHandler}>
        <FaSearch className="icon" />
        <input
          type="text"
          id="name"
          placeholder="eg: apple pie"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
