import React, {useContext} from "react";
import FamilyMember from "./FamilyMember";
import FamilyContext from "../../context/FamilyContext";
import { contextTypes, familyMemberTypes } from "../../types";

const FamilyMembersList:React.FC = () => {

  const { familyMembers} = useContext(FamilyContext) as contextTypes
 
  return (
    <div className = 'family-member row  justify-content-center align-items-center' style={{ backgroundColor:'#EDF1F4'}}>
      {familyMembers.map((member, index) => (
        <FamilyMember key={index} member={member} />
      ))}
    </div>
  );
};

export default FamilyMembersList;
