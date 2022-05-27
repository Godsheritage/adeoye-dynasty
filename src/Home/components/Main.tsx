import React from "react";
import Input from "../../shared/Form Elements/Input";
import { MAIN_DETAILS_TYPE } from "../../types";

const Main: React.FC = () => {
  const MAIN_DETAILS: MAIN_DETAILS_TYPE = {
    heading: "This family's story begins in 1878 when david was born",
    subHeading: "Every family has a story",
  };

  return (
    <div className="container">
      <div className="main d-flex flex-column justify-content-center align-items-start ">
        <h3>{MAIN_DETAILS.subHeading}</h3> 
        <h1 className="">{MAIN_DETAILS.heading}</h1>
        <Input className="search-bar" placeHolder="search for family members" />
      </div>
    </div>
  );
};
 
export default Main;
