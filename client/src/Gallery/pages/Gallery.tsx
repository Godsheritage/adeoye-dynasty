import React, { useContext } from "react";
import Footer from "../../shared/UI Elements/footer/Footer";
import { contextTypes, familyMemberTypes } from "../../types";
import FamilyContext from "../../context/FamilyContext";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";

// const FamilyMember = () => {
//   const { familyMembers } = useContext(FamilyContext) as contextTypes;
//   return familyMembers.map((member, index) => (
// <Gallery key={index} member={member} />
//   ));
// };

const Gallery: React.FC = () => {
  return (
    <div>
      <CustomHeader location="/gallery" />
      <div className="gallery-pictures">
        <div>
          <img
            src={require("../../assets/images/family pictures/Godsheritage.JPG")}
            alt="name"
            className="img-fluid"
          />
        </div>
        <div>
          <img
            src={require("../../assets/images/family pictures/Crownfit.jpg")}
            alt="name"
            className="img-fluid"
          />
        </div>
        <div>
          <img
            src={require("../../assets/images/family pictures/Tunde.jpg")}
            alt="name"
            className="img-fluid"
          />
        </div>
        <div>
          <img
            src={require("../../assets/images/family pictures/Ruth.jpg")}
            alt="name"
            className="img-fluid"
          />
        </div>
        <div>
          <img
            src={require("../../assets/images/family pictures/Mojola.JPG")}
            alt="name"
            className="img-fluid"
          />
        </div>
        <div>
          <img
            src={require("../../assets/images/family pictures/Godsheritage.JPG")}
            alt="name"
            className="img-fluid"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
