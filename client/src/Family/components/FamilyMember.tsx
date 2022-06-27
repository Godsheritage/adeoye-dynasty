import React from "react";
import { useContext } from "react";
import { contextTypes } from "../../types";
import FamilyContext from "../../context/FamilyContext";
import { familyMemberTypes } from "../../types";
import Card from "../../shared/UI Elements/card/Card";

const FamilyMember: React.FC<familyMemberTypes> = ({ member }) => {
  const { fetchSingleFamilyMember } = useContext(FamilyContext) as contextTypes;

  const singleFamilyMember = () => {};

  return (
    <div className="family-member">
      <Card>
        <img
          src={`/images/${member.image}`}
          alt={member.name}
          onClick={fetchSingleFamilyMember(member)}
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
