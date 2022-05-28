import React from "react";
import Navlinks from "./Navlinks";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";

const MainNavigation: React.FC = () => {
  return (
    <>
      {/* <SideDrawer /> */}
      <MainHeader>
        <Link to="/" className="text-decoration-none">
          <h1 className="text-white logo">Adeoye Dynasty</h1>
        </Link>
        <Navlinks className = 'd-flex justify-content-evenly pt-3 link-styles' navStyles='text-white' />
      </MainHeader>
    </>
  );
};

export default MainNavigation;
