import "./index.scss";
import Home from "./Home/pages/Home";
import Family from "./Family/pages/Family";
import Gallery from "./Gallery/pages/Gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FamilyContext from "./context/FamilyContext";
import { FamilyContextProvider } from "./context/FamilyContext";

function App() {
  return (
    <FamilyContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/family" element={<Family />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </FamilyContextProvider>
  );
}

export default App;
