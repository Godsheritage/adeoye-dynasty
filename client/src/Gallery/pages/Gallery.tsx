import { useContext } from "react";
import { contextTypes } from "../../types";
import FamilyContext from "../../context/FamilyContext";
import Footer from "../../shared/UI Elements/footer/Footer";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";

const Gallery: React.FC = () => {
  const { familyMembers } = useContext(FamilyContext) as contextTypes;

  return (
    <div>
      <CustomHeader location="/gallery" />

      <div className="gallery-pictures">
        {familyMembers.map((member:any, index:number) => (
          <div key={index}>
            <img
              src={`images/${member.image}`}
              alt={member.name}
              className="img-fluid"
              />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
