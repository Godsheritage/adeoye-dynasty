import { useContext } from "react";
import { useParams } from "react-router-dom";
import FamilyContext from "../../context/FamilyContext";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";
import Footer from "../../shared/UI Elements/footer/Footer";
import { contextTypes, familyMemberTypes } from "../../types";
import FamilyForm from "./FamilyForm";
const AddFamily: React.FC = () => {
  const { familyMembers } = useContext(FamilyContext) as contextTypes;
  const { name } = useParams();
  const selected = familyMembers.find(
    (member: familyMemberTypes["member"]) => name === member.name
  );

  return (
    <div>
      <CustomHeader location="/dashboard" />
      <FamilyForm  />
      <Footer />
    </div>
  );
};

export default AddFamily;
