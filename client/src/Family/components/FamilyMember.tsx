import React from "react";
import { useContext } from "react";
import { contextTypes } from "../../types";
import { familyMemberTypes } from "../../types";
import { Link } from "react-router-dom";
import Card from "../../shared/UI Elements/card/Card";
import FamilyContext from "../../context/FamilyContext";

const FamilyMember: React.FC<familyMemberTypes> = ({ member }) => {

  return (
    <div className="family-member">
      <Card>
        <Link to={`/family/${member.name}`}>
          <img
            src={`/images/${member.image}`}
            alt={member.name}
          />
<<<<<<< 
        </Link>
=======
>>>>>>> 968c0ff34b100adf5a9b9bdc46f6e7722d1abcc6
          <div className="d-flex flex-column pt-2 justify-content-around align-items-around">
            <p className=" text-dark">{member.name}</p>
            <p className=" text-dark">Age:{member.age}</p>
          </div>
<<<<<<< HEAD
=======
        </Link>
>>>>>>> 968c0ff34b100adf5a9b9bdc46f6e7722d1abcc6
      </Card>
    </div>
  );
};

export default FamilyMember;
