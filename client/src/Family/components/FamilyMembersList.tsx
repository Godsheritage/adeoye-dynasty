import { useContext } from "react";
import FamilyContext from "../../context/FamilyContext";
import { contextTypes } from "../../types";
import FamilyMember from "./FamilyMember";

const FamilyMembersList: React.FC<any> = ({ familyMembers }) => {
  const {isDashboardMode } = useContext(FamilyContext) as contextTypes
  return (
    <div
      className="family-member d-flex flex-wrap justify-content-center align-items-center"
      style={{ backgroundColor: "#EDF1F4" }}
    >
      {familyMembers.map((member: any, index: number) => (
        <FamilyMember key={index} member={member} link = {isDashboardMode? `/addfamilymember/${member.name}` : `/family/${member.name}`}/>
      ))}
    </div>
  );
};

export default FamilyMembersList;
