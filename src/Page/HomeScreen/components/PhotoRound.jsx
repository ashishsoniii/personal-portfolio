import React from "react";
import img from "../../../assets/ashish4.jpg";

function PhotoRound() {
  return (
    <div className="flex items-center justify-center">
      <img
        className="rounded-full w-56 h-56 object-cover shadow-lg"
        src={img}
        alt="Ashish Soni"
      />
    </div>
  );
}

export default PhotoRound;
