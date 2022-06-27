import React from "react";
import { familyMemberTypes } from "../../types";
import { useNavigate } from "react-router-dom";
import Card from "../../shared/UI Elements/card/Card";

const FamilyMember: React.FC<familyMemberTypes> = ({ member }) => {
  const navigate = useNavigate();

  const singleFamilyMember = () => {
    
    navigate(`/family/${member.name}`)
  }

  return (
    <div className="family-member">
      <Card>
        <img
          src={`/images/${member.image}`} 
          alt={member.name}
          onClick={singleFamilyMember}
        /> 
        <div className="d-flex flex-column pt-2 justify-content-around align-items-around">
          <p className=" text-dark">{member.name}</p>
          <p className=" text-dark">Age:{member.age}</p>
        </div>
      </Card>
    </div>
  );
};

export default FamilyMember;  
