import "./singleMemberPage.scss";
import { useContext } from "react";
import { contextTypes } from "../../types";
import FamilyContext from "../../context/FamilyContext";
import { useParams } from "react-router-dom";
import Footer from "../../shared/UI Elements/footer/Footer";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";

const SingleMemberPage: React.FC = () => {
  const { fetchSingleFamilyMember } = useContext(FamilyContext) as contextTypes;

  const {name} = useParams()
  const member = fetchSingleFamilyMember(name)
  // const member = members[0] 
  // console.log(members) 
  return (
    <div>
      <CustomHeader location="/family" />
      <div className="d-flex justify-content-apart">
        <div className="img-fluid"></div>
        <div className="member-details">
          <h1>{member.name}</h1>
          <p>{member.name}</p>
          <p>{member.name}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleMemberPage;
