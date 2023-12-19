// Banner.jsx
import React from "react";

export const Banner = (props) => {
  return (
    <div id="banner" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.title}</h2>
          <h3>{props.text}</h3>
        </div>
      </div>
    </div>
  );
};
