import React from "react";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";

function HomePage2() {
  return (
    <>
      <div className="HomePage2">
        <div className="hp2-card1">
          <Card1 />
        </div>
        <div className="hp2-card2">
          <Card2 />
          <div className="hp2-card2 marign-adjust three-bg">
            <Card3 />
          </div>
        </div>
        {/* <div className="hp2-card3">3</div> */}
      </div>
    </>
  );
}

export default HomePage2;
