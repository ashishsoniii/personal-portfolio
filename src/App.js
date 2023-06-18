import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./Page/HomeScreen/HomePage";

function App() {
  return (
    <>
      <div className="bg-color">
        <Navbar />
        <HomePage />
      </div>
    </>
  );
}

export default App;
