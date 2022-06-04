import React from "react";
import { useContext } from "react";
import { contextTypes } from "../../types";
import FamilyContext from "../../context/FamilyContext";
import Footer from "../../shared/UI Elements/footer/Footer";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";

const ViewFamily = () => {
  const { familyMembers } = useContext(FamilyContext) as contextTypes;
  return (
    <div>
      <CustomHeader location="/dashboard" />
      {familyMembers.map((member, index) => (
        <div className="d-flex w-100 bg-secondary m-1">
          <div>{member.name}</div>
          <div>{member.age}</div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default ViewFamily;
