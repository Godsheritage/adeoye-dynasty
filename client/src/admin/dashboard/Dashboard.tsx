import "./dashboard.scss";
import Footer from "../../shared/UI Elements/footer/Footer";
import AddImage from "../../assets/add.svg";
import EditImage from "../../assets/edit.png";

import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";
import { useNavigate, Link } from "react-router-dom";

const Dashboard: React.FC<any> = () => {
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
          <Link to="/viewfamily">
            <img className="add-svg" src={EditImage} alt="edit-icon" />
          </Link>
          <h3 className="p-2">View family members</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
