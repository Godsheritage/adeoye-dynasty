import React, { useEffect, useState } from "react";
import { familyMemberTypes } from "../../types";
import Footer from "../../shared/UI Elements/footer/Footer";
import FamilyMembersList from "../components/FamilyMembersList";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";
import axios from "axios";


import { useContext } from "react";
import FamilyContext from "../../context/FamilyContext";
import { contextTypes } from "../../types";

const Family: React.FC = () => {
  // const {fetchFamily}  = useContext(FamilyContext) as contextTypes


  const [familyMembers, setFamilyMembers] =
  useState<familyMemberTypes[]>();

  
  const fetchFamily: any = async () => {
    const response = await axios.get("http://localhost:1234/family/members");
    setFamilyMembers(response.data);
  };

  useEffect( () => {
    fetchFamily();
  });

  // useEffect(() => {
  //   fetchFamily()
  // }, [])
  return (
    <>
      <CustomHeader location="/family" />
      <FamilyMembersList familyMember = {familyMembers} />
      <Footer />
    </>
  );
};

export default Family;
