import React from "react";
import Navlinks from "./Navlinks";

const SideDrawer = () => {
  return (
    <div>
      <Navlinks className = {`side-drwawer__navLinks  link-styles`} navStyles='text-dark' />
    </div>
  );
};

export default SideDrawer;
 