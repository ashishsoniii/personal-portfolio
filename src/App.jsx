
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Page/HomeScreen/LandingPage.jsx";
import WorkExperience from "./Page/HomeScreen/WorkExperience.jsx";
import ExperienceDetail from "./Page/ExperienceDetail/ExperienceDetail.jsx";
// import Gsoc from "./Page/Gsoc/Gsoc";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="bg-website">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/experience" element={<WorkExperience />} />
          <Route exact path="/experience/:id" element={<ExperienceDetail />} />
          {/* <Route exact path="/gsoc" element={<Gsoc />} /> */}
          {/* <Route exact path="/" element={<HomePage2 />} /> */}

          {/* <HomePage /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
