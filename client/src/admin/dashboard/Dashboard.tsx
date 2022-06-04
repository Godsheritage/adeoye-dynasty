import "./dashboard.scss";
import Footer from "../../shared/UI Elements/footer/Footer";
import {ReactComponent as AddSVG} from '../../assets/add.svg'
import CustomHeader from "../../shared/UI Elements/custom header/CustomHeader";

const Dashboard = () => {
  return (
    <div>
      <CustomHeader location="/dashboard" />
      <div className="dashboard_bg d-flex justify-content-around pt-5">
        <div className=" d-flex members bg-white align-items-center justify-content-end">
          <h3 className="p-2">Add family members</h3>
        </div>
        <div className="d-flex members bg-white align-items-center justify-content-end">
          <h3 className="p-2">View family members</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
