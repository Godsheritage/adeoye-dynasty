import { contextTypes } from "../../types";
import FamilyMember from "./FamilyMember";
import React, { useContext,  } from "react";
import FamilyContext from "../../context/FamilyContext";

const FamilyMembersList: React.FC<any> = ({familyMember}) => {
  const { familyMembers } = useContext(FamilyContext) as contextTypes;

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
