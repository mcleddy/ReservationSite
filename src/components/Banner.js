
import React from "react";
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="bannerSection">
      <h2 className="font-effect-neon" id="bannerTitle">{title}</h2>
      <div />
      <p className="font-effect-neon" id="bannerSubtitle">{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
