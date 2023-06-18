// import React from "react";
// import Navbar from "./components/Navbar";
// import "./App.css";
// import HomePage from "./Page/HomeScreen/HomePage";

// function App() {
//   return (
//     <>
//       <div className="bg-color">
//         <Navbar />
//         <HomePage />
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./Page/HomeScreen/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-color">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/" element={<HomePage2 />} /> */}

          {/* <HomePage /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
