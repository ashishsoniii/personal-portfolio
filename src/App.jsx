
import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import HomePage from "./Page/HomeScreen/HomePage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Page/HomeScreen/LandingPage.jsx";
// import Gsoc from "./Page/Gsoc/Gsoc";

function App() {
  return (
    <>
      <div className="bg-website">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route exact path="/gsoc" element={<Gsoc />} /> */}
          {/* <Route exact path="/" element={<HomePage2 />} /> */}

          {/* <HomePage /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
