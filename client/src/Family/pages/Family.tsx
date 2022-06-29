// import React, { useEffect, useState } from "react";
// import { familyMemberTypes } from "../../types";
import Footer from "../../shared/UI Elements/footer/Footer";
import FamilyMembersList from "../components/FamilyMembersList";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";
// import axios from "axios";

// import { useContext } from "react";
// import FamilyContext from "../../context/FamilyContext";
// import { contextTypes } from "../../types";

const Family: React.FC = () => {
  // const { fetchFamily, familyMembers } = useContext(FamilyContext) as contextTypes;
  return (
    <>
      <CustomHeader location="/family" />
      <FamilyMembersList />
      <Footer />
    </>
  );
};

export default Family;
