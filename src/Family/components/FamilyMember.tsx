import React from "react";
import Card from "../../shared/UI Elements/card/Card";
import { familyMemberTypes } from "../../types";

const FamilyMember: React.FC<familyMemberTypes> = ({ member }) => {
  return (
    <div className="family-member d-flex flex-row">
      <Card>
        <img src={member.image} alt={member.name} />
        <p className="p-2">{member.name}</p>
      </Card>
    </div>
  );
};

export default FamilyMember;
