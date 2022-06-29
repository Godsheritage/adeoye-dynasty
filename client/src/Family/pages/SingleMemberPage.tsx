import "./singleMemberPage.scss";
import { useContext } from "react";
import { contextTypes } from "../../types";
import FamilyContext from "../../context/FamilyContext";
import Footer from "../../shared/UI Elements/footer/Footer";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";

const SingleMemberPage: React.FC = () => {
  const { singleFamilyMember } = useContext(FamilyContext) as contextTypes;
  return (
    <div>
      <CustomHeader location="/family" />
      <div className="d-flex justify-content-apart">
        <div className="img-fluid"></div>
        <div className="member-details">
          <h1>{singleFamilyMember.name}</h1>
          <p>{singleFamilyMember.name}</p>
          <p>{singleFamilyMember.name}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleMemberPage;
