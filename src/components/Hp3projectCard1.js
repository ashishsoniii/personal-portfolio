import React from "react";

function Hp3projectCard1({ heading, link, backgroundColor }) {
  return (
    <div className={`hp-projects ${backgroundColor}`}>
      <div className={`hp3-card ${backgroundColor}`}>
        <div className={`hp3-card-heading ${backgroundColor}`}>{heading}</div>
        <div className={`hp3-card-content ${backgroundColor}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          beatae enim?
        </div>
        <div className={`hp3-card-link ${backgroundColor}`}>
          <a href={link}>Link</a>
        </div>
      </div>
    </div>
  );
}

export default Hp3projectCard1;
