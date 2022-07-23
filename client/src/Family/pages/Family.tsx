import { useContext } from "react";
import { contextTypes } from "../../types";
import FamilyContext from "../../context/FamilyContext";
import Footer from "../../shared/UI Elements/footer/Footer";
import FamilyMembersList from "../components/FamilyMembersList";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";

const Family: React.FC = () => {
  const { familyMembers } = useContext(FamilyContext) as contextTypes;
  // console.log(familyMembers)
  return (
    <>
      <CustomHeader location="/family" />
      <FamilyMembersList familyMembers = {familyMembers}/>
      <Footer />
    </>
  );
};

export default Family;
