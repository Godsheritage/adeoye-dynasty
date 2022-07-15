import React from "react";
import { useContext } from "react";
import { contextTypes } from "../../types";
import { familyMemberTypes } from "../../types";
import { Link } from "react-router-dom";
import Card from "../../shared/UI Elements/card/Card";
import FamilyContext from "../../context/FamilyContext";

const FamilyMember: React.FC<familyMemberTypes> = ({ member }) => {
  const { fetchSingleFamilyMember } = useContext(FamilyContext) as contextTypes;

  return (
    <div className="family-member">
      <Card>
        <Link to={`/family/${member.name}`}>
          <img
            src={`/images/${member.image}`}
            alt={member.name}
          />
          <div className="d-flex flex-column pt-2 justify-content-around align-items-around">
            <p className=" text-dark">{member.name}</p>
            <p className=" text-dark">Age:{member.age}</p>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default FamilyMember;
