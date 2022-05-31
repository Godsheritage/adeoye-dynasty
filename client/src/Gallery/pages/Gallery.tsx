import FamilyContext from "../../context/FamilyContext";
import { useContext } from "react";
import { contextTypes } from "../../types";
import Footer from "../../shared/UI Elements/footer/Footer";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";

// const FamilyMember = () => {
// return familyMembers.map((member, index) => (
// <Gallery key={index} member={member} />
// ));
// };

const Gallery: React.FC = () => {
  const { familyMembers } = useContext(FamilyContext) as contextTypes;

  return (
    <div>
      <CustomHeader location="/gallery" />

      <div className="gallery-pictures">
        {familyMembers.map((member, index) => (
          <div>
            <img src={member.image} alt="name" className="img-fluid" />
          </div>
        ))}

        {/* 
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
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
