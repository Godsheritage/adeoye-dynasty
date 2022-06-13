import React, { useContext, useEffect, useState } from "react";
import FamilyMember from "./FamilyMember";
import FamilyContext from "../../context/FamilyContext";
import { contextTypes, familyMemberTypes } from "../../types";
import axios from "axios";

const FamilyMembersList: React.FC = () => {
  // const { familyMembers, } = useContext(
  //   FamilyContext
  // ) as contextTypes;

  const [familyMembers, setFamilyMembers] =
    useState<familyMemberTypes["member"][]>();

    
    const fetchFamily: any = async () => {
      const response = await axios.get("http://localhost:1234/family/members");
      setFamilyMembers(response.data);
    };
    useEffect( () => {
      fetchFamily();
    }, [familyMembers]);

  return (
    <div
      className="family-member d-flex flex-wrap justify-content-center align-items-center"
      style={{ backgroundColor: "#EDF1F4" }}
    >
      {familyMembers!.map((member, index) => (
        <FamilyMember key={index} member={member} />
      ))}
    </div>
  );
};

export default FamilyMembersList;
