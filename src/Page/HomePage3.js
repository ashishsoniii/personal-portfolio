import React from "react";
import Hp3projectCard1 from "../components/Hp3projectCard1";

function HomePage3() {
  return (
    <>
      <div className="homepage3-heading">Projects</div>
      <section className="homepage3">
        <div className="firstTwo">
          <Hp3projectCard1
            heading="No Limits Fitness Gym App"
            link="/lik"
            backgroundColor="hp3-bg-white"
          />
          <Hp3projectCard1
            heading="RasYog"
            link="/lik"
            backgroundColor="hp3-bg-yellow"
          />
        </div>
        <div className="firstTwo">
          <Hp3projectCard1
            heading="DineYog"
            link="/lik"
            backgroundColor="hp3-bg-blue"
          />
          <Hp3projectCard1
            heading="FlairFest"
            link="/lik"
            backgroundColor="hp3-bg-green"
          />
        </div>
      </section>
    </>
  );
}

export default HomePage3;
