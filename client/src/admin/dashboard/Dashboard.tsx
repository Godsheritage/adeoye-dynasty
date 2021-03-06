import "./dashboard.scss";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AddImage from "../../assets/add.svg";
import EditImage from "../../assets/edit.png";
import Footer from "../../shared/UI Elements/footer/Footer";
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";
import FamilyContext from "../../context/FamilyContext";
import { contextTypes } from "../../types";


const Dashboard: React.FC<any> = () => {
  const {setIsDashboardMode} = useContext(FamilyContext) as contextTypes
  return (
    <div>
      <CustomHeader location="/dashboard" />
      <div className="dashboard_bg d-flex justify-content-around pt-5">
        <div className=" d-flex members bg-white align-items-center justify-content-around">
          <Link to="/addfamilymember">
            <img className="add-svg" src={AddImage} alt="add-icon" />
          </Link>
          <h3 className="p-2">Add family members</h3>
        </div>
        <div className="d-flex members bg-white align-items-center justify-content-around">
          <Link to="/family">
            <img className="add-svg" src={EditImage} alt="edit-icon" onClick={() => setIsDashboardMode(true)}/>
          </Link>
          <h3 className="p-2">View family members</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
