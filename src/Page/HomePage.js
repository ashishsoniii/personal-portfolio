import React from "react";
import "./Page.css";
import PhotoRound from "../components/PhotoRound";
import HomePage2 from "./HomePage2";
import HomePage3 from "./HomePage3";
import HomePage4 from "./HomePage4";

function HomePage() {
  const Skills = [
    { link: "", text: "React" },
    { link: "", text: "HTML" },
    { link: "", text: "CSS" },
    { link: "", text: "Javascript" },
    { link: "", text: "Web Developement" },
    // Add more buttons as needed
  ];
  return (
    <>
      <div className="homepage-main">
        <div className="hp-left">
          <div className="ashish-txt">Ashish Soni</div>
          <div className="nav tp">
            <div className="nav-btn">
              <a href="/" className="nav-btn-link">
                Web Developer
              </a>
            </div>
            <div className="nav-btn-2 tp">
              <a href="/" className="nav-btn-link2" style={{ color: "black" }}>
                Lorem Ipsum
              </a>
            </div>
          </div>
        </div>
        <div className="hp-right">
          <PhotoRound />
        </div>
      </div>

      {/* Section 2 */}
      {/* Section 2 */}
      {/* Section 2 */}
      {/* Section 2 */}
      <div className="homeSection2">
        {Skills.map((btn, index) => (
          <div className="nav2 tp">
            <div className="nav-btn3" key={index}>
              <h1 className="nav-btn-link3">{btn.text}</h1>
            </div>
          </div>
        ))}
        <div className="hp-right hs2">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            dolore facilis dicta <br /> veniam ad corrupti ratione in
            cupiditate.
          </div>
        </div>
      </div>
      <HomePage2 />
      
      <HomePage3 />
      <HomePage4/>
    </>
  );
}

export default HomePage;
