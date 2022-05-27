import React from "react";
import { familyMemberTypes } from "../../types";
import Card from "../../shared/UI Elements/card/Card";

const FamilyMember: React.FC<familyMemberTypes> = ({ member }) => {
  return (
    <div className="family-member col-lg-3 col-md-4 col-sm-6">
      <Card>
        <img src={member.image} alt={member.name} />
        <p className="p-2">{member.name}</p>
      </Card>
    </div>
  );
};

export default FamilyMember;
