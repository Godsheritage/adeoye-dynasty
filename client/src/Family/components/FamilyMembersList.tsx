import React, { useContext, useEffect, useState } from "react";
import FamilyMember from "./FamilyMember";
import FamilyContext from "../../context/FamilyContext";
import { contextTypes, familyMemberTypes2 } from "../../types";

const FamilyMembersList: React.FC<any> = ({familyMember}) => {
  const { familyMembers } = useContext(FamilyContext) as contextTypes;

  

  // useEffect(() => {
  //   fetchFamily();
  // }, []);

  return (
    <div
      className="family-member d-flex flex-wrap justify-content-center align-items-center"
      style={{ backgroundColor: "#EDF1F4" }}
    >
      {familyMembers.map((member:any, index:any) => (
        <FamilyMember key={index} member={member} />
      ))}
    </div>
  );
};

export default FamilyMembersList;
