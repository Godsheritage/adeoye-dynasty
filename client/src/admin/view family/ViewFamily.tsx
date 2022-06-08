import React from "react";
import { useContext } from "react";
import { contextTypes } from "../../types";
import FamilyContext from "../../context/FamilyContext";
import Footer from "../../shared/UI Elements/footer/Footer";
import FamilyMembersList from "../../Family/components/FamilyMembersList";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";

const ViewFamily = () => {
  // const { familyMembers } = useContext(FamilyContext) as contextTypes;
  return (
    <div>
      <CustomHeader location="/dashboard" />
      <FamilyMembersList />
      <Footer />
    </div>
  );
};

export default ViewFamily;
