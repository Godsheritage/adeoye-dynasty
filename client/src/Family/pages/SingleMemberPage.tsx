import axios from "axios";
import "./singleMemberPage.scss";
import { useEffect } from "react";
import { useContext } from "react";
import { contextTypes } from "../../types";
import { useParams } from "react-router-dom";
import FamilyContext from "../../context/FamilyContext";
import Footer from "../../shared/UI Elements/footer/Footer";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";

const SingleMemberPage: React.FC = () => {
  const { familyMembers } = useContext(FamilyContext) as contextTypes;

  const { name } = useParams();
  const member = familyMembers.find((member: any) => name === member.name);



  return (
    <div>
      <CustomHeader location="/family" />
      <div className="d-flex justify-content-apart">
        <div className="img-fluid"></div>
        <div className="member-details">
          <h1>{member!.name}</h1>
          <p>{member!.name}</p>
          <p>{member!.name}</p>
          <h1>{member!.name}</h1>
          <p>{member!.name}</p>
          <p>{member!.name}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleMemberPage;
