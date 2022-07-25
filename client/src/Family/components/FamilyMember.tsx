import React from "react";
import { Link } from "react-router-dom";
import { familyMemberTypes } from "../../types";
import img from "../../shared/pictures/Crownfit.jpg";
import Card from "../../shared/UI Elements/card/Card";

const FamilyMember: React.FC<familyMemberTypes> = ({ member }) => {
  const routes 
  return (
    <div className="family-member">
      <Card className="m-3">
        <Link to={`/family/${member.name}`}>
          {/* <img src={`/images/${member.image}`} alt={member.name} />  */}
         {routes}
        </Link>
      </Card>
    </div>
  );
};

export default FamilyMember;
