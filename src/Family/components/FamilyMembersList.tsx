import React, {useContext} from "react";
import { contextTypes, familyMemberTypes } from "../../types";
import FamilyMember from "./FamilyMember";
import FamilyContext from "../../context/FamilyContext";

const FamilyMembersList:React.FC = () => {

  const { familyMembers} = useContext(FamilyContext) as contextTypes
 
  return (
    <div className = ' family-member d-flex flex-row p-5 flex-wrap ' style={{ backgroundColor:'#EDF1F4'}}>
      {familyMembers.map((member, index) => (
        <FamilyMember key={index} member={member} />
      ))}
    </div>
  );
};

export default FamilyMembersList;
