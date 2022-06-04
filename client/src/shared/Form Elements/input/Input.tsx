import "./input.scss";
import React from "react";
import { inputTypes } from "../../../types";
import { FaSearch } from "react-icons/fa";

const Input: React.FC<inputTypes> = ({ className, placeHolder }) => {
  return (
    <div className="search">
      <input className={className} placeholder={placeHolder} />
      <button>
        <FaSearch className="search-btn" size="1.8rem" />
      </button>
    </div>
  );
};

export default Input;
