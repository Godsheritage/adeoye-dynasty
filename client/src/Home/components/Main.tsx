import React from "react";
import Input from "../../shared/Form Elements/input/Input";
import { FaSearch } from "react-icons/fa";
import { MAIN_DETAILS_TYPE } from "../../types";
import "./main.scss";

const Main: React.FC = () => {
  const MAIN_DETAILS: MAIN_DETAILS_TYPE = {
    heading: "This story begins in 1878, the year David was born",
    subHeading: "Every family has a story",
  };

  return (
    <div className="container">
      <div className="main d-flex flex-column justify-content-center align-items-start ">
        <h3>{MAIN_DETAILS.subHeading}</h3>
        <h1 className="">{MAIN_DETAILS.heading}</h1>
        <div className="search-section">
          <Input
            className="search-bar"
            placeholder="search for family members"
            element="input"
            type="text"
            errorText=""
          />
          <button className="search-btn">
            <FaSearch className="search-icon" size="1.8rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
