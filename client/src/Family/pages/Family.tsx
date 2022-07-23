import Footer from "../../shared/UI Elements/footer/Footer";
import FamilyMembersList from "../components/FamilyMembersList";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";

const Family: React.FC = () => {
  return (
    <>
      <CustomHeader location="/family" />
      <FamilyMembersList />
      <Footer />
    </>
  );
};

export default Family;
