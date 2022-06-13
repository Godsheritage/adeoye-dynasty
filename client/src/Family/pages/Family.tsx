import React, { useEffect } from "react";
import Footer from "../../shared/UI Elements/footer/Footer";
import FamilyMembersList from "../components/FamilyMembersList";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";

import { useContext } from "react";
import FamilyContext from "../../context/FamilyContext";
import { contextTypes } from "../../types";

const Family: React.FC = () => {
  const {fetchFamily}  = useContext(FamilyContext) as contextTypes

  useEffect(() => {
    fetchFamily()
  }, [fetchFamily])
  return (
    <>
      <CustomHeader location="/family" />
      <FamilyMembersList />
      <Footer />
    </>
  );
};

export default Family;
