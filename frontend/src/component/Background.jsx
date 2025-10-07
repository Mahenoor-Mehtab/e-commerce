import React from "react";
import back1 from "../assets/back1.avif";
import back3 from "../assets/back3.avif";
import back6 from "../assets/back6.jpg";
import back4 from "../assets/back4.avif";

const Background = ({ heroCount }) => {
  let bgImage;
  if (heroCount === 0) bgImage = back1;
  else if (heroCount === 1) bgImage = back3;
  else if (heroCount === 2) bgImage = back6;
  else bgImage = back4;

  return (
    <div className="absolute top-0 right-0 w-1/2 h-full">
      <img src={bgImage} alt="hero background" className="w-full h-full object-cover" />
    </div>
  );
};

export default Background;
