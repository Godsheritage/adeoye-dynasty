import { useParams } from "react-router-dom";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";
import Footer from "../../shared/UI Elements/footer/Footer";
import FamilyForm from "./FamilyForm";
const AddFamily: React.FC = () => {
  const params = useParams()
  return (
    <div>
      <CustomHeader location="/dashboard" />
      <FamilyForm />
      <Footer />
    </div>
  );
};

export default AddFamily;
