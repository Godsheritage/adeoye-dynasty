import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks: React.FC<any> = ({ className, navStyles }) => {
  return (
    <ul className={className}>
      <li>
        <NavLink  to="/" className={`text-decoration-none ${navStyles} `}>
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
    </ul>
  );
};

export default Navlinks;
