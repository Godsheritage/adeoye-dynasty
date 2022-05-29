import React from "react";
import { familyMemberTypes } from "../../types";
import { useNavigate } from "react-router-dom";
import Card from "../../shared/UI Elements/card/Card";

const FamilyMember: React.FC<familyMemberTypes> = ({ member }) => {
  const navigate = useNavigate();
  return (
    <div className="family-member">
      <Card>
        <img
          src={member.image}
          alt={member.name}
          onClick={() => navigate(`/family/${member.name}`)}
        />
        <div className="d-flex flex-column justify-content-around align-items-around">
          <p className=" text-dark">{member.name}</p>
          <p className=" text-dark">Age:{member.age}</p>
        </div>
      </Card>
    </div>
  );
};

export default FamilyMember;
