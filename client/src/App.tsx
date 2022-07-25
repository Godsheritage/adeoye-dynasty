import "./index.scss";
import Home from "./Home/pages/Home";
import Family from "./Family/pages/Family";
import Gallery from "./Gallery/pages/Gallery";
import LogIn from "./admin/dashboard/login/Login";
import Dashboard from "./admin/dashboard/Dashboard";
import AddFamily from "./admin/add family form/AddFamily";
import EditFamily from "./admin/edit family form/EditFamily";
import SingleMemberPage from "./Family/pages/SingleMemberPage";
import { FamilyContextProvider } from "./context/FamilyContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <FamilyContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/family" element={<Family />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addfamilymember/" element={<AddFamily />} />
            <Route path="/edit/:name" element={<EditFamily />} />
            <Route path="/family/:name" element={<SingleMemberPage />} />
          </Routes>
      </FamilyContextProvider>
    </Router>
  );
}

export default App;

//todo  work on the backend
//todo  work on the single page
//todo  work on the gllery page
