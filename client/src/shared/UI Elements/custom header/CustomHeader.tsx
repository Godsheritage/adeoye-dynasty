import React from "react";
import "./custom-header.css";
import { Link } from "react-router-dom";
import MainNavigation from "../Navigation/MainNavigation";

interface locationType {
  location: string;
}

const CustomHeader: React.FC<locationType> = ({ location }) => {
  return (
    <div className="custom-header">
      <MainNavigation />
      <div className="links d-flex justify-content-center align-items-center ">
        <Link to="/" className="text-decoration-none text-white">
          Home
        </Link>{" "}
        <Link to={location} className="text-decoration-none text-white">
          {" "}
          {location}
        </Link>
      </div>
    </div>
  );
};

export default CustomHeader;
