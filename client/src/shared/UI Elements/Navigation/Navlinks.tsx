import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import FamilyContext from "../../../context/FamilyContext";
import { contextTypes } from "../../../types";

const Navlinks: React.FC<any> = ({ className, navStyles }) => {
  const { isLoggedInMode } = useContext(FamilyContext) as contextTypes;
  return (
    <ul className={className}>
      <li>
        <NavLink to="/" className={`text-decoration-none ${navStyles} `}>
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/family" className={`text-decoration-none ${navStyles} `}>
          Family
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/gallery" className={`text-decoration-none ${navStyles} `}>
          Gallery
        </NavLink>
      </li>
      {!isLoggedInMode && (
        <li className="">
          <NavLink
            to="/login"
            className={`text-decoration-none ${navStyles} `}
          >
            Log In
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navlinks;
