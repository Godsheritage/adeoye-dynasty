import React from "react";
import { Link } from "react-router-dom";
import { familyMemberTypes } from "../../types";
import img from "../../shared/pictures/Crownfit.jpg";
import Card from "../../shared/UI Elements/card/Card";
const ViewFamilyMember: React.FC<familyMemberTypes> = ({ member }) => {
    const setFormHandler = () => {
        
    }
  return (
    <div className="family-member">
      <Card className="m-3" >
          {/* <img src={`/images/${member.image}`} alt={member.name} />  */}
          <img src={img} alt={member.name} className="img-fluid" onClick={setFormHandler} />
          <div className="d-flex flex-column pt-2 justify-content-around align-items-around">
            <p className=" text-dark">{member.name}</p>
            <p className=" text-dark">Age:{member.age}</p>
          </div>
      </Card>
    </div>
  );
};

export default ViewFamilyMember;
