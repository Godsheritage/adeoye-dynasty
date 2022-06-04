import "./index.scss";
import LogIn from "./admin/Login";
import Home from "./Home/pages/Home";
import Family from "./Family/pages/Family";
import Gallery from "./Gallery/pages/Gallery";
import Dashboard from "./admin/dashboard/Dashboard";
import AddFamily from "./admin/add family form/AddFamily";
import { FamilyContextProvider } from "./context/FamilyContext";
import SingleMemberPage from "./shared/single member/SingleMemberPage";
import ViewFamily from "./admin/view family/ViewFamily";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <FamilyContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<LogIn />} />
          <Route path="/family" element={<Family />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/addfamilymember" element={<AddFamily/>} />
          <Route path="/viewfamily" element={<ViewFamily/>} />
          <Route path="/family/:name" element={<SingleMemberPage/>} />
        </Routes>
      </Router>
    </FamilyContextProvider>
  );
}

export default App;

//todo  work on the backend 
//todo  work on the single page
//todo  work on the gllery page