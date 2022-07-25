import { contextTypes, familyMemberTypes } from "../../types";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import FamilyContext from "../../context/FamilyContext";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";
import FamilyForm from "../add family form/FamilyForm";
import Footer from "../../shared/UI Elements/footer/Footer";

const EditFamily = () => {
  const { familyMembers } = useContext(FamilyContext) as contextTypes;
  const { name } = useParams();
  const selected = familyMembers.find(
    (member: familyMemberTypes["member"]) => name === member.name
  );
  return (
    <div>
      <CustomHeader location="/dashboard" />
      <FamilyForm />
      <Footer />
    </div>
  );
};

export default EditFamily;
